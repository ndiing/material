import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Form component that extends the MDComponent base class.
 * @element md-form
 * @extends MDComponent
 * @fires MDFormComponent#onFormNativeReset - Fired when the form is reset.
 * @fires MDFormComponent#onFormNativeSubmit - Fired when the form is submitted.
 */
class MDFormComponent extends MDComponent {
    /**
     * Defines the properties of the form component.
     * @property {String} acceptCharset - The character encodings that are to be used for the form submission.
     * @property {String} action - The URL that processes the form submission.
     * @property {String} autocomplete - Indicates whether the form should have autocomplete on or off.
     * @property {String} enctype - The encoding type of the form.
     * @property {String} method - The HTTP method used to submit the form.
     * @property {String} name - The name of the form.
     * @property {Boolean} novalidate - Indicates that the form should not be validated when submitted.
     * @property {String} target - The browsing context in which to display the response received after submitting the form.
     */
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        novalidate: { type: Boolean },
        target: { type: String },
    };
    
    formNative = createRef();

    /**
     * Initializes a new instance of the MDFormComponent.
     * Sets default values for form attributes.
     */
    constructor() {
        super();
        this.method = "post";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";
        this.autocomplete = "off";
        this.novalidate = true;
        this.childNodes_ = Array.from(this.childNodes);
    }

    /**
     * Renders the form component template.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <form 
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .novalidate="${ifDefined(this.novalidate)}"
                .target="${ifDefined(this.target)}"
                ${ref(this.formNative)}
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.childNodes_}</form>
        `;
    }

    /**
     * Lifecycle method called when the component is added to the DOM.
     * Adds necessary classes to the form element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
    }

    /**
     * Event handler for the form reset event.
     * Resets all form elements and emits the onFormNativeReset event.
     * @param {Event} event - The reset event.
     * @private
     */
    handleFormNativeReset(event) {
        for (const element of this.formNative.value.elements) {
            const customEvent = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
                detail: event,
            });
            element.dispatchEvent(customEvent);
        }
        this.emit("onFormNativeReset", event);
    }

    /**
     * Event handler for the form submit event.
     * Prevents default submission, collects form data, and emits the onFormNativeSubmit event.
     * @param {Event} event - The submit event.
     * @private
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.formNative.value);
        event.formData = formData;
        const data = {};
        for (const [name, value] of formData.entries()) {
            if (data[name]) {
                if (Array.isArray(data[name])) {
                    data[name].push(value);
                } else {
                    data[name] = [data[name], value];
                }
            } else {
                data[name] = value;
            }
        }
        event.data = data;
        this.emit("onFormNativeSubmit", event);
    }

    /**
     * Resets the form programmatically.
     * Equivalent to clicking the reset button.
     */
    reset() {
        this.formNative.value.reset();
    }

    /**
     * Submits the form programmatically.
     * Equivalent to clicking the submit button.
     */
    submit() {
        this.formNative.value.submit();
    }
}
customElements.define("md-form", MDFormComponent);
export { MDFormComponent };
