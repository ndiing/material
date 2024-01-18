import { LitElement, html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdStateController } from "../state/state";

class MdRadioButtonComponent extends LitElement {
    static get properties() {
        return {
            name:{type:String},
            checked:{type:Boolean},
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-radio-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-radio-button");
    }

    get radioButtonNative(){return this.querySelector('.md-radio-button__native')}
    get radioButtonTrack(){return this.querySelector('.md-radio-button__track')}
    get radioButtonThumb(){return this.querySelector('.md-radio-button__thumb')}

    firstUpdated() {
        this.state=new MdStateController(this,{
            container:this.radioButtonTrack,
            button:this.radioButtonNative,
            containment: false,
            fadeout: true,
            size:40/16*100
        })
    }

    updated(_changedProperties) {
    }

    
    onRadioButtonNativeInput(event) {
        this.checked=event.currentTarget.checked
        this.dispatchEvent(new CustomEvent('onRadioButtonNativeInput',{
            bubbles:true,
            cancelable:true,
            detail:{event}
        }))
    }
}

customElements.define("md-radio-button", MdRadioButtonComponent);

export { MdRadioButtonComponent };
