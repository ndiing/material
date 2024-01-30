class MDRouter {
    static setRoutes(routes = [], parent = null) {
        return routes.reduce((prev, curr) => {
            curr.parent = parent;
            curr.pattern = [curr.parent?.pattern ?? "", curr.path].join("/").replace(/\/+/g, "/");

            prev.push(curr);

            if (curr.children?.length) {
                prev.push(...this.setRoutes(curr.children, curr));
            }

            return prev;
        }, []);
    }

    static getRoute() {
        return this.routes.find((route) => {
            const pattern = "^" + route.pattern.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)";
            const regexp = new RegExp(pattern, "i");
            const matches = this.path.match(regexp);

            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }

            return null;
        });
    }

    static getRoutes(route) {
        return [route].reduce((prev, curr) => {
            if (curr.parent) {
                prev.push(...this.getRoutes(curr.parent));
            }

            prev.push(curr);

            return prev;
        }, []);
    }

    static getOutlet(route) {
        return new Promise((resolve) => {
            let outlet;
            let observer;
            let target = route.container;
            let selector = "md-outlet";

            if (route.outlet) {
                target = document.body;
                selector = `${selector}[name="${route.outlet}"]`;
            }

            const callback = () => {
                outlet = target.querySelector(selector);

                if (outlet) {
                    if (observer) {
                        observer.disconnect();
                    }

                    resolve(outlet);
                }
            };

            callback();

            if (!outlet) {
                observer = new MutationObserver(callback);
                observer.observe(target, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        window.dispatchEvent(event);
    }

    static async handlePopstate(event) {
        this.path = window.location.pathname;
        this.query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        this.params = {};
        const route = MDRouter.getRoute();
        const routes = MDRouter.getRoutes(route);

        this.emit("onRouterChange");

        if (this.abortController && !this.abortController.signal.aborted) {
            this.abortController.abort();
        }

        if (!this.abortController || (this.abortController && this.abortController.signal.aborted)) {
            this.abortController = new AbortController();
        }

        this.emit("onRouterStart");

        for (const route of routes) {
            if (!route.beforeLoad) {
                route.beforeLoad = (resolve) => resolve();
            }

            try {
                await new Promise((resolve, reject) => {
                    this.abortController.signal.addEventListener("abort", reject);

                    route.beforeLoad(resolve, reject);
                });
            } catch (error) {
                this.emit("onRouterCancel");

                break;
            }

            if (!route.component) {
                route.component = await route.load();
            }

            if (!route.container) {
                route.container = route.parent?.component ?? document.body;
            }

            const outlet = await MDRouter.getOutlet(route);

            if (!route.component.isConnected) {
                outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
            }

            const outlets = Array.from(document.body.querySelectorAll("md-outlet"));

            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    if (!routes.find((route) => route.component === nextElement) && !outlets.find((outlet) => outlet === nextElement)) {
                        nextElement.remove();
                    }

                    nextElement = nextElement.nextElementSibling;
                }
            }
        }

        this.emit("onRouterEnd");
    }

    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");

        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");

            MDRouter.navigate(url);
        }
    }

    static register(routes = []) {
        const pushState = window.history.pushState;

        window.history.pushState = function () {
            pushState.apply(this, arguments);

            const event = new CustomEvent("popstate", {
                bubbles: true,
                cancelable: true,
                // detail
            });

            window.dispatchEvent(event);
        };

        this.routes = this.setRoutes(routes);

        window.addEventListener("DOMContentLoaded", this.handlePopstate.bind(this));
        window.addEventListener("popstate", this.handlePopstate.bind(this));

        window.addEventListener("click", this.handleClick.bind(this));
    }
}

export { MDRouter };
