import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevListItem extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list-item avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby" thumbnail="https://api.dicebear.com/9.x/micah/svg?seed=Abby" video="" icon="image" label="label" subLabel="subLabel" badge="" text="" leadingCheckbox leadingRadioButton leadingSwitch trailingCheckbox trailingRadioButton trailingSwitch selected routerLink="" activated></md-list-item>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list-item", DevListItem);

export default document.createElement("dev-list-item");
