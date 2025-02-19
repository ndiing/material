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
        type: { type: String },
    };

    types = ["navigation-list", "list"];

    constructor() {
        super();
        this.items = [];
        this.type = "navigation-list";
    }

    renderNavigationList(items) {
        /* prettier-ignore */
        return html`
            <md-navigation-list 
                .items="${items}"
            ></md-navigation-list>
        `;
    }

    renderList(items) {
        /* prettier-ignore */
        return html`
            <md-list 
                .items="${items}"
            ></md-list>
        `;
    }

    renderItems(type, items) {
        /* prettier-ignore */
        return choose(type,[
            ['navigation-list',() => this.renderNavigationList(items)],
        ],() => this.renderList(items));
    }

    render() {
        /* prettier-ignore */
        return this.renderItems(this.type,this.items)
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
    }

    /**
     * @param {Any} [options={}]
     */
    show(options = {}) {
        this.style.removeProperty("--md-comp-menu-animation");
        this.handleMenuShown = this.handleMenuShown.bind(this);
        this.addEventListener("animationend", this.handleMenuShown);
        this.menuWindow = closestScrollableElement(this);
        this.handleMenuWindowScroll = this.handleMenuWindowScroll.bind(this);
        this.menuWindow.addEventListener("scroll", this.handleMenuWindowScroll);
        this.handleMenuWindowClick = this.handleMenuWindowClick.bind(this);
        window.addEventListener("click", this.handleMenuWindowClick);
        setPosition({
            container: this,
            /* prettier-ignore */
            placements: [
                "bottom-start", "bottom-end", "bottom", 
                "top-start", "top-end", "top", 
                "right-start", "right-end", "right", 
                "left-start", "left-end", "left"
            ],
            ...options,
        });
        this.open = true;
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
        this.handleMenuClosed = this.handleMenuClosed.bind(this);
        this.addEventListener("animationend", this.handleMenuClosed);
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
        if (this.open) this.close();
        else this.show(options);
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
        this.removeEventListener("animationend", this.handleMenuShown);
        /**
         * @event onMenuShown
         * @property {Object} event
         */
        this.emit("onMenuShown", { event });
    }

    handleMenuClosed(event) {
        this.removeEventListener("animationend", this.handleMenuClosed);
        /**
         * @event onMenuClosed
         * @property {Object} event
         */
        this.emit("onMenuClosed", { event });
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
