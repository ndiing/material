import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";


/**
 * @class MdForm
 * @extends MdElement
 * 
 * @fires MdForm#formdata
 * @fires MdForm#reset
 * @fires MdForm#submit
 */
class MdForm extends MdElement {
    
    /**
     * @property {String} method - 
     * @property {String} action - 
     * @property {String} enctype - 
     * @property {String} target - 
     * @property {String} autocomplete - 
     * @property {Boolean} noValidate - 
     * @property {Object} inner - 
     */
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
                @formdata="${this._handleFormdata}"
                @reset="${this._handleReset}"
                @submit="${this._handleSubmit}"
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

    
    /**
     * 
     */
    reset() {
        const native = this.getRef("native").value;

        native.reset();
    }

    
    /**
     * 
     */
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

    _handleFormdata(event) {
        event.stopPropagation();
        this.emit("formdata", { event, element: this, formData: event.formData });
    }

    _handleReset(event) {
        event.stopPropagation();
        this.emit("reset", { event, element: this });
    }

    _handleSubmit(event) {
        event.stopPropagation();
        event.preventDefault();

        const native = this.getRef("native").value;
        new FormData(native);

        this.emit("submit", { event, element: this });
    }
}

customElements.define("md-form", MdForm);

export { MdForm };
