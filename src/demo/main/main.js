import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { BreakpointObserver } from "../../material/core/breakpoint-observer.js";

class DemoMain extends MdElement {
    static properties = {
        open: { type: Boolean },
        modal: { type: Boolean },
        items: { type: Array },
    };

    constructor() {
        super();
        this.open = true;
        this.modal = false;
        this.items = [];
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout role="main">
                <md-layout-item 
                    id="west" 
                    region="west" 
                    .modal="${this.modal}"
                    .open="${this.open}"
                >
                    <md-list
                        .items="${this.items}"
                        .labelField="${'path'}"
                        .activeRow="${true}"
                        .scrollOnArrowUpActiveRow="${true}"
                        .scrollOnArrowDownActiveRow="${true}"
                        .selectOnEnterActiveRow="${true}"
                        .singleSelect="${true}"
                    ></md-list>
                </md-layout-item>
                <md-layout-item region="center">
                    <md-outlet></md-outlet>
                    <md-outlet name="main"></md-outlet>
                </md-layout-item>
            </md-layout>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        import("../routes.js").then((module) => {
            const items = module.routes[0].children;

            // // Test
            // items.push({path:'/users?user=name&pass=word'})
            // items.push({path:'/users?user=name&pass=word#hash-tag'})
            // items.push({path:'/users#hash-tag'})
            // items.push({path:'/users?age=25&age=30&age=35'})

            // items.push({path:'/blogs?user=name&pass=word'})
            // items.push({path:'/blogs?user=name&pass=word#hash-tag'})
            // items.push({path:'/blogs#hash-tag'})
            // items.push({path:'/blogs?age=25&age=30&age=35'})

            // items.push({path:'/users/1'})
            // items.push({path:'/blogs/1'})
            // items.push({path:'/a/b'})
            // items.push({path:'/a/b/c'})
            // items.push({path:'/a/b/c/d'})

            this.items = items.map((value, index) => ({
                ...value,
                routerLink: value.path,
                id: index,
                // interactive:false
            }));
        });

        this.cachedProperties = {
            open: this.open,
            modal: this.modal,
        };

        this.breakpointObserver = new BreakpointObserver((item) => {
            if (item.name === "expanded") {
                this.open = this.cachedProperties.open;
                this.modal = this.cachedProperties.modal;
            } else {
                // medium
                // compact
                this.open = false;
                this.modal = true;
            }
        });
        this.breakpointObserver.observe();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.breakpointObserver.disconnect();
    }

    firstUpdated() {
        document.body.addEventListener("keydown", (event) => {
            if (event.key === "Tab") {
                // Ambil elemen focusable yang beneran visible & enabled
                const focusable = Array.from(document.body.querySelectorAll(['button:not([tabindex="-1"]):not([disabled])', 'input:not([tabindex="-1"]):not([disabled])', 'select:not([tabindex="-1"]):not([disabled])', 'textarea:not([tabindex="-1"]):not([disabled])', '[tabindex]:not([tabindex="-1"]):not([disabled])'].join(","))).filter((el) => el.offsetParent !== null); // filter yang hidden

                console.log(focusable);

                if (focusable.length === 0) return;

                const currentElement = document.activeElement;
                let currentIndex = focusable.indexOf(currentElement);

                // Kalo currentElement nggak ada di list (misal body), mulai dari -1
                if (currentIndex === -1) {
                    currentIndex = event?.shiftKey ? 0 : -1;
                    // Shift+Tab mulai dari akhir, Tab mulai dari awal
                }

                let nextIndex;
                if (event?.shiftKey) {
                    // Mundur
                    nextIndex = (currentIndex - 1 + focusable.length) % focusable.length;
                } else {
                    // Maju
                    nextIndex = (currentIndex + 1) % focusable.length;
                }

                event?.preventDefault?.();
                focusable[nextIndex].focus();
            }
        });
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
