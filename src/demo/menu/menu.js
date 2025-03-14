import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoMenu extends MdComponent {
    constructor() {
        super();
        function generateLabelData(count) {
            const data = [];
            for (let i = 1; i <= count; i++) {
                data.push({
                    id: i,
                    label: `Label ${i}`,
                });
            }
            return data;
        }
        this.items = generateLabelData(10000);
    }
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button id="button" variant="filled-tonal" label="Toggle Menu" @click="${(event) => menu.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-menu
                            id="menu"
                            .items="${[{ label: "Label" }, { label: "Label" }, { label: "Label" }, { label: "Label" }]}"
                            @onMenuWindowClick="${(event) => {
                                if (menu.open&&!menu.contains(event.detail.target) && !button.contains(event.detail.target)) {
                                    menu.close();
                                }
                            }}"
                            @onMenuWindowScroll="${() => {
                                if(menu.open)menu.close()
                            }}"
                            @onNavigationListItemClick="${() => menu.close()}"
                        ></md-menu>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button id="button2" variant="filled-tonal" label="Toggle Menu" @click="${(event) => menu2.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-menu
                            id="menu2"
                            .items="${this.items}"
                            @onMenuWindowClick="${(event) => {
                                if (menu2.open&&!menu2.contains(event.detail.target) && !button2.contains(event.detail.target)) {
                                    menu2.close();
                                }
                            }}"
                            @onMenuWindowScroll="${() => {
                                if(menu2.open)menu2.close()
                            }}"
                            @onNavigationListItemClick="${() => menu2.close()}"
                        ></md-menu>
                    </div>
                    <div style="height:100vh"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-menu", DemoMenu);

export default document.createElement("demo-menu");
