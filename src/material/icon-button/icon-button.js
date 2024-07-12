import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * A custom element for creating icon buttons with various styles and ripple effects.
 * @element md-icon-button
 * @extends MDComponent
 * @fires MDIconButtonComponent#onIconButtonClick - Event fired when the icon button is clicked.
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Defines the properties of the element.
     * @property {String} variant - The style variant of the icon button (e.g., "filled", "tonal", "outlined", "toggle").
     * @property {String} icon - The icon to display within the button.
     * @property {Boolean} selected - Indicates whether the button is selected (for toggle buttons).
     * @property {Boolean} disabled - Indicates whether the button is disabled.
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        name: { type: String, reflect: true },
    };
    
    variants = ["filled", "tonal", "outlined", "toggle"];

    /**
     * Creates an instance of MDIconButtonComponent.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the icon button.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.icon ? html`<div class="md-icon md-icon-button__icon">${this.icon}</div>` : nothing;
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-icon-button' class and sets up the click event listener.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.on("click", this.handleIconButtonClick);
    }

    /**
     * Invoked each time the custom element is disconnected from the document.
     * Removes the click event listener.
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("click", this.handleIconButtonClick);
    }

    /**
     * Called when the element's properties are updated.
     * Toggles the button's variant classes and handles the disabled state.
     * @private
     * @param {Map} changedProperties - The properties that changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-icon-button--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
        if (changedProperties.has("disabled")) {
            if (this.disabled) {
                this.setAttribute("aria-disabled", "true");
                this.setAttribute("tabindex", "-1");
            } else {
                this.removeAttribute("aria-disabled");
                this.removeAttribute("tabindex");
            }
        }
    }

    /**
     * Handles the click event on the icon button.
     * Toggles the selected state for toggle buttons and emits a custom event.
     * @private
     * @param {Event} event - The click event.
     */
    handleIconButtonClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
        }
        this.emit("onIconButtonClick", event);
    }
}
customElements.define("md-icon-button", MDIconButtonComponent);
export { MDIconButtonComponent };
