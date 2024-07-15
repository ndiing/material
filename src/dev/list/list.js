import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevList extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>With leading avatar</md-markdown>
                            <md-list
                                .list="${[
                                    { avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading avatar and trailing checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
                                    { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
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
                            <md-markdown>With leading image</md-markdown>
                            <md-list
                                .list="${[
                                    { thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading image and trailing checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, thumbnail: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading video</md-markdown>
                            <md-list
                                .list="${[
                                    { image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
                                    { image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
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
                            <md-markdown>With leading video and trailing checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
                                    { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", label: "Lorem ipsum" },
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
                            <md-markdown>With leading icon</md-markdown>
                            <md-list
                                .list="${[
                                    { icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading icon and trailing checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With text and trailing checkbox</md-markdown>
                            <md-list .list="${[{ label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." }, { label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" }, { label: "Lorem ipsum" }]}" map='{"label":"label","value":"value"}' format="" @onListItemClick="${console.log}" @handleListKeydown="${console.log}" @onListItemSelectionStart="${console.log}" @onListItemSelection="${console.log}" @onListItemSelectionEnd="${console.log}" @onListItemCheckboxNativeInput="${console.log}" @onListItemRadioButtonNativeInput="${console.log}" @onListItemSwitchNativeInput="${console.log}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>With checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading checkbox</md-markdown>
                            <md-list
                                .list="${[
                                    { leadingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingCheckbox: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading checkbox and trailing supporting text</md-markdown>
                            <md-list
                                .list="${[
                                    { leadingCheckbox: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingCheckbox: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading radio button</md-markdown>
                            <md-list
                                .list="${[
                                    { leadingRadioButton: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingRadioButton: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading radio button and trailing supporting text</md-markdown>
                            <md-list
                                .list="${[
                                    { leadingRadioButton: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { leadingRadioButton: true, text: "100", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With trailing switch</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingSwitch: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingSwitch: true, label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
                            <md-markdown>With leading icon and trailing switch</md-markdown>
                            <md-list
                                .list="${[
                                    { trailingSwitch: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
                                    { trailingSwitch: true, icon: "image", label: "Lorem ipsum", subLabel: "Lorem ipsum dolor sit amet" },
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
