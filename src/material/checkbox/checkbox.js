import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

class MDCheckboxComponent extends MDComponent {
    static properties = {
        name: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }
    get checkboxTrack() {
        return this.querySelector(".md-checkbox__track");
    }
    get checkboxThumb() {
        return this.querySelector(".md-checkbox__thumb");
    }

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-checkbox");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.checkboxNative,
            container: this.checkboxTrack,
            size: (40 / 14) * 100,
            containment: false,
            fadeout: true,
            centered: true,
        });
    }

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.handleChecboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    handleChecboxNativeInput(event) {
        const checkboxNative = event.currentTarget;

        this.indeterminate = checkboxNative.indeterminate;
        this.checked = checkboxNative.checked;

        this.emit("onChecboxNativeInput", { event, checkboxNative });
    }
}

customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };
