import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
class MdFormComponent extends MdComponent {
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        noValidate: { type: Boolean },
    };
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }
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
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
    }
    handleFormNativeFormdata(event) {
        this.emit("onFormNativeFormdata", { event });
    }
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
    handleFormNativeSubmit(event) {
        event.preventDefault();
        new FormData(this.formNative);
        this.emit("onFormNativeSubmit", { event });
    }
    get formNative() {
        return this.querySelector(".md-form__native");
    }
    reset() {
        this.formNative.reset();
    }
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
