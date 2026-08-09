import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { BreakpointObserver } from "../../material/core/breakpoint-observer.js";

const FOCUSABLE = 'button:not([tabindex="-1"]):not([disabled]),input:not([tabindex="-1"]):not([disabled]),select:not([tabindex="-1"]):not([disabled]),textarea:not([tabindex="-1"]):not([disabled]),[tabindex]:not([tabindex="-1"]):not([disabled])';

function initFocusTrap() {
    document.body.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") return;

        const root = document.body.querySelector("md-dialog[open]") || document.body;
        const focusable = Array.from(root.querySelectorAll(FOCUSABLE)).filter((el) => el.checkVisibility({ opacityProperty: true }));

        if (focusable.length === 0) return;

        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey ? (currentIndex - 1 + focusable.length) % focusable.length : (currentIndex + 1) % focusable.length;

        event.preventDefault();
        focusable[nextIndex]?.focus();
    });
}

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
                    width="256"
                >
                    <md-list
                        .items="${this.items}"
                        .labelField="${'path'}"
                        .activeRow="${true}"
                        .scrollOnArrowUpActiveRow="${true}"
                        .scrollOnArrowDownActiveRow="${true}"
                        .selectOnEnterActiveRow="${true}"
                        .singleSelect="${true}"
                        .virtualScroll="${true}"
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
                selected:this.router.url.pathname===value.path
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
        initFocusTrap();
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");

// const performanceObserver = new PerformanceObserver((entries) => {
//     entries.getEntries().forEach((entry) => {
//         console.log(entry);
//     });
// });
// performanceObserver.observe({
//     entryTypes: [
//         "element", //
//         "event",
//         "first-input",
//         "largest-contentful-paint",
//         "layout-shift",
//         "long-animation-frame",
//         "longtask",
//         "mark",
//         "measure",
//         "navigation",
//         "paint",
//         "resource",
//         "visibility-state",
//     ],
// });
