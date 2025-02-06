import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * @extends MdComponent
 * @fires MdFormComponent#onFormNativeFormdata - {"detail":{"event":{}}}
 * @fires MdFormComponent#onFormNativeReset - {"detail":{"event":{}}}
 * @fires MdFormComponent#onFormNativeSubmit - {"detail":{"event":{}}}
 */
class MdFormComponent extends MdComponent {
    /**
     * @property {String} [acceptCharset]
     * @property {String} [action]
     * @property {String} [autocomplete]
     * @property {String} [enctype]
     * @property {String} [method]
     * @property {String} [name]
     * @property {Boolean} [noValidate]
     */
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        noValidate: { type: Boolean },
    };

    /**
     */
    constructor() {
        super();
        // this.acceptCharset = "UTF-8";
        // this.action = "/";
        // this.autocomplete = "off";
        // this.enctype = "application/x-www-form-urlencoded";
        // this.method = "post";
        this.body = Array.from(this.childNodes);
    }

    /**
     * @private
     */
    render() {
        return html`
            <form
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .noValidate="${ifDefined(this.noValidate)}"
                @formdata="${this.handleFormNativeFormdata}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >
                ${this.body}
            </form>
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleFormNativeFormdata(event) {
        this.emit("onFormNativeFormdata", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleFormNativeReset(event) {
        for (const element of this.formNative.elements) {
            const event = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
            });
            element.dispatchEvent(event);
        }
        this.emit("onFormNativeReset", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();
        new FormData(this.formNative);
        this.emit("onFormNativeSubmit", { event });
    }

    /**
     */
    get formNative() {
        return this.querySelector(".md-form__native");
    }

    /**
     */
    reset() {
        this.formNative.reset();
    }

    /**
     * @param {String} [submitButton]
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
}
customElements.define("md-form", MdFormComponent);
export { MdFormComponent };
