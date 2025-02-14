/**
 * Router untuk mengelola navigasi aplikasi.
 * @fires Router#onRouterCurrentEntryChange Saat entri rute berubah.
 * @fires Router#onRouterNavigate Saat navigasi dimulai.
 * @fires Router#onRouterNavigateError Jika navigasi gagal.
 * @fires Router#onRouterNavigateSuccess Jika navigasi berhasil.
 */
class Router {
    static params = {};

    /**
     * Mendapatkan rute yang cocok berdasarkan pathname.
     * @private
     * @param {string} [pathname=this.pathname] Path yang akan dicocokkan.
     * @param {Array} [routes=this.routes] Daftar rute.
     * @param {Object|null} [parent=null] Rute induk (jika ada).
     * @param {Array} [result=[]] Hasil pencarian rute.
     * @returns {Array|undefined} Rute yang cocok atau undefined jika tidak ditemukan.
     */
    static get(pathname = this.pathname, routes = this.routes, parent = null, result = []) {
        for (const route of routes) {
            if (!route.regexp) {
                route.parent = parent;
                route.pathname = ((parent?.pathname ?? "") + "/" + route.path).replace(/\/+/g, "/");
                route.regexp = new RegExp("^" + route.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            }
            const matches = pathname.match(route.regexp);
            if (matches) {
                this.params = {
                    ...matches?.groups,
                };
                return [...result, route];
            }
            if (route?.children?.length) {
                const matches = this.get(pathname, route.children, route, [...result, route]);
                if (matches) return matches;
            }
        }
    }

    /** @returns {string} Pathname saat ini. */
    static get pathname() {
        if (this.options.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
        }
    }

    /**
     * Menangani navigasi dan memproses rute.
     * @private
     */
    static async handleNavigation(event) {
        performance.mark("mark-1");
        this.emit("onRouterCurrentEntryChange");
        this.setController();
        const routes = this.get();
        this.emit("onRouterNavigate");
        for (const route of routes ?? []) {
            if (route.beforeLoad) {
                try {
                    await this.handleBeforeLoad(route);
                } catch (error) {
                    this.emit("onRouterNavigateError");
                    break;
                }
            }
            await this.loadComponent(route);
            const container = this.setContainer(route);
            const outlet = await this.getOutlet(container, route);
            this.renderComponent(route, outlet);
            this.removeComponent(routes);
        }
        performance.mark("mark-2");
        performance.measure("measure-1", "mark-1", "mark-2");
        performance.clearMarks("mark-1");
        performance.clearMarks("mark-2");
        performance.clearMeasures("measure-1");
        this.emit("onRouterNavigateSuccess");
    }

    /**
     * Menghapus komponen yang tidak digunakan.
     * @private
     */
    static removeComponent(routes) {
        const outlets = Array.from(document.body.querySelectorAll("md-outlet"));
        for (const outlet of outlets) {
            let element = outlet.nextElementSibling;
            while (element) {
                if (!outlets.find((outlet) => outlet === element) && !routes.find((route) => route.component === element)) {
                    element.remove();
                }
                element = element.nextElementSibling;
            }
        }
    }

    /** Merender komponen pada outlet yang sesuai. */
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    /**
     * Mendapatkan outlet untuk rute tertentu.
     * @private
     */
    static async getOutlet(container, route) {
        return await new Promise((resolve) => {
            let observer;
            let outlet;
            let selector = "md-outlet:not([name])";
            let target = container;
            if (route.outlet) {
                selector = `md-outlet[name="${route.outlet}"]`;
                target = document.body;
            }
            const callback = () => {
                outlet = target.querySelector(selector);
                if (outlet) {
                    if (observer) observer.disconnect();
                    resolve(outlet);
                }
            };
            observer = new MutationObserver(callback);
            observer.observe(target, {
                subtree: true,
                childList: true,
            });
            callback();
        });
    }

    /**
     * Menentukan container untuk komponen rute.
     * @private
     */
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    /**
     * Memuat komponen rute jika belum ada.
     * @private
     */
    static async loadComponent(route) {
        if (!route.component) {
            route.component = await route.load();
        }
    }

    /**
     * Menjalankan hook beforeLoad sebelum memuat rute.
     * @private
     */
    static async handleBeforeLoad(route) {
        await new Promise((resolve, reject) => {
            const callback = (error) => {
                if (error) reject(error);
                else resolve();
            };
            this.controller.signal.addEventListener("abort", callback);
            route.beforeLoad(callback);
        });
    }

    /**
     * Mengatur AbortController untuk menangani navigasi.
     * @private
     */
    static setController() {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
    }

    /**
     * Menavigasi ke URL yang diberikan.
     * @param {String} url
     */
    static navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Menangani event klik untuk navigasi.
     * @private
     */
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");
        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    /**
     * Memicu event kustom.
     * @private
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }
    static routes = [];
    static options = {};

    /**
     * Menginisialisasi router dengan daftar rute dan opsi.
     * @param {Array} [routes=[]] Daftar rute yang digunakan.
     * @param {Object} [options={}] Opsi tambahan untuk router.
     */
    static use(routes = [], options = {}) {
        this.routes = routes;
        this.options = {
            historyApiFallback: false,
            ...options,
        };
        window.addEventListener("load", this.handleNavigation.bind(this));
        if (this.options.historyApiFallback) {
            window.addEventListener("popstate", this.handleNavigation.bind(this));
            const pushState = window.history.pushState;

            window.history.pushState = function () {
                pushState.apply(this, arguments);
                Router.emit("popstate");
            };
        } else {
            window.addEventListener("hashchange", this.handleNavigation.bind(this));
        }
        window.addEventListener("click", this.handleNavigate.bind(this));
    }
}
export { Router };
