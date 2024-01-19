import { LitElement, html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdStateController } from "../state/state";

class MdSwitchComponent extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    /*prettier-ignore*/
    render() {
                return html`
            <input 
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-switch");
    }

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }

    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            container: this.switchThumb,
            button: this.switchNative,
            containment: false,
            fadeout: true,
            centered: true,
        });
    }

    updated(_changedProperties) {}

    onSwitchNativeInput(event) {
        this.checked = event.currentTarget.checked;

        this.dispatchEvent(
            new CustomEvent("onSwitchNativeInput", {
                bubbles: true,
                cancelable: true,
                detail: { event },
            })
        );
    }
}

customElements.define("md-switch", MdSwitchComponent);

export { MdSwitchComponent };
