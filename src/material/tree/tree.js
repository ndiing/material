import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 * @extends MdComponent
 * @fires MdTreeComponent#onTreeKeydownArrowDown
 * @fires MdTreeComponent#onTreeKeydownArrowUp
 * @fires MdTreeComponent#onTreeKeydownArrowRight
 * @fires MdTreeComponent#onTreeKeydownArrowLeft
 * @fires MdTreeComponent#onTreeKeydownEnter
 * @fires MdTreeComponent#onTreeKeydown
 * @fires MdTreeComponent#onTreeItemClick
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
     */
    constructor() {
        super();
        this.items = [];
        this.flatItems = [];
        this.store = new Store();
        this.storeItems = [];
    }

    /**
     * @private
     * @param {Undefined} [item]
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
     * @private
     */
    render() {
        return this.storeItems.filter((item) => item.visible).map((item) => this.renderTreeItem(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
        this.handleTreeKeydown = this.handleTreeKeydown.bind(this);
        window.addEventListener("keydown", this.handleTreeKeydown);
    }

    /**
     * @private
     * @async
     * @param {Undefined} [changedProperties]
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
     * @param {Undefined} [items]
     * @param {Undefined} [parent]
     * @param {String} [indent=0]
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
                    this.updateVisibility(item);
                }
                flatItems.push(...result.flatItems);
            }
        });
        return { expanded, flatItems };
    }

    /**
     * @param {Undefined} [data]
     */
    updateVisibility(data) {
        data.children.forEach((item) => {
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if (item.children?.length) this.updateVisibility(item);
        });
    }

    /**
     * @async
     * @param {Undefined} [arg]
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
     * @private
     * @param {Undefined} [event]
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
     * @private
     * @param {Undefined} [event]
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
     * @private
     * @param {Undefined} [event]
     */
    handleTreeKeydownArrowRight(event) {
        event.preventDefault();
        const selectedItem = this.storeItems.find((item) => item.selected);
        if (selectedItem.children?.length) {
            selectedItem.expanded = true;
            this.updateVisibility(selectedItem);
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
     * @private
     * @param {Undefined} [event]
     */
    handleTreeKeydownArrowLeft(event) {
        event.preventDefault();
        const selectedItem = this.storeItems.find((item) => item.selected);
        if (selectedItem.expanded) {
            selectedItem.expanded = false;
            this.updateVisibility(selectedItem);
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
     * @private
     * @param {Undefined} [event]
     */
    handleTreeKeydownEnter(event) {
        event.preventDefault();
        const selectedElement = this.querySelector("md-tree-item[selected]");
        if (selectedElement) selectedElement.click();
        this.emit("onTreeKeydownEnter", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
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
     * @private
     * @param {Undefined} [event]
     */
    handleTreeItemClick(event) {
        const action = event.target.closest(".md-tree__action");
        const data = event.currentTarget.data;
        if (action && data.children?.length) {
            data.expanded = !data.expanded;
            this.updateVisibility(data);
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
