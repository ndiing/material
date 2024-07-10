import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Represents a form component with extended functionalities.
 * @element md-form
 * @extends MDComponent
 * @fires MDFormComponent#onFormNativeReset - Event emitted when the native form reset event is triggered.
 * @fires MDFormComponent#onFormNativeSubmit - Event emitted when the native form submit event is triggered.
 */
class MDFormComponent extends MDComponent {
    /**
     * Defines the properties of the MDFormComponent.
     * @property {String} acceptCharset - Character encoding for the form.
     * @property {String} action - URL to which the form data will be sent.
     * @property {String} autocomplete - Specifies if the form should have autocomplete on or off.
     * @property {String} enctype - Encoding type for the form.
     * @property {String} method - HTTP method to use when sending form data.
     * @property {String} name - Name of the form.
     * @property {Boolean} novalidate - If true, the form will not be validated when submitted.
     * @property {String} target - Target window for the form submission.
     * @property {String} rel - Relationship between the current document and the target resource.
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
        rel: { type: String },
    };

    /**
     * Retrieves the native form element within the component.
     * @returns {HTMLFormElement} The native form element.
     */
    get native() {
        return this.querySelector(".md-form__native");
    }

    /**
     * Creates an instance of MDFormComponent.
     */
    constructor() {
        super();

        this.method = "post";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";

        this.body = Array.from(this.childNodes);
    }

    /**
     * Renders the MDFormComponent.
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
                .rel="${ifDefined(this.rel)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `;
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    /**
     * Handles the native form reset event.
     * @param {Event} event - The reset event object.
     * @private
     */
    handleFormNativeReset(event) {
        for (const element of event.currentTarget.elements) {
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
     * Handles the native form submit event.
     * @param {Event} event - The submit event object.
     * @private
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
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
        event.formData = formData;
        event.data = data;
        this.emit("onFormNativeSubmit", event);
    }

    /**
     * Resets the form to its initial state.
     */
    reset() {
        this.native.reset();
    }

    /**
     * Submits the form.
     */
    submit() {
        this.native.submit();
    }
}

customElements.define("md-form", MDFormComponent);

export { MDFormComponent };
