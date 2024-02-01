import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDFabComponent` is a custom web component representing a floating action button (FAB).
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties for MDFabComponent.
     * @static
     * @type {object}
     * @property {String} icon - The icon to be displayed in the FAB.
     * @property {String} label - The label text for the FAB.
     * @property {String} type - The type attribute of the FAB (e.g., "button", "submit").
     * @property {String} ui - The UI style for the FAB ("extended").
     * @property {String} size - The size of the FAB ("small", "large").
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        type: { type: String },
        ui: { type: String },
        size: { type: String },
    };

    /**
     * Gets the native FAB button element.
     * @returns {HTMLElement} The native FAB button element.
     */
    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Constructs an instance of MDFabComponent.
     */
    constructor() {
        super();

        // default
        this.type = "button";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-fab");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.fabNative,
        });
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-fab--extended");

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-fab--${ui}`);
                });
            }
        }

        if (changedProperties.has("size")) {
            this.classList.remove("md-fab--small");
            this.classList.remove("md-fab--large");

            if (this.size) {
                this.classList.add(`md-fab--${this.size}`);
            }
        }
    }

    /**
     * Renders the content of the MDFabComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-fab__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }
}

/**
 * Define the custom element "md-fab" with MDFabComponent.
 */
customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
