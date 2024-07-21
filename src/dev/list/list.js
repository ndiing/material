import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevList extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                rangeSelection
                                multiSelection
                                singleSelection
                                allSelection
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingCheckbox: true, thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { icon: "image", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingCheckbox: true, icon: "image", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    //
                                    { label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingCheckbox: true, label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { leadingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { leadingCheckbox: true, label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { leadingCheckbox: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingCheckbox: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { leadingCheckbox: true, text: "100", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { leadingRadioButton: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingRadioButton: true, label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { leadingRadioButton: true, label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { leadingRadioButton: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingRadioButton: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { leadingRadioButton: true, text: "100", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingSwitch: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingSwitch: true, label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingSwitch: true, label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-list
                                .list="${[
                                    { trailingSwitch: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingSwitch: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum" },
                                    { trailingSwitch: true, icon: "image", label: "Lorem ipsum" },
                                ]}"
                                map='{"label":"label","value":"value"}'
                                format=""
                                @onListItemClick="${console.log}"
                                @handleListKeydown="${console.log}"
                                @onListItemSelectionStart="${console.log}"
                                @onListItemSelection="${console.log}"
                                @onListItemSelectionEnd="${console.log}"
                                @onListItemCheckboxNativeInput="${console.log}"
                                @onListItemRadioButtonNativeInput="${console.log}"
                                @onListItemSwitchNativeInput="${console.log}"
                            ></md-list>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
