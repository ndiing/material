import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { setPosition } from "../popper/popper";

/**
 * @extends MdComponent
 * @element md-menu
 * @fires MdMenuComponent#onMenuShown
 * @fires MdMenuComponent#onMenuClosed
 */
class MdMenuComponent extends MdComponent {
    /**
     * @property {Boolean} [open]
     * @property {Array} [items]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
        items: { type: Array },
    };

    /**
     */
    constructor() {
        super();
        this.items = [];
    }

    /**
     * @private
     */
    render() {
        return html` <md-navigation-list .items="${this.items}"></md-navigation-list> `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
    }

    /**
     * @param {Object} [options={}]
     */
    show(options = {}) {
        this.style.removeProperty("--md-comp-menu-animation");
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.open = true;
        setPosition(options);
        this.emit("onMenuShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-menu-animation");
        this.open = false;
        this.emit("onMenuClosed");
    }

    /**
     * @param {Undefined} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}
customElements.define("md-menu", MdMenuComponent);
export { MdMenuComponent };
