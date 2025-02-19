import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    
                
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
                    
                    
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-text", DemoList);

export default document.createElement("demo-list-text");
