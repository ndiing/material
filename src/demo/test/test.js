import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { VirtualScroll } from "../../material/virtual-scroll/virtual-scroll";
import { Store } from "../../material/store/store";

class DemoTest extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="md-virtual-scroll"
                            style="height:256px;"
                        >
                            <div class="md-virtual-scroll__track"></div>
                            <div class="md-virtual-scroll__container">
                                ${this.data?.map(
                                    (item) => html`
                                        <div
                                            class="md-virtual-scroll__item"
                                            style="height:56px;line-height:56px;"
                                        >
                                            ${item.label}
                                        </div>
                                    `,
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.store = new Store();
        this.virtualScroll = new VirtualScroll(this.querySelector(".md-virtual-scroll"), {});
        this.addEventListener("onVirtualScroll", async (event) => {
            const { start: _start, end: _end } = event.detail;
            this.data = await this.store.get({ _start, _end }).then((res) => res.data);
            this.requestUpdate();
        });
    }

    async firstUpdated() {
        await this.updateComplete;
        this.store.load(Array.from({ length: 10000 }, (v, k) => ({ label: `Label ${k}` })));
        this.virtualScroll.load({ total: this.store.data.length });
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
