import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 */
class MdNavigationBarComponent extends MdComponent {
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
        this.rippleOptions = { container: ".md-navigation-list__icon" };
    }

    /**
     * @private
     */
    render() {
        return html`
            <md-navigation-list
                .rippleOptions="${this.rippleOptions}"
                .items="${this.items}"
            ></md-navigation-list>
        `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onNavigationBarShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onNavigationBarClosed");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-navigation-bar", MdNavigationBarComponent);
export { MdNavigationBarComponent };
