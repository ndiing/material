import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            items='[{"avatar":"https://api.dicebear.com/9.x/dylan/svg?seed=Leah","label":"Label","sublabel":"Sublabel Sublabel Sublabel Sublabel Sublabel"},{"avatar":"https://api.dicebear.com/9.x/dylan/svg?seed=Leah","label":"Label","sublabel":"Sublabel"},{"avatar":"https://api.dicebear.com/9.x/dylan/svg?seed=Leah","label":"Label"}]'
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
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-avatar", DemoList);

export default document.createElement("demo-list-avatar");

