import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDVirtualController } from "../../material/virtual/virtual.js";

class DevVirtualComponent extends MDComponent {
    get viewport() {
        return this.querySelector(".md-virtual");
    }
    get scrollbar() {
        return this.querySelector(".md-virtual__scrollbar");
    }
    get container() {
        return this.querySelector(".md-virtual__container");
    }

    constructor() {
        super();

        this.virtualScroll = new MDVirtualController(this, {
            viewportSelector: ".md-virtual",

            rowTotal: 1000,
            rowHeight: 52,
            buffer: 2,

            columnTotal: 1000,
            columnWidth: 156,
        });

        this.addEventListener("onVirtualScrollChange", () => {
            console.log(this.virtualScroll.rowStart, this.virtualScroll.rowEnd, this.virtualScroll.columnStart, this.virtualScroll.columnEnd);
            this.scrollbar.style.height = this.virtualScroll.scrollbarHeight + "px";
            this.scrollbar.style.width = this.virtualScroll.scrollbarWidth + "px";
        });
    }

    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:0;padding:24px;min-height:0;min-width:0;height:100%;width:100%;"
            >
                <div
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                    style="min-height:0;min-width:0;height:100%;width:100%;"
                >
                    <div class="md-virtual">
                        <div class="md-virtual__scrollbar"></div>
                        <div class="md-virtual__container"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-virtual", DevVirtualComponent);

export default document.createElement("dev-virtual");
