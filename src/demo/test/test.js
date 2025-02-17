import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Virtual } from "../../material/virtual/virtual";
import { Store } from "../../material/store/store";
class DemoTest extends MdComponent {
    constructor() {
        super();
        this.headers = [[{ name: "label", label: "Label" }]];
        this.bodies = this.headers;
        this.footers = [];
        this.data = [];
        this.dataStore = [];
        this.dataVirtual = [];
    }

    render() {
        return html`
            <md-layout>
                <md-layout-grid style="min-height:0;height:100%">
                    <md-layout-grid-item
                        expanded="12"
                        medium="4"
                        compact="4"
                        style="min-height:0;height:100%"
                    >
                        <md-data-table
                            .headers="${this.headers}"
                            .bodies="${this.bodies}"
                            .data="${this.dataVirtual}"
                        ></md-data-table>
                    </md-layout-grid-item>
                </md-layout-grid>
            </md-layout>
        `;
    }

    async firstUpdated() {
        await this.updateComplete;
        this.viewport = this.querySelector("md-data-table table");
        this.viewport.addEventListener("onVirtualScroll", (event) => {
            const detail = event.detail;
            this.dataVirtual = detail.data;
            this.requestUpdate();
        });
        this.virtual = new Virtual(this.viewport, {
            track: "md-data-table caption",
            item: "md-data-table tbody",
        });
        this.data = Array.from({ length: 10000 }, (v, k) => ({ label: "label " + k }));
        this.store = new Store();
        this.store.load(this.data);
        const result = this.store.get();
        this.dataStore = result.data;
        this.dataStoreTotal = result.total;
        this.virtual.load({
            total: this.dataStoreTotal,
            data: this.dataStore,
        });
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
