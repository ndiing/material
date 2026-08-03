import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import icons from "./icons.json";
import { VirtualScrollController } from "../../material/controller/virtual-scroll.js";
import { styleMap } from "lit/directives/style-map.js";

class DemoIcon extends MdElement {
    static properties = {
        list: { type: Array },
    };

    constructor() {
        super();
        this.list = [];
    }

    /* prettier-ignore */
    render(){
        return html`
            <!-- <md-icon>menu</md-icon> -->
            <div class="test-viewport">
                <div class="test-container" style="${styleMap({
                    'transform':'translate3d(0,var(--md-comp-virtual-scroll-content-translate-y),0)'
                })}">
                    ${this.list.map(items=>html`
                        <div class="test-item">
                            ${items.map(item=>item.text?html`
                                <div>${item.text.charAt(0).toUpperCase() + item.text.slice(1)}</div>
                            `:html`
                                <md-icon title="${item.icon}">${item.icon}</md-icon>
                            `)}
                        </div>    
                    `)}
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        if (!this.virtualScrollController) {
            this.virtualScrollController = new VirtualScrollController(this.querySelector(".test-viewport"), {
                rowHeight: 56,
                itemCount: icons.length,
                register: false,
                onUpdate: ({ controller } = {}) => {
                    this.list = icons.slice(controller.startNode, controller.endNode);
                },
            });
        }

        this.virtualScrollController.init();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.virtualScrollController.destroy();
    }
}
customElements.define("demo-icon", DemoIcon);
export default document.createElement("demo-icon");
