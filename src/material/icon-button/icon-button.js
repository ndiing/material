import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDIconButtonComponent` is a custom web component representing an icon button.
 * @extends MDComponent
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Properties for MDIconButtonComponent.
     * @static
     * @type {object}
     * @property {String} icon - The icon to be displayed in the button.
     * @property {String} type - The type attribute of the button (e.g., "button", "submit").
     * @property {String} ui - The UI style for the button ("filled", "filled-tonal", "outlined").
     * @property {Boolean} activated - Indicates whether the button is activated or not.
     * @property {Boolean} toggle - Indicates whether the button should toggle its activated state on click.
     */
    static properties = {
        icon: { type: String },
        type: { type: String },
        ui: { type: String },
        activated: { type: Boolean, reflect: true },
        toggle: { type: Boolean },
    };

    /**
     * Gets the native icon button element.
     * @returns {HTMLElement} The native icon button element.
     */
    get iconButtonNative() {
        return this.querySelector(".md-icon-button__native");
    }

    /**
     * Constructs an instance of MDIconButtonComponent.
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

        this.classList.add("md-icon-button");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon-button");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.iconButtonNative,
            size: this.ui ? (40 / 40) * 100 : (40 / 24) * 100,
            containment: false,
            centered: true,
            fadeout: true,
            // inverted:this.ui==='filled'
        });
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-icon-button--filled");
            this.classList.remove("md-icon-button--filled-tonal");
            this.classList.remove("md-icon-button--outlined");

            if (this.ui) {
                this.classList.add(`md-icon-button--${this.ui}`);
            }
        }

        if (changedProperties.has("toggle")) {
            this.classList.remove("md-icon-button--toggle");

            if (this.toggle) {
                this.classList.add(`md-icon-button--toggle`);
            }
        }
    }

    /**
     * Renders the content of the MDIconButtonComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-icon-button__native"
                .type="${this.type}"
                @click="${this.handleIconButtonClick}"
            ></button>
            ${this.icon ? html`<div class="md-icon-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-icon-button__label">${this.label}</div>` : nothing}
        `;
    }

    /**
     * Handles the icon button click event.
     * @param {Event} event - The click event.
     * @fires MDIconButtonComponent#onIconButtonClick
     */
    handleIconButtonClick(event) {
        if (this.toggle) {
            this.activated = !this.activated;
        }

        /**
         * Emitted when the icon button is clicked.
         * @event MDIconButtonComponent#onIconButtonClick
         * @type {object}
         * @property {Event} event - The original click event.
         */
        this.emit("onIconButtonClick", { event });
    }
}

/**
 * Define the custom element "md-icon-button" with MDIconButtonComponent.
 */
customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
