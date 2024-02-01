import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

class MDRadioButtonComponent extends MDComponent {
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }

    get radioButtonTrack() {
        return this.querySelector(".md-radio-button__track");
    }

    get radioButtonThumb() {
        return this.querySelector(".md-radio-button__thumb");
    }

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.radioButtonNative,
            container: this.radioButtonTrack,
            size: (40 / 16) * 100,
            containment: false,
            fadeout: true,
            centered: true,
        });
    }

    updated(changedProperties) {
        // Implement logic if needed
    }

    render() {
        // prettier-ignore
        return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    handleRadioButtonNativeInput(event) {
        const radioButtonNative = event.currentTarget;

        this.checked = radioButtonNative.checked;

        this.emit("onRadioButtonNativeInput", { event, radioButtonNative });
    }
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };
