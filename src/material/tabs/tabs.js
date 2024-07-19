import { MDTreeComponent } from "../tree/tree.js";

/**
 * Custom component for managing tabs with indicators.
 * @element md-tabs
 * @extends MDTreeComponent
 */
class MDTabsComponent extends MDTreeComponent {
    /**
     * Initializes the tabs component.
     * Sets the default variant to "primary".
     */
    constructor() {
        super();
        this.variant = "primary";
        this.currentSelectedIndex = -1;
        this.lastSelectedIndex = -1;
    }

    /**
     * Available variants for the tabs component.
     */

    variants = ["primary", "secondary"];

    /**
     * Callback when the component is connected to the DOM.
     * Adds necessary classes to style the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    /**
     * Handles the selection of a tree item (tab).
     * Updates the indicator position based on the selected tab.
     * @param {CustomEvent} event - Custom event containing the selected tree item.
     * @private
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
