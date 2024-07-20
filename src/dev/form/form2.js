import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevForm extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form
                        @onFormNativeReset="${(event) => console.log(event)}"
                        @onFormNativeSubmit="${(event) => console.log(event.detail.data)}"
                        .items="${[
                            {
                                component: "layout",
                                variant: "column",
                                items: [
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "color-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "date-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "datetime-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "month-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "number-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "password-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "search-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "select-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "text-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "textarea-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "time-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "week-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "email-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "number-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "tel-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "url-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "file-field" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "slider" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "checkbox" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "radio-button" }] },
                                    { component: "layout-item", expanded: 12, medium: 8, compact: 4, items: [{ component: "switch" }] },
                                ],
                            },
                        ]}"
                    ></md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
