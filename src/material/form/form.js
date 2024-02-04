import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDFormComponent represents a material design form.
 *
 * @extends MDComponent
 */
class MDFormComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     */
    static properties = {};

    /**
     * Getter for the native form element.
     *
     * @returns {HTMLElement} - The native form element.
     */
    get formNative() {
        return this.querySelector(".md-form__native");
    }

    /**
     * Constructor for MDFormComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";

        // Store a reference to the initial children of the form
        this._children = Array.from(this.children);
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-form' class to the component
        this.classList.add("md-form");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-form' class from the component
        this.classList.remove("md-form");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Additional logic if needed
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        // Additional logic if needed
    }

    /**
     * Renders the form component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            <form 
                class="md-form__native"
                @formdata="${this.handleFormNativeFormdata}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this._children}</form>
        `;
    }

    /**
     * Resets the form.
     */
    reset() {
        this.formNative.reset();
    }

    /**
     * Submits the form.
     *
     * @param {HTMLElement} submitButton - The submit button element.
     */
    submit(submitButton) {
        if (this.formNative.requestSubmit) {
            if (submitButton) {
                this.formNative.requestSubmit(submitButton);
            } else {
                this.formNative.requestSubmit();
            }
        } else {
            this.formNative.submit();
        }
    }

    /**
     * Event handler for the formdata event on the native form.
     *
     * @param {Event} event - The formdata event.
     * @fires MDFormComponent#onFormNativeFormdata
     */
    handleFormNativeFormdata(event) {
        console.log(event.formData)
        this.emit("onFormNativeFormdata", { event });
    }

    /**
     * Event handler for the reset event on the native form.
     *
     * @param {Event} event - The reset event.
     * @fires MDFormComponent#onFormNativeReset
     */
    handleFormNativeReset(event) {
        // Dispatch a custom event for each text field reset
        for (const element of this.formNative.elements) {
            if (!element.matches('.md-text-field__native')) {
                continue;
            }
            const customEvent = new CustomEvent('onTextFieldNativeReset', {
                bubbles: true,
                cancelable: true
            });
            element.dispatchEvent(customEvent);
        }

        // Emit a custom event for the form reset
        this.emit("onFormNativeReset", { event });
    }

    /**
     * Event handler for the submit event on the native form.
     *
     * @param {Event} event - The submit event.
     * @fires MDFormComponent#onFormNativeSubmit
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();

        // Create FormData object from the form
        new FormData(this.formNative);

        // Emit a custom event for the form submission
        this.emit("onFormNativeSubmit", { event });
    }
}

// Define the custom element
customElements.define("md-form", MDFormComponent);

// Export the component
export { MDFormComponent };
