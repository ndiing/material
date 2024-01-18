class MdNavigation {
    static setEntries(entries = [], parent = null) {
        return entries.reduce((p, c) => {
            c.parent = parent;
            c.pattern = [
                //
                c.parent?.pattern ?? "",
                c.path,
            ]
                .join("/")
                .replace(/\/+/g, "/");
            p = p.concat(c);
            if (c.children && c.children.length) {
                p = p.concat(this.setEntries(c.children, c));
            }
            return p;
        }, []);
    }

    static getEntry() {
        return this.entries.find((entry) => {
            const pattern = "^" + entry.pattern.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)";
            const regexp = new RegExp(pattern, "i");
            const matches = this.path.match(regexp);
            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }
            return null;
        });
    }

    static getEntries(entry) {
        return [entry].reduce((p, c) => {
            if (c.parent) p = p.concat(this.getEntries(c.parent));
            p = p.concat(c);
            return p;
        }, []);
    }

    static async handlePopstate(event) {
        this.emit("onCurrententrychange");

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }
        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        this.path = window.location.pathname;
        this.query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        this.params = {};
        const currentEntry = this.getEntry();
        const entries = this.getEntries(currentEntry);

        for (const entry of entries) {
            this.emit("onNavigate");

            if (!entry.beforeLoad) {
                entry.beforeLoad = (resolve, reject) => resolve();
            }

            try {
                await new Promise((resolve, reject) => {
                    this.controller.signal.addEventListener("abort", reject);
                    entry.beforeLoad(resolve, reject);
                });
            } catch (error) {
                this.emit("onNavigateerror");

                break;
            }

            if (!entry.component) {
                entry.component = await entry.load();
            }
            if (!entry.container) {
                entry.container = entry.parent?.component ?? document.body;
            }

            const placeholder = await new Promise((resolve) => {
                let placeholder;
                let observer;
                const callback = () => {
                    placeholder = entry.container.querySelector("md-placeholder");
                    if (placeholder) {
                        if (observer) {
                            observer.disconnect();
                        }
                        resolve(placeholder);
                    }
                };
                callback();
                if (!placeholder) {
                    observer = new MutationObserver(callback);
                    observer.observe(entry.container, {
                        childList: true,
                        subtree: true,
                    });
                }
            });

            if (!entry.component.isConnected) {
                placeholder.parentElement.insertBefore(entry.component, placeholder.nextElementSibling);
            }

            const placeholders = document.querySelectorAll("md-placeholder");
            for (const placeholder of placeholders) {
                let nextElement = placeholder.nextElementSibling;
                while (nextElement) {
                    if (!entries.find((entry) => entry.component === nextElement)) {
                        nextElement.remove();
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }

        this.emit("onNavigatesuccess");
    }

    static emit(type, detail = {}) {
        window.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            })
        );
    }

    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    static handleClick(event) {
        const navigate = event.target.closest("[navigate]");
        if (navigate) {
            const url = navigate.getAttribute("navigate");
            MdNavigation.navigate(url);
        }
    }

    static load(entries = []) {
        this.entries = this.setEntries(entries);

        window.addEventListener("DOMContentLoaded", this.handlePopstate.bind(this));
        window.addEventListener("popstate", this.handlePopstate.bind(this));

        const pushState = window.history.pushState;
        window.history.pushState = function () {
            pushState.apply(this, arguments);
            MdNavigation.emit("popstate");
        };

        window.addEventListener("click", this.handleClick.bind(this));
    }
}

export { MdNavigation };
