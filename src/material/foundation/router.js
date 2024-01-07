// const route = {
//     path: String,
//     component: HTMLElement,
//     load: () => import("../../dev/router/main").then((m) => m.default),
//     beforeLoad: (resolve, reject) => resolve(),
//     children: [],
// };
// const routes = [route, route, route];

/**
 * Class yang mewakili router sederhana.
 * @fires window#onCurrentEntryChange - Dipicu ketika entri saat ini berubah.
 * @fires window#onNavigate - Dipicu saat navigasi dimulai.
 * @fires window#onNavigateError - Dipicu saat terjadi kesalahan selama navigasi.
 * @fires window#onNavigateSuccess - Dipicu saat navigasi berhasil.
 */
class MDRouter {
    /**
     * Memancarkan event kustom.
     * @private
     * @param {string} type - Tipe dari event.
     * @param {Object} [detail=this] - Detail tambahan yang akan disertakan dalam event.
     * @fires window#event - Event kustom yang dipancarkan ke window.
     */
    static emit(type, detail = { ...this }) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * Recursively adds routes to the router.
     * @private
     * @param {Array<Route>} routes - The routes to be added.
     * @param {Object} [parent=null] - The parent route object.
     * @returns {Array<Route>} - The modified routes array.
     */
    static addRoutes(routes = [], parent = null) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.pattern = [c.parent?.pattern ?? "", c.path].join("/").replace(/\/+/g, "/");
            p = p.concat(c);
            if (c.children) {
                p = p.concat(this.addRoutes(c.children, c));
            }
            return p;
        }, []);
    }

    /**
     * Retrieves the stack of routes.
     * @private
     * @param {Object} route - The route object.
     * @returns {Array<Object>} - The stack of routes.
     */
    static getStack(route) {
        return [route].reduce((p, c) => {
            if (c.parent) p = p.concat(this.getStack(c.parent));
            p = p.concat(c);
            return p;
        }, []);
    }

    /**
     * Handles the loading of routes and manages the navigation lifecycle.
     * @private
     * @param {Event} event - The load event.
     */
    static async handleLoad(event) {
        this.emit("onCurrentEntryChange");

        this.path = window.location.pathname;
        this.params = {};
        this.route = this.routes.find((route) => {
            const regexp = new RegExp("^" + route.pattern.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            const matches = this.path.match(regexp);
            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }
            return null;
        });
        this.query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        this.stack = this.getStack(this.route);

        if (this.controller) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();

        for (const route of this.stack) {
            this.emit("onNavigate");

            if (!route.beforeLoad) route.beforeLoad = (resolve) => resolve();
            try {
                await new Promise((resolve, reject) => {
                    this.controller.signal.addEventListener("abort", reject);
                    route.beforeLoad(resolve, reject);
                });
            } catch (error) {
                this.emit("onNavigateError");

                break;
            }

            if (!route.component) route.component = await route.load();
            if (!route.container) route.container = route.parent?.component ?? document.body;

            const outlet = await new Promise((resolve) => {
                let observer;
                let outlet;
                const callback = () => {
                    outlet = route.container.querySelector("md-outlet");
                    if (outlet) {
                        if (observer) observer.disconnect();
                        resolve(outlet);
                    }
                };
                callback();
                if (!outlet) {
                    observer = new MutationObserver(callback);
                    observer.observe(route.container, {
                        childList: true,
                        subtree: true,
                    });
                }
            });

            if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);

            const outlets = document.body.querySelectorAll("md-outlet");
            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;
                while (nextElement) {
                    let component = this.stack.find((route) => route.component === nextElement);
                    if (!component) nextElement.remove();
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        this.emit("onNavigateSuccess");
    }

    /**
     * Menavigasi ke URL tertentu.
     * @param {string} url - URL yang akan dituju.
     * @example
     * // Navigasi ke rute '/about'
     * MDRouter.navigate('/about');
     */
    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    /**
     * Handles click events for navigation.
     * @private
     * @param {Event} event - The click event.
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Representasi objek konfigurasi suatu rute.
     * @typedef {Object} Route
     * @property {String} path - Path untuk rute tersebut.
     * @property {HTMLElement} component - Komponen yang terkait dengan rute tersebut.
     * @property {Function} load - Fungsi untuk memuat rute tersebut.
     * @property {Function} [beforeLoad] - Fungsi yang dieksekusi sebelum memuat rute tersebut.
     * @property {Array<Route>} [children] - Array dari rute anak.
     */

    /**
     * Menginisialisasi router dengan rute yang diberikan.
     * @param {Array<Route>} [routes=[]] - Array konfigurasi rute.
     */
    static init(routes = []) {
        const pushState = window.history.pushState;
        window.history.pushState = function () {
            pushState.apply(this, arguments);

            MDRouter.emit("popstate");
        };

        this.routes = this.addRoutes(routes);

        window.addEventListener("DOMContentLoaded", this.handleLoad.bind(this));
        window.addEventListener("popstate", this.handleLoad.bind(this));

        window.addEventListener("click", this.handleClick.bind(this));
    }
}

export { MDRouter };
