import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDIconButtonComponent represents an icon button component.
 *
 * @extends MDComponent
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} icon - The icon for the icon button.
     * @property {String} ui - The UI style of the icon button (e.g., "filled", "filled-tonal", "outlined").
     * @property {Boolean} toggle - Indicates whether the icon button is a toggle button.
     * @property {Boolean} activated - Indicates whether the icon button is activated.
     */
    static properties = {
        icon: { type: String },
        ui: { type: String },
        toggle: { type: Boolean, reflect: true },
        activated: { type: Boolean, reflect: true },
    };

    /**
     * Constructor for MDIconButtonComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.handleIconClick = this.handleIconClick.bind(this);

        this.addEventListener('click', this.handleIconClick);
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon-button");

        this.addEventListener('click', this.handleIconClick);
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            size: this.ui ? 40 / 40 * 100 : 40 / 24 * 100,
            containment: false,
            fadeout: true,
        });
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "filled-tonal", "outlined"].forEach((ui) => {
                this.classList.remove(`md-icon-button--${ui}`);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-icon-button--${ui}`);
                });
            }
        }
    }

    /**
     * Renders the icon button component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return this.icon ? html`<div class="md-icon-button__icon">${this.icon}</div>` : nothing;
    }

    /**
     * Event handler for the icon button click events.
     *
     * @param {Event} event - The click event.
     * @fires MDIconButtonComponent#onIconClick
     */
    handleIconClick(event) {
        if (this.toggle) {
            this.activated = !this.activated;
        }
        this.emit('onIconClick', { event });
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
