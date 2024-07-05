import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { targetLocales } from "../../generated/locale-codes.js";
import { languageMap, setLocale } from "../../material/localization/localization.js";
import { msg } from "@lit/localize";

const list = Object.keys(languageMap).map((name) => ({ name, value: languageMap[name] }));

class DevLocalizationComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div>${msg("The older sisters perched on the window of grandma, her old teeth were only two")}</div>
                    <label for="localization">Select localization</label>
                    <select
                        name=""
                        id="localization"
                        @change="${this.handleChange}"
                    >
                        <option value="en">Select language</option>
                        ${list.map(
                            (item) => html`
                                <option
                                    value="${item.value}"
                                    ?disabled="${!["af", "ak", "am", "id"].includes(item.value)}"
                                >
                                    ${item.name}
                                </option>
                            `,
                        )}
                    </select>
                </div>
            </div>
        `;
    }

    handleChange(event) {
        setLocale(event.currentTarget.value);
    }
}

customElements.define("dev-localization", DevLocalizationComponent);

export default document.createElement("dev-localization");
