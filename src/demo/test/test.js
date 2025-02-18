import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Virtual } from "../../material/virtual/virtual";
import { Store } from "../../material/store/store";
class DemoTest extends MdComponent {
    constructor() {
        super();
        this.headers = [
            [
                { name: "postId", label: "postId", width: 128, sortable: true, resizable: true },
                { name: "id", label: "id", width: 128, sortable: true, resizable: true },
                { name: "name", label: "name", width: 256, sortable: true, resizable: true },
                { name: "email", label: "email", width: 256, sortable: true, resizable: true },
                { name: "body", label: "body", width: 256, sortable: true, resizable: true },
            ],
        ];
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
                        <md-list
                            .headers="${this.headers}"
                            .bodies="${this.bodies}"
                            .data="${this.dataVirtual}"
                            .items="${this.dataVirtual}"
                            .fieldMap="${{ label: "name" }}"
                            checkbox
                        ></md-list>
                    </md-layout-grid-item>
                </md-layout-grid>
            </md-layout>
        `;
    }

    async firstUpdated() {
        await this.updateComplete;
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((res) => {
                this.data = res;
                this.store = new Store();
                this.store.load(this.data);
                const result = this.store.get();
                this.dataStore = result.data;
                this.virtual.load(result);
            });
        this.viewport = this.querySelector("md-list");
        this.viewport.addEventListener("onVirtualScroll", (event) => {
            const detail = event.detail;
            this.dataVirtual = detail.data;
            this.requestUpdate();
        });
        this.virtual = new Virtual(this.viewport, {
            track: "md-list-track",
            item: "md-list-item",
        });
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
