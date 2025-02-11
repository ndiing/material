import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";
import { closestScrollableElement } from "../util/util";

/**
 *
 * @extends MdComponent
 * @fires onTreeKeydownArrowLeft
 * @fires onTreeKeydownArrowUp
 * @fires onTreeKeydownArrowRight
 * @fires onTreeKeydownArrowDown
 * @fires onTreeKeydownEnter
 * @fires onTreeKeydown
 * @fires onTreeItemClick
 * @element md-tree
 */
class MdTreeComponent extends MdComponent {
    /**
     * @property {Array} [items]
     */
    static properties = {
        items: { type: Array },
    };

    /**
     *
     */
    constructor() {
        super();
        this.items = [];
        this.flatItems = [];
        this.store = new Store();
        this.storeItems = [];
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderTreeItem(item) {
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

    /**
     *
     * @private
     */
    render() {
        return this.storeItems.filter((item) => item.visible).map((item) => this.renderTreeItem(item));
    }

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
        this.handleTreeKeydown = this.handleTreeKeydown.bind(this);
        window.addEventListener("keydown", this.handleTreeKeydown);
    }

    /**
     *
     * @private
     * @async
     * @param {Any} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.flatItems = this.flatten(this.items).flatItems;
            this.store.load(this.flatItems);
            const result = this.store.get();
            this.storeItems = result.data;
            this.requestUpdate();
        }
    }

    /**
     *
     * @param {Any} [items]
     * @param {Any} [parent]
     * @param {Any} [indent=0]
     */
    flatten(items, parent, indent = 0) {
        let expanded;
        let flatItems = [];
        items.forEach((item) => {
            item.parent = parent;
            item.indent = indent;
            if (indent === 0) item.visible = true;
            if (item.expanded || item.selected) expanded = true;
            flatItems.push(item);
            if (item.children?.length) {
                const result = this.flatten(item.children, item, indent + 1);
                if (result.expanded) {
                    expanded = result.expanded;
                    item.expanded = expanded;
                    this.updateItemVisibility(item);
                }
                flatItems.push(...result.flatItems);
            }
        });
        return { expanded, flatItems };
    }

    /**
     *
     * @param {Any} [data]
     */
    updateItemVisibility(data) {
        data.children.forEach((item) => {
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if (item.children?.length) this.updateItemVisibility(item);
        });
    }

    /**
     *
     * @async
     * @param {Any} [arg]
     */
    async updateScroll(arg) {
        await this.updateComplete;
        const selectedElement = this.querySelector("md-tree-item[selected]");
        selectedElement.focus();
        selectedElement.scrollIntoView({
            behavior: "instant",
            block: "nearest",
            inline: "nearest",
        });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydownArrowDown(event) {
        event.preventDefault();
        const visibleItems = this.storeItems.filter((item) => item.visible);
        const selectedIndex = visibleItems.findIndex((item) => item.selected);
        if (selectedIndex === visibleItems.filter((item) => item.visible).length - 1) return;
        const nextItem = visibleItems.find((item, index) => item.visible && index > selectedIndex);
        visibleItems.forEach((item, index) => {
            item.selected = item === nextItem;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onTreeKeydownArrowDown", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydownArrowUp(event) {
        event.preventDefault();
        const visibleItems = this.storeItems.filter((item) => item.visible);
        const selectedIndex = visibleItems.findLastIndex((item) => item.selected);
        if (selectedIndex === 0) return;
        const nextIndex = visibleItems.findLastIndex((item, index) => item.visible && index < selectedIndex);
        visibleItems.forEach((item, index) => {
            item.selected = index === nextIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onTreeKeydownArrowUp", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydownArrowRight(event) {
        event.preventDefault();
        const selectedItem = this.storeItems.find((item) => item.selected);
        if (selectedItem.children?.length) {
            selectedItem.expanded = true;
            this.updateItemVisibility(selectedItem);
            const visibleItems = this.storeItems.filter((item) => item.visible);
            const selectedIndex = visibleItems.findIndex((item) => item.selected);
            if (selectedIndex === visibleItems.filter((item) => item.visible).length - 1) return;
            const nextIndex = visibleItems.findIndex((item, index) => item.visible && index > selectedIndex);
            visibleItems.forEach((item, index) => {
                item.selected = index === nextIndex;
            });
            this.requestUpdate();
            this.updateScroll();
        }
        this.emit("onTreeKeydownArrowRight", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydownArrowLeft(event) {
        event.preventDefault();
        const selectedItem = this.storeItems.find((item) => item.selected);
        if (selectedItem.expanded) {
            selectedItem.expanded = false;
            this.updateItemVisibility(selectedItem);
            this.requestUpdate();
            this.updateScroll();
        } else if (selectedItem.parent) {
            this.flatItems.forEach((item) => {
                item.selected = item === selectedItem.parent;
            });
            this.requestUpdate();
            this.updateScroll();
        }
        this.emit("onTreeKeydownArrowLeft", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydownEnter(event) {
        event.preventDefault();
        const selectedElement = this.querySelector("md-tree-item[selected]");
        if (selectedElement) selectedElement.click();
        this.emit("onTreeKeydownEnter", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeKeydown(event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowLeft") return this.handleTreeKeydownArrowLeft(event);
            else if (event.key === "ArrowUp") return this.handleTreeKeydownArrowUp(event);
            else if (event.key === "ArrowRight") return this.handleTreeKeydownArrowRight(event);
            else if (event.key === "ArrowDown") return this.handleTreeKeydownArrowDown(event);
            else if (event.key === "Enter") return this.handleTreeKeydownEnter(event);
        }
        this.emit("onTreeKeydown", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeItemClick(event) {
        const action = event.target.closest(".md-tree__action");
        const data = event.currentTarget.data;
        if (action && data.children?.length) {
            data.expanded = !data.expanded;
            this.updateItemVisibility(data);
        }
        this.flatItems.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onTreeItemClick", { event });
    }
}
customElements.define("md-tree", MdTreeComponent);
export { MdTreeComponent };
