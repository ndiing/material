import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-navigation-bar
 */
class MDNavigationBarComponent extends MdComponent {
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
        this.rippleOptions = { container: ".md-list__icon" };
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-list
                .rippleOptions="${ifDefined(this.rippleOptions)}"
                .items="${ifDefined(this.items)}"
            ></md-list>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
        this.style.setProperty("--md-comp-navigation-bar-animation", "none");

        await this.updateComplete;

        this.style.setProperty("--md-comp-navigation-bar-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-navigation-bar-height", this.clientHeight + "px");
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-navigation-bar-animation");
        this.open = true;

        /**
         * @event onNavigationBarShow
         * @property {Object} event
         */
        this.emit("onNavigationBarShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-navigation-bar-animation");
        this.open = false;

        /**
         * @event onNavigationBarClose
         * @property {Object} event
         */
        this.emit("onNavigationBarClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}

customElements.define("md-navigation-bar", MDNavigationBarComponent);

export { MDNavigationBarComponent };
