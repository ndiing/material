import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", title: "Label", subtitle: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", title: "Label", subtitle: "Sublabel" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", title: "Label" },
                            ]}"
                            .fieldMap="${{
                                label: "title",
                                sublabel: "subtitle",
                            }}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel" },
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel" },
                                { image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel" },
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel" },
                                { video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", sublabel: "Sublabel" },
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { icon: "image", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { icon: "image", label: "Label", sublabel: "Sublabel" },
                                { icon: "image", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, icon: "image", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingCheckbox: true, icon: "image", label: "Label", sublabel: "Sublabel" },
                                { trailingCheckbox: true, icon: "image", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[{ label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" }, { label: "Label", sublabel: "Sublabel" }, { label: "Label" }]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingCheckbox: true, label: "Label", sublabel: "Sublabel" },
                                { trailingCheckbox: true, label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingCheckbox: true, label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingCheckbox: true, label: "Label", sublabel: "Sublabel" },
                                { leadingCheckbox: true, label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingCheckbox: true, text: "Text", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingCheckbox: true, text: "Text", label: "Label", sublabel: "Sublabel" },
                                { leadingCheckbox: true, text: "Text", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingRadioButton: true, label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingRadioButton: true, label: "Label", sublabel: "Sublabel" },
                                { leadingRadioButton: true, label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingRadioButton: true, text: "Text", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingRadioButton: true, text: "Text", label: "Label", sublabel: "Sublabel" },
                                { leadingRadioButton: true, text: "Text", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingSwitch: true, label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingSwitch: true, label: "Label", sublabel: "Sublabel" },
                                { trailingSwitch: true, label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingSwitch: true, icon: "image", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { trailingSwitch: true, icon: "image", label: "Label", sublabel: "Sublabel" },
                                { trailingSwitch: true, icon: "image", label: "Label" },
                            ]}"
                            @onListItemClick="${console.log}"
                            @onListItemCheckboxNativeInput="${console.log}"
                            @onListItemRadioButtonNativeInput="${console.log}"
                            @onListItemSwitchNativeInput="${console.log}"
                        ></md-list>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list", DemoList);

export default document.createElement("demo-list");
