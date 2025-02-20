import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoList extends MdComponent {
    static properties = {
        items: { type: Array },
    };
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
        // setTimeout(() => {
        //     this.items = generateLabelData(10000)
        //     this.requestUpdate()
        // },1000*5)
    }
    render() {
        return html`
            <div class="md-layout">
                <div
                    class="md-layout__grid"
                    style="min-height: 0;min-width: 0;height: 100%;width: 100%;"
                >
                    <div
                        class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"
                        style="min-height: 0;min-width: 0;height: 100%;width: 100%;"
                    >
                        <md-list
                            .items="${this.items}"
                            virtualize
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

customElements.define("demo-list-virtualize", DemoList);

export default document.createElement("demo-list-virtualize");
