import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

class MDSwitchComponent extends MDComponent {
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }

    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.switchNative,
            container: this.switchThumb,
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
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `;
    }

    handleSwitchNativeInput(event) {
        const switchNative = event.currentTarget;

        this.checked = switchNative.checked;

        this.emit("onSwitchNativeInput", { event, switchNative });
    }
}

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };
