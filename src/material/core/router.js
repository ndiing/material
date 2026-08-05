import { QueryBuilder } from "./query-builder.js";

class Router {
    constructor(routes, options = {}) {
        this.routes = [...routes];
        const { timeout = 5000, historyApiFallback = false, base = "http://localhost", head } = options;
        this.timeout = timeout;
        this.historyApiFallback = historyApiFallback;
        this.base = base;
        this.head = head;
        this.url = new URL("/", this.base);
        this.queryBuilder = new QueryBuilder(this.url.searchParams);
        this.query = {};
        this.params = {};
        this.controller = null;
    }
    _getRoutes(routes = this.routes, parent = null, result = []) {
        this.params = {};
        for (const route of routes) {
            if (!route.input) {
                route.parent = parent;
                route.input = `${route.parent?.input ?? "/"}/${route.path}`.replace(/\/+/g, "/").replace(/(?!^)\/$/, "");
                route.pattern = new URLPattern(route.input, this.base);
            }
            if (route.pattern.test(this.url.pathname, this.base)) {
                const execResult = route.pattern.exec(this.url.pathname, this.base);
                this.params = execResult?.pathname?.groups ?? {};
                return [...result, route];
            }
            if (route?.children && route.children?.length) {
                const matches = this._getRoutes(route.children, route, [...result, route]);
                if (matches) {
                    return matches;
                }
            }
        }
        return null;
    }
    async _beforeLoad(route) {
        return new Promise((resolve, reject) => {
            const next = (err) => {
                clearTimeout(timeout);
                if (this.controller) {
                    this.controller.signal.removeEventListener("abort", handleAbort);
                }
                if (err) reject(err);
                else resolve();
            };
            const handleTimeout = () => {
                next(new Error(`beforeLoad timeout on path: ${route.input}`));
            };
            const timeout = setTimeout(handleTimeout, this.timeout);
            const handleAbort = (event) => {
                next(event);
            };
            if (this.controller) {
                this.controller.signal.addEventListener("abort", handleAbort);
            }
            route.beforeLoad(this, next);
        });
    }
    async _getOutlet(route, container) {
        return new Promise((resolve, reject) => {
            let outlet;
            const target = route.outlet ? document.body : container;
            const selector = route.outlet ? `md-outlet[name="${route.outlet}"]` : "md-outlet:not([name])";
            const resolveOutlet = () => {
                outlet = target.querySelector(selector);
                if (outlet) {
                    clearTimeout(timeout);
                    observer.disconnect();
                    resolve(outlet);
                }
            };
            const observer = new MutationObserver(resolveOutlet);
            observer.observe(target, {
                childList: true,
                subtree: true,
            });
            const rejectOutlet = () => {
                observer.disconnect();
                reject(new Error(`Outlet [${selector}] not found for route: ${route.input}`));
            };
            const timeout = setTimeout(rejectOutlet, this.timeout);
            resolveOutlet();
        });
    }
    async _renderComponent(route) {
        if (!route.component) {
            if (!route.load) {
                throw new Error(`route.load() not set for path: ${route.input}`);
            }
            route.component = await route.load(this);
        }
        if (!route.component) {
            throw new Error(`route.component not resolved for path: ${route.input}`);
        }
        const container = route.parent?.component ?? document.body;
        const outlet = await this._getOutlet(route, container);
        if (!route.component.isConnected) {
            route.component.isComponent = true;
            route.component.router = this;
            route.component.route = route;
            outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
        }
    }
    _removeComponent(activeRoutes = []) {
        const outlets = Array.from(document.body.querySelectorAll("md-outlet"));
        for (const outlet of outlets) {
            let nextElement = outlet.nextElementSibling;
            while (nextElement) {
                if (nextElement.isComponent && !activeRoutes.find((route) => nextElement === route.component) && !outlets.find((o) => nextElement === o)) {
                    const toRemove = nextElement;
                    nextElement = nextElement.nextElementSibling;
                    toRemove.remove();
                } else {
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
    }
    _parseURL() {
        if (this.historyApiFallback) {
            return URL.parse(window.location.href);
        } else {
            return URL.parse(window.location.hash.slice(1), this.base);
        }
    }
    async _handleNavigation() {
        // performance.mark("onNavigationStart");

        this.emit("onNavigationStart", this);
        const { pathname, search, hash } = this._parseURL();
        this.url.pathname = pathname;
        this.url.search = search;
        this.url.hash = hash;
        this.query = this.queryBuilder.toJSON();
        const routes = this._getRoutes();
        if (!routes || routes.length === 0) {
            this.emit("onNavigationError", new Error(`404 Not Found: ${this.url.pathname}`));
            return;
        }
        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }
        this.controller = new AbortController();
        for (const route of routes) {
            if (route.redirectTo) {
                return this.navigate(route.redirectTo);
            }
            if (route.beforeLoad) {
                try {
                    this.emit("onGuardsCheckStart", this);
                    await this._beforeLoad(route);
                    this.emit("onGuardsCheckEnd", this);
                } catch (error) {
                    if (error.type === "abort" || error.name === "AbortError") {
                        return;
                    } else {
                        this.emit("onNavigationError", error);
                        throw error;
                    }
                }
            }
            try {
                await this._renderComponent(route);
            } catch (err) {
                this.emit("onNavigationError", err);
                throw err;
            }
        }
        this._removeComponent(routes);
        this.emit("onNavigationEnd", this);

        // performance.mark("onNavigationEnd");
        // performance.measure("measureNavigation", "onNavigationStart", "onNavigationEnd");
        // performance.clearMarks("onNavigationStart");
        // performance.clearMarks("onNavigationEnd");
        // performance.clearMeasures("measureNavigation");
    }
    navigate(url, options = {}) {
        let targetUrl = url;
        if (!targetUrl) {
            targetUrl = `${this.url.pathname}${this.url.search}${this.url.hash}`;
        }
        if (this.historyApiFallback) {
            if (options.replace) {
                window.history.replaceState({}, "", targetUrl);
            } else {
                window.history.pushState({}, "", targetUrl);
            }
            this._handleNavigation();
        } else {
            window.location.hash = targetUrl;
        }
    }
    _handleNavigate(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (!routerLink) return;
        event.preventDefault();
        const url = routerLink.getAttribute("routerLink");
        this.navigate(url);
    }
    listen() {
        if (document.readyState === "loading") {
            window.addEventListener("DOMContentLoaded", () => this._handleNavigation());
        } else {
            this._handleNavigation();
        }
        if (this.historyApiFallback) {
            window.addEventListener("popstate", () => this._handleNavigation());
        } else {
            window.addEventListener("hashchange", () => this._handleNavigation());
        }
        window.addEventListener("click", (event) => this._handleNavigate(event));
    }
    on(type, listener) {
        window.addEventListener(type, listener);
    }
    off(type, listener) {
        window.removeEventListener(type, listener);
    }
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }
    search(...args) {
        this.queryBuilder.search(...args);
        return this;
    }
    filter(...args) {
        this.queryBuilder.filter(...args);
        return this;
    }
    sort(...args) {
        this.queryBuilder.sort(...args);
        return this;
    }
    paginate(...args) {
        this.queryBuilder.paginate(...args);
        return this;
    }
    slice(...args) {
        this.queryBuilder.slice(...args);
        return this;
    }
    hash(hash) {
        this.url.hash = hash;
        return this;
    }
    clear(...args) {
        this.url.hash = "";
        this.queryBuilder.clear(...args);
        return this;
    }
    reload(force = false) {
        if (force) {
            window.location.reload();
        } else {
            this._handleNavigation();
        }
    }
    back() {
        window.history.back();
    }
    forward() {
        window.history.forward();
    }
}

export { Router };
