import { MDTreeComponent } from "../tree/tree.js";

/**
 * {{desc}}
 * @extends MDTreeComponent
 * @element md-tabs
 * @fires MDTabsComponent#onTreeItemClick - {{desc}}
 */
class MDTabsComponent extends MDTreeComponent {
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.variant = "primary";
        this.currentSelectedIndex = -1;
        this.lastSelectedIndex = -1;
    }
    variants = ["primary", "secondary"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    /**
     * {{desc}}
     */
    async handleTreeItemSelected(event) {
        await this.updateComplete;
        const treeItem = event.detail;
        let width = treeItem.clientWidth;
        let left = treeItem.offsetLeft;
        if (this.variant === "primary") {
            const treeInner = treeItem.querySelector(".md-tree__inner");
            width = treeInner.clientWidth;
            left += treeInner.offsetLeft;
        }
        let right = this.scrollWidth - (left + width);
        this.currentSelectedIndex = this.list.indexOf(treeItem.data);
        const direction = this.lastSelectedIndex > this.currentSelectedIndex ? "left" : "right";
        this.style.removeProperty(`--md-comp-tabs-indicator-transition-left`);
        this.style.removeProperty(`--md-comp-tabs-indicator-transition-right`);
        this.style.setProperty(`--md-comp-tabs-indicator-transition-${direction}`, "0ms");
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
        this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
    }
}
customElements.define("md-tabs", MDTabsComponent);
export { MDTabsComponent };
