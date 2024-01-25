import { LitElement, html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdStateController } from "../state/state";
import { MdComponent } from "../component/component";

class MdCheckboxComponent extends MdComponent {
    static get properties() {
        return {
            name: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
        };
    }

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    get checkboxTrack() {
        return this.querySelector(".md-checkbox__track");
    }

    get checkboxThumb() {
        return this.querySelector(".md-checkbox__thumb");
    }

    render() {
        /*prettier-ignore*/
        return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-checkbox");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            container: this.checkboxTrack,
            button: this.checkboxNative,
            containment: false,
            fadeout: true,
            size: (40 / 14) * 100,
        });
    }

    onCheckboxNativeInput(event) {
        this.indeterminate = event.currentTarget.indeterminate;
        this.checked = event.currentTarget.checked;

        this.emit("onCheckboxNativeInput", { event });
    }
}

customElements.define("md-checkbox", MdCheckboxComponent);

export { MdCheckboxComponent };
