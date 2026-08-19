import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdForm extends MdElement {
    static properties = {
        method: { type: String },
        action: { type: String },
        enctype: { type: String },
        target: { type: String },
        autocomplete: { type: String },
        noValidate: { type: Boolean },
        inner: { type: Object },
    };

    /* prettier-ignore */
    render(){
        return html`
            <form 
                ${ref(this.getRef('native'))}
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
            >${this.inner}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form");
    }

    reset() {
        const native = this.getRef("native").value;

        native.reset();
    }

    submit(button) {
        const native = this.getRef("native").value;

        native.reportValidity();

        if (native.requestSubmit) {
            if (button) {
                native.requestSubmit(button);
            } else {
                native.requestSubmit();
            }
        } else {
            native.submit();
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

        const native = this.getRef("native").value;
        new FormData(native);

        this.emit("onFormNativeSubmit", { event, element: this });
    }
}

customElements.define("md-form", MdForm);

export { MdForm };
