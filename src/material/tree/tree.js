import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 * @extends MdComponent
 * @element md-tree
 */
class MDTreeComponent extends MdComponent {
    /**
     * @property {Array} [items]
     */
    static properties = {
        items: { type: Array },
    };

    constructor() {
        super();

        this.items = [];
        this.itemsFlat = [];
    }

    renderTreeItem(item) {
        /* prettier-ignore */
        return html`
            <md-tree-row>
                <md-tree-item
                    .data="${item}"
                    .selected="${ifDefined(item.selected)}"
                    .expanded="${ifDefined(item.expanded)}"
                    .indent="${ifDefined(item.indent)}"
                    .actions="${ifDefined(item.actions)}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcons="${ifDefined(item.leafIcons)}"
                    .label="${ifDefined(item.label)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    @click="${this.handleTreeItemClick}"
                ></md-tree-item>
            </md-tree-row>
        `;
    }

    render() {
        /* prettier-ignore */
        return html` ${this.itemsFlat.filter((item) => item.visible).map((item) => this.renderTreeItem(item))} `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree");
        this.handleTreeKeydown = this.handleTreeKeydown.bind(this);
        window.addEventListener("keydown", this.handleTreeKeydown);
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("items")) {
            await this.updateComplete;

            this.itemsFlat = this.flatten(this.items).itemsFlat;
            this.requestUpdate();
        }
    }

    flatten(items, parent, indent = 0) {
        let expanded;
        let itemsFlat = [];
        items.forEach((item) => {
            item.parent = parent;
            item.indent = indent;
            if (indent === 0) item.visible = true;
            if (item.expanded || item.selected) expanded = true;
            itemsFlat.push(item);

            if (item.children?.length) {
                const result = this.flatten(item.children, item, indent + 1);

                if (result.expanded) {
                    expanded = result.expanded;
                    item.expanded = expanded;
                    this.updateVisibility(item);
                }
                itemsFlat.push(...result.itemsFlat);
            }
        });
        return { expanded, itemsFlat };
    }

    updateVisibility(data) {
        data.children.forEach((item) => {
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if (item.children?.length) this.updateVisibility(item);
        });
    }

    async updateScroll(arg) {
        await this.updateComplete;

        const treeItemSelected = this.querySelector("md-tree-item[selected]");
        treeItemSelected.scrollIntoView({ block: "nearest" });
    }

    handleTreeKeydownArrowDown(event) {
        event.preventDefault();
        const visibleItems = this.itemsFlat.filter((item) => item.visible);
        const selectedIndex = visibleItems.findIndex((item) => item.selected);
        if (selectedIndex === visibleItems.filter((item) => item.visible).length - 1) return;
        const nextItem = visibleItems.find((item, index) => item.visible && index > selectedIndex);
        visibleItems.forEach((item, index) => {
            item.selected = item === nextItem;
        });
        this.requestUpdate();
        this.updateScroll();

        /**
         * @event onTreeKeydownArrowDown
         * @property {Object} event
         */
        this.emit("onTreeKeydownArrowDown", { event });
    }

    handleTreeKeydownArrowUp(event) {
        event.preventDefault();
        const visibleItems = this.itemsFlat.filter((item) => item.visible);
        const selectedIndex = visibleItems.findLastIndex((item) => item.selected);
        if (selectedIndex === 0) return;
        const nextIndex = visibleItems.findLastIndex((item, index) => item.visible && index < selectedIndex);
        visibleItems.forEach((item, index) => {
            item.selected = index === nextIndex;
        });
        this.requestUpdate();
        this.updateScroll();

        /**
         * @event onTreeKeydownArrowUp
         * @property {Object} event
         */
        this.emit("onTreeKeydownArrowUp", { event });
    }

    handleTreeKeydownArrowRight(event) {
        event.preventDefault();
        const selectedItem = this.itemsFlat.find((item) => item.selected);

        if (selectedItem.children?.length) {
            selectedItem.expanded = true;
            this.updateVisibility(selectedItem);
            const visibleItems = this.itemsFlat.filter((item) => item.visible);
            const selectedIndex = visibleItems.findIndex((item) => item.selected);
            if (selectedIndex === visibleItems.filter((item) => item.visible).length - 1) return;
            const nextIndex = visibleItems.findIndex((item, index) => item.visible && index > selectedIndex);
            visibleItems.forEach((item, index) => {
                item.selected = index === nextIndex;
            });
            this.requestUpdate();
            this.updateScroll();
        }

        /**
         * @event onTreeKeydownArrowRight
         * @property {Object} event
         */
        this.emit("onTreeKeydownArrowRight", { event });
    }

    handleTreeKeydownArrowLeft(event) {
        event.preventDefault();
        const selectedItem = this.itemsFlat.find((item) => item.selected);

        if (selectedItem.expanded) {
            selectedItem.expanded = false;
            this.updateVisibility(selectedItem);
            this.requestUpdate();
            this.updateScroll();
        } else if (selectedItem.parent) {
            this.itemsFlat.forEach((item) => {
                item.selected = item === selectedItem.parent;
            });
            this.requestUpdate();
            this.updateScroll();
        }

        /**
         * @event onTreeKeydownArrowLeft
         * @property {Object} event
         */
        this.emit("onTreeKeydownArrowLeft", { event });
    }

    handleTreeKeydownEnter(event) {
        event.preventDefault();

        /**
         * @event onTreeKeydownEnter
         * @property {Object} event
         */
        this.emit("onTreeKeydownEnter", { event });
    }

    handleTreeKeydown(event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowLeft") this.handleTreeKeydownArrowLeft(event);
            else if (event.key === "ArrowUp") this.handleTreeKeydownArrowUp(event);
            else if (event.key === "ArrowRight") this.handleTreeKeydownArrowRight(event);
            else if (event.key === "ArrowDown") this.handleTreeKeydownArrowDown(event);
            else if (event.key === "Enter") this.handleTreeKeydownEnter(event);

            /**
             * @event onTreeKeydown
             * @property {Object} event
             */
            this.emit("onTreeKeydown", { event });
        }
    }

    handleTreeItemClick(event) {
        const action = event.target.closest(".md-tree__action");
        const data = event.currentTarget.data;

        if (action && data.children?.length) {
            data.expanded = !data.expanded;
            this.updateVisibility(data);
        }
        this.itemsFlat.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();

        /**
         * @event onTreeItemClick
         * @property {Object} event
         */
        this.emit("onTreeItemClick", { event });
    }
}

customElements.define("md-tree", MDTreeComponent);

export { MDTreeComponent };
