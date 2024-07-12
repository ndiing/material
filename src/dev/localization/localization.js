import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { msg } from "@lit/localize";
import { getLocale, setLocale } from "../../material/localization/localization.js";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

class DevLocalization extends MDComponent {
    constructor(){
        super()
        this.options=[sourceLocale].concat(targetLocales).map(locale=>({
            label:locale,
            value:locale,
            selected:locale===sourceLocale,
        }))
    }
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div>${msg('Hello, welcome to our application!')}</div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-text-field
                                type="select"
                                .options="${this.options}"
                                @onTextFieldNativeInput="${event=>{
                                    setLocale(event.currentTarget.value)
                                }}"
                            ></md-text-field>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define("dev-localization", DevLocalization);

export default document.createElement("dev-localization");
