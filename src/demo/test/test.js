import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Gesture } from "../../material/gesture/gesture";
class DemoTest extends MdComponent {
    constructor() {
        super();
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
                        <div
                            class="demo-gesture"
                            style="width:256px;height:256px;background:var(--md-sys-color-surface-container-highest);"
                        ></div>
                    </md-layout-grid-item>
                </md-layout-grid>
            </md-layout>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.gesture = new Gesture(this.querySelector(".demo-gesture"), {});
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.gesture) this.gesture.destroy();
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
