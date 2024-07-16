import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { msg } from "@lit/localize";
import { getLocale, setLocale, sourceLocale, targetLocales } from "../../material/localization/localization.js";
import { ifDefined } from "lit/directives/if-defined.js";

class DevLocalization extends MDComponent {
    constructor() {
        super();
        this.options = [sourceLocale].concat(targetLocales).map((locale) => ({
            label: locale,
            value: locale,
            selected: locale === sourceLocale,
        }));
        // console.log(sourceLocale)
        // console.log(targetLocales)
        // console.log(getLocale())
        // console.log(setLocale(sourceLocale))
    }
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div>${msg("Hello, welcome to our application!")}</div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <select
                                @change="${(event) => {
                                    setLocale(event.currentTarget.value);
                                }}"
                            >
                                ${this.options.map(
                                    (option) => html`
                                        <option
                                            value="${ifDefined(option.value)}"
                                            label="${ifDefined(option.label)}"
                                            ?selected="${ifDefined(option.selected)}"
                                        ></option>
                                    `,
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-localization", DevLocalization);

export default document.createElement("dev-localization");
