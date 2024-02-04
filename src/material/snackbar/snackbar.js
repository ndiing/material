import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDSnackbarComponent represents a snackbar component.
 *
 * @extends MDComponent
 */
class MDSnackbarComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} supportingText - The text displayed in the snackbar body.
     * @property {String} icon - The icon to be displayed in the snackbar footer.
     * @property {String} button - The label of the button to be displayed in the snackbar footer.
     */
    static properties = {
        supportingText: { type: String },
        icon: { type: String },
        button: { type: String },
    };

    /**
     * Checks if the snackbar has a footer (icon or button).
     *
     * @returns {boolean} - True if the snackbar has a footer, otherwise false.
     */
    get hasSnackbarFooter() {
        return this.icon || this.button;
    }

    /**
     * Constructor for MDSnackbarComponent.
     */
    constructor() {
        super();

        // Default supporting text is derived from child nodes
        this.supportingText = Array.from(this.childNodes);
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-snackbar");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    updated(changedProperties) {}

    /**
     * Renders the snackbar component.
     *
     * @returns {TemplateResult} - The rendered template.
     * @override
     */
    render() {
        // prettier-ignore
        return html`
            <div class="md-snackbar__body">${this.supportingText}</div>
            ${this.hasSnackbarFooter ? html`
                <div class="md-snackbar__footer">
                    ${this.icon ? html`<md-icon-button class="md-snackbar__icon-button" .icon="${this.icon?.icon ?? this.icon}"></md-icon-button>` : nothing}
                    ${this.button ? html`<md-button class="md-snackbar__button" .label="${this.button?.label ?? this.button}"></md-button>` : nothing}
                </div>
            ` : nothing}
        `;
    }
}

// Define the component
customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
