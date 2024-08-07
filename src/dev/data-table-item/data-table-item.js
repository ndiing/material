import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDataTableItem extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingActions='[{"icon":"favorite"}]'></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingCheckbox></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingIcon="image"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingSupportingText="leadingSupportingText"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingSupportingText="trailingSupportingText"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingIcon="image"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingCheckbox></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingActions='[{"icon":"favorite"}]'></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingCheckbox></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingCheckbox></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate leadingCheckbox></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate leadingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate leadingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate trailingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate trailingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" indeterminate trailingCheckbox></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" selected leadingCheckbox></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" selected leadingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" selected leadingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" selected trailingSwitch></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" selected trailingRadio></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" selected trailingCheckbox></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supportingText" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" supportingText="supporting text supporting text supporting text supporting text" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-data-table-item>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-item style="max-width:344px;" headline="headline" leadingIcon="image"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline"></md-data-table-item>
                            <md-data-table-item style="max-width:344px;" headline="headline" trailingIcon="image"></md-data-table-item>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table-item", DevDataTableItem);

export default document.createElement("dev-data-table-item");
