import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Virtual } from "../../material/virtual/virtual";
import { Store } from "../../material/store/store";

class DemoTest extends MdComponent {
    constructor() {
        super();
        this.dataVirtual = [];
    }
    render() {
        return html`
            <md-layout>
                <md-layout-grid>
                    <md-layout-column
                        expanded="12"
                        medium="4"
                        compact="4"
                    >
                        <div class="demo-virtual">
                            <div class="demo-virtual__track"></div>
                            <div class="demo-virtual__container">${this.dataVirtual.map((item) => html` <div class="demo-virtual__item">${item.label}</div> `)}</div>
                        </div>
                    </md-layout-column>
                </md-layout-grid>
            </md-layout>
        `;
    }
    firstUpdated() {
        this.viewport = this.querySelector(".demo-virtual");

        this.viewport.addEventListener("onVirtualScroll", (event) => {
            const detail = event.detail;
            this.dataVirtual = detail.data;
            this.requestUpdate();
        });

        this.virtual = new Virtual(this.viewport, {
            track: ".demo-virtual__track",
            item: ".demo-virtual__item",
        });

        this.data = Array.from({ length: 1000 }, (v, k) => ({ label: "label " + k }));

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
