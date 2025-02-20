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
        return html`
            <md-list
                .rippleOptions="${this.rippleOptions}"
                .items="${this.items}"
            ></md-list>
        `;
    }

     connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        
        
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
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
        this.style.removeProperty("--md-comp-sheet-animation");
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
