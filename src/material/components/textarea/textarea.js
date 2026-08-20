import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdTextField } from "../text-field/text-field.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";


/**
 * @class MdTextarea
 * @extends MdTextField
 */
class MdTextarea extends MdTextField {
    
    /**
     */
    static properties = {
        ...MdTextField.properties,
        rows: { type: Number },
        cols: { type: Number },
    };

    /* prettier-ignore */

    renderContent(){
        return html`
            <div
                ${ref(this.getRef('content'))}
                class="md-text-field__content"
            >
                ${this.prefix?this.renderText({text:this.prefix}):nothing}
                <textarea
                    aria-label="${ifDefined(this.ariaLabel || this.name || 'textarea')}"
                    ${ref(this.getRef('native'))}
                    class="md-text-field__native"
                    name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                    rows="${ifDefined(this.rows)}"
                    cols="${ifDefined(this.cols)}"
                    placeholder="${ifDefined(this.placeholder)}"
                    ?disabled="${ifDefined(this.disabled)}"
                    ?readonly="${ifDefined(this.readonly)}"
                    ?required="${ifDefined(this.required)}"
                    minlength="${ifDefined(this.minLength)}"
                    maxlength="${ifDefined(this.maxLength)}"
                    autocomplete="${ifDefined(this.autocomplete)}"
                    @focus="${this._handleFocus}"
                    @input="${this._handleInput}"
                    @blur="${this._handleBlur}"
                    @invalid="${this._handleInvalid}"
                ></textarea>
                ${this.suffix?this.renderText({text:this.suffix}):nothing}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-textarea");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-textarea");
    }
}

customElements.define("md-textarea", MdTextarea);

export { MdTextarea };
