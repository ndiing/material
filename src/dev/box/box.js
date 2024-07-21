import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBox extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingActions='[{"icon":"favorite"}]'
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingCheckbox
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingRadio
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingSwitch
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingIcon="image"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                leadingSupportingText="leadingSupportingText"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                supportingText="supportingText"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingSupportingText="trailingSupportingText"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingIcon="image"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingSwitch
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingRadio
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingCheckbox
                            ></md-box>
                            <md-box
                                style="max-width:344px;"
                                headline="headline"
                                trailingActions='[{"icon":"favorite"}]'
                            ></md-box>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-box", DevBox);

export default document.createElement("dev-box");
