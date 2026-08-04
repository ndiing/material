import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";

/**
 * @fires md-list#onListItemSelection
 * @fires md-list#onListClick
 * @fires md-list#onListKeydown
 * @fires md-list#onListItemClick
 */
class MdList extends MdListElement {
    static properties = {
        ...MdListElement.properties,
        clearSelection: { type: Boolean },
        selectAll: { type: Boolean },
        activeRow: { type: Boolean },
        scrollOnArrowUpActiveRow: { type: Boolean },
        selectOnArrowUpActiveRow: { type: Boolean },
        scrollOnArrowDownActiveRow: { type: Boolean },
        selectOnArrowDownActiveRow: { type: Boolean },
        selectOnEnterActiveRow: { type: Boolean },
        selectRange: { type: Boolean },
        multiSelect: { type: Boolean },
        singleSelect: { type: Boolean },
        activeVisible: { type: Boolean, state: true },
        virtualScroll: { type: Boolean },
        virtualScrollOptions: { type: Object },
        _items: { type: Array, state: true },
    };

    constructor() {
        super();

        this._items = [];

        this.activeRowIndex = 0;
        this.activeVisible = false;
        this.startNode=0
        
        this._handleListVirtualScrollUpdate = this._handleListVirtualScrollUpdate.bind(this);
        this._handleListKeydown = this._handleListKeydown.bind(this);
        this._handleListClick = this._handleListClick.bind(this);

        this.virtualScrollController = new VirtualScrollController(this, {
            rowHeight: 56,
            register: false,
            onUpdate: this._handleListVirtualScrollUpdate,
        });
    }

    /* prettier-ignore */
    renderItems(){
        return repeat(this._items, (item) => item[this.valueField], (item,rowIndex)=>{
            const selected=this.selectedValues.has(item[this.valueField])
            return html`
                <md-list-item
                    style="${styleMap({
                        'transform':'translate3d(0,var(--md-comp-virtual-scroll-content-translate-y),0)',
                        '--md-comp-list-item-level': item.level,
                    })}"
                    class="${classMap({
                        'md-list__item--selected':selected,
                        'md-list__item--active':((this.activeVisible&&this.activeRow)&&(this.activeRowIndex-this.startNode)===rowIndex),
                    })}"
                    .item="${item}"
                    .leading="${ifDefined(item.leading)}"
                    .trailing="${this._getTrailingItem(item)}"
                    .overline="${ifDefined(item.overline)}"
                    .label="${ifDefined(item[this.labelField])}"
                    .supporting="${ifDefined(item.supporting)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .interactive="${ifDefined(item.interactive)}"
                    .rippleOptions="${ifDefined(item.rippleOptions)}"
                    .selected="${selected}"
                    @click="${this._handleListItemClick}"
                ></md-list-item>    
            `
        })
    }

    /* prettier-ignore */
    renderEmptyItems(){
        return html`
            <md-list-item
                label="No data to display."
            ></md-list-item>
        `
    }

    /* prettier-ignore */
    render(){
        return this._items?.length?this.renderItems():this.renderEmptyItems()
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.tabIndex = 0;

        if (this.virtualScroll) {
            this.virtualScrollController.init();
        }

        this.on("keydown", this._handleListKeydown);
        this.on("click", this._handleListClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.virtualScroll) {
            this.virtualScrollController.destroy();
        }

        this.off("keydown", this._handleListKeydown);
        this.off("click", this._handleListClick);

        this.classList.remove("md-list");
    }

    async update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("_list")) {
            await this.updateComplete;
            if (this.virtualScroll) {
                this.virtualScrollController.reinit({
                    viewport: this,
                    itemCount: this._list.length,
                });
            } else {
                this._items = this._list;
            }
        }
    }

    _getTrailingItem(item) {
        const trailing = [];
        if (item.hasChildren) {
            trailing.push({ component: "icon-button", width: "narrow", color: "standard", icon: this.expandedValues.has(item[this.valueField]) ? "keyboard_arrow_up" : "keyboard_arrow_down" });
        }
        return trailing;
    }

    _handleListVirtualScrollUpdate({ controller } = {}) {
        this.startNode = controller.startNode;

        this._items = this._list.slice(controller.startNode, controller.endNode);
    }

    _handleListClick(event) {
        if (this.clearSelection && !event.target.closest(".md-list__item")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();
            this.emit("onListItemSelection", { event, element: this });
        }
        this.emit("onListClick", { event, element: this });
    }

    _handleListKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.items.forEach((item) => {
                this.selectedValues.add(item[this.valueField]);
            });
            this.requestUpdate();
            this.emit("onListItemSelection", { event, element: this });
        }

        if (this.activeRow && event.key === "ArrowUp") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.max(this.activeRowIndex - 1, 0);

            if (this.scrollOnArrowUpActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex);
            }

            if (this.selectOnArrowUpActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("onListItemSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeRow && event.key === "ArrowDown") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.min(this.activeRowIndex + 1, this.items.length - 1);

            if (this.scrollOnArrowDownActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex, { offset: 16 });
            }

            if (this.selectOnArrowDownActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("onListItemSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.selectOnEnterActiveRow && event.key === "Enter") {
            event.preventDefault();

            const li = this.querySelector(`.md-list__item:nth-child(${this.activeRowIndex + 1 - this.startNode})`);
            const item = li.item;

            if (item.routerLink) {
                li.click();
            } else {
                this.activeVisible = true;
                this.select(this.items[this.activeRowIndex]);
                this.requestUpdate();
            }
            this.emit("onListItemSelection", { event, element: this });
        }
        this.emit("onListKeydown", { event, element: this });
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;

        if (this.selectRange && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;
            this.currentSelectedIndex = this._items.findIndex((_item) => _item[this.valueField] === item[this.valueField]);

            const [start, end] = [this.lastSelectedIndex, this.currentSelectedIndex].toSorted((a, b) => a - b);

            this.selectedValues.clear();
            this._items.forEach((item, index) => {
                if (index >= start && index <= end) {
                    this.selectedValues.add(item[this.valueField]);
                }
            });
            this.requestUpdate();
            this.emit("onListItemSelection", { event, element: this });
        } else if ((this.multiSelect && event.ctrlKey) || li.hasCheckbox || li.hasSwitch) {
            if (this.selectedValues.has(item[this.valueField])) {
                this.selectedValues.delete(item[this.valueField]);
            } else {
                this.selectedValues.add(item[this.valueField]);
            }
            this.requestUpdate();
            this.emit("onListItemSelection", { event, element: this });
        } else if (this.singleSelect || li.hasRadioButton) {
            this.select(item);
            this.emit("onListItemSelection", { event, element: this });
        }

        if (this.activeRow) {
            this.activeVisible = false;
            const index = Array.prototype.indexOf.call(li.parentElement.children, li);
            this.activeRowIndex = index + this.startNode;
            this.requestUpdate();
        }

        this.emit("onListItemClick", { event, element: this });
    }

    select(item) {
        if (item.hasChildren) {
            if (this.expandedValues.has(item[this.valueField])) {
                this.expandedValues.delete(item[this.valueField]);
            } else {
                this.expandedValues.add(item[this.valueField]);
            }
        }

        this.selectedValues.clear();
        this.selectedValues.add(item[this.valueField]);

        this._setItems();

        this.lastSelectedIndex = this._items.findIndex((_item) => _item[this.valueField] === item[this.valueField]);
    }
}

customElements.define("md-list", MdList);

export { MdList };
