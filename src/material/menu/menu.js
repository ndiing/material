import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { setPosition } from "../popper/popper";
import { closestScrollableElement } from "../util/util";
/**
 * @extends MdComponent
 * @element md-menu
 */
class MDMenuComponent extends MdComponent {
    /**
     * @property {Boolean} [open]
     * @property {Array} [items]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
        items: { type: Array },
    };

    constructor() {
        super();

        this.items = [];
        this.virtualOptions = {
            rowHeight: 48,
            item: "md-list-row",
        };
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-list
                .items="${ifDefined(this.items)}"
                virtualize
                .virtualOptions="${ifDefined(this.virtualOptions)}"
            ></md-list>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        this.handleMenuAnimationEnd = this.handleMenuAnimationEnd.bind(this);
        this.addEventListener("animationend", this.handleMenuAnimationEnd);

        await this.updateComplete;

        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleMenuAnimationEnd);
    }

    /**
     * @param {Any} [options={}]
     */
    async show(options = {}) {
        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
        this.style.removeProperty("--md-comp-menu-animation");
        this.menuWindow = closestScrollableElement(this);
        this.handleMenuWindowScroll = this.handleMenuWindowScroll.bind(this);
        this.menuWindow.addEventListener("scroll", this.handleMenuWindowScroll);
        this.handleMenuWindowClick = this.handleMenuWindowClick.bind(this);
        window.addEventListener("click", this.handleMenuWindowClick);
        setPosition({
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        });
        this.open = true;
        let element = this.querySelector("md-list-item[selected]");

        if (!element) {
            element = this.querySelector("md-list-item");
        }
        element.focus();
        /**
         * @event onMenuShow
         * @property {Object} event
         */
        this.emit("onMenuShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-menu-animation");
        this.menuWindow.removeEventListener("scroll", this.handleMenuWindowScroll);
        window.removeEventListener("click", this.handleMenuWindowClick);
        this.open = false;
        /**
         * @event onMenuClose
         * @property {Object} event
         */
        this.emit("onMenuClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) {
            this.close();
        } else {
            this.show(options);
        }
    }

    handleMenuWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        /**
         * @event onMenuWindowClick
         * @property {Object} event
         * @property {HTMLElement} target
         */
        this.emit("onMenuWindowClick", { event, target });
    }

    handleMenuWindowScroll(event) {
        /**
         * @event onMenuWindowScroll
         * @property {Object} event
         */
        this.emit("onMenuWindowScroll", { event });
    }

    handleMenuShown(event) {
        /**
         * @event onMenuShown
         * @property {Object} event
         */
        this.emit("onMenuShown", { event });
    }

    handleMenuClosed(event) {
        /**
         * @event onMenuClosed
         * @property {Object} event
         */
        this.emit("onMenuClosed", { event });
    }

    handleMenuAnimationEnd(event) {
        if (event.animationName === "menu-out" || event.animationName === "menu-modal-out") {
            this.handleMenuShown(event);
        } else if (event.animationName === "menu-in" || event.animationName === "menu-modal-in") {
            this.handleMenuClosed(event);
        }
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
