import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdForm extends MdElement {
    static properties = {
        method: { type: String },
        action: { type: String },
        enctype: { type: String },
        target: { type: String },
        autocomplete: { type: String },
        noValidate: { type: Boolean },
    };

    formNative = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <form 
                ${ref(this.formNative)}
                class="md-form__native"
                method="${ifDefined(this.method)}"
                action="${ifDefined(this.action)}"
                enctype="${ifDefined(this.enctype)}"
                target="${ifDefined(this.target)}"
                autocomplete="${ifDefined(this.autocomplete)}"
                ?novalidate="${ifDefined(this.noValidate)}"
                @formdata="${this._handleFormNativeFormdata}"
                @reset="${this._handleFormNativeReset}"
                @submit="${this._handleFormNativeSubmit}"
            >${this._childNodes}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.classList.add("md-form");

        this._childNodes = Array.from(this.childNodes);
        this.replaceChildren();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form");
    }

    reset() {
        const formNative = this.formNative.value;

        formNative.reset();
    }

    submit(button) {
        const formNative = this.formNative.value;

        formNative.reportValidity();

        if (formNative.requestSubmit) {
            if (button) {
                formNative.requestSubmit(button);
            } else {
                formNative.requestSubmit();
            }
        } else {
            formNative.submit();
        }
    }

    _handleFormNativeFormdata(event) {
        this.emit("onFormNativeFormdata", { event, element: this, formData: event.formData });
    }

    _handleFormNativeReset(event) {
        this.emit("onFormNativeReset", { event, element: this });
    }

    _handleFormNativeSubmit(event) {
        event.preventDefault();

        const formNative = this.formNative.value;
        new FormData(formNative);

        this.emit("onFormNativeSubmit", { event, element: this });
    }
}

customElements.define("md-form", MdForm);

export { MdForm };
