import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom element for a Material Design Floating Action Button (FAB).
 *
 * @extends LitElement
 */
class MdFabComponent extends LitElement {
    /**
     * @property {String} type - The type of the button.
     * @property {String} label - The label text for the FAB.
     * @property {String} icon - The icon for the FAB.
     * @property {String} size - The size of the FAB. Can be "small" or "large".
     * @property {Boolean} extended - Indicates whether the FAB is in extended mode.
     */
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            icon: { type: String },
            size: { type: String },
            extended: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.type = "button";
    }

    createRenderRoot() {
        return this;
    }

    render() {
        // prettier-ignore
        return html`
            <button class="md-fab__native"
                .type="${this.type}"
            ></button>
            ${this.icon?html`<div class="md-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
    }

    /**
     * Returns the native button element of the FAB.
     *
     * @readonly
     * @returns {HTMLButtonElement} The native button element.
     */
    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Called after the element's first update. Initializes the state controller.
     */
    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.fabNative,
        });

        // this.state.options.inverted = this.ui === "filled";
        // this.state.options.size = this.ui ? (40 / 40) * 100 : (40 / 24) * 100;
        // this.requestUpdate();
    }

    /**
     * Called when the element is updated. Handles size and extended property changes.
     *
     * @param {Map} _changedProperties - Map of changed properties.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("size")) {
            ["small", "large"].forEach((size) => {
                this.classList.remove("md-fab--" + size);
            });
            if (this.size) {
                this.classList.add("md-fab--" + this.size);
            }
        }
        if (_changedProperties.has("extended")) {
            if (this.extended) {
                this.classList.add("md-fab--extended");
            } else {
                this.classList.remove("md-fab--extended");
            }
        }
    }
}

/**
 * Dispatched when a specific event occurs.
 *
 * @event MdFabComponent#custom-event
 * @type {Object}
 * @property {String} detail - Event details.
 */

customElements.define("md-fab", MdFabComponent);

export { MdFabComponent };
