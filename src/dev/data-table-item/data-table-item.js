import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDataTableItem extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby" thumbnail="https://api.dicebear.com/9.x/micah/svg?seed=Abby" video="" icon="image" label="label" subLabel="subLabel" badge="" text="" leadingCheckbox leadingRadioButton leadingSwitch trailingCheckbox trailingRadioButton trailingSwitch selected indeterminate routerLink="" sortable sortableIcon=""></md-data-table-item>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table-item", DevDataTableItem);

export default document.createElement("dev-data-table-item");
