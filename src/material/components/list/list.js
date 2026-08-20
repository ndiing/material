import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";


/**
 * @class MdList
 * @extends MdListElement
 * 
 * @fires MdList#select
 * @fires MdList#item-click
 */
class MdList extends MdListElement {
    
    /**
     */
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
        rippleOptions: { type: Object },
        _items: { type: Array, state: true },
    };

    constructor() {
        super();

        this._items = [];
        this.activeRowIndex = 0;
        this.activeVisible = false;
        this.startNode = 0;

        this._handleVirtualScrollUpdate = this._handleVirtualScrollUpdate.bind(this);
        this._handleKeydown = this._handleKeydown.bind(this);
        this._handleClick = this._handleClick.bind(this);

        this.virtualScrollController = new VirtualScrollController(this, {
            rowHeight: 56,
            register: false,
            onUpdate: this._handleVirtualScrollUpdate,
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
                    .rippleOptions="${ifDefined(item.rippleOptions??this.rippleOptions)}"
                    .selected="${selected}"
                    @click="${this._handleItemClick}"
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

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.tabIndex = 0;

        if (this.virtualScroll) {
            this.updateComplete.then(() => {
                this.virtualScrollController.init();
            });
        }

        this.addEventListener("keydown", this._handleKeydown);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.virtualScroll) {
            this.virtualScrollController.destroy();
        }

        this.removeEventListener("keydown", this._handleKeydown);
        this.removeEventListener("click", this._handleClick);

        this.classList.remove("md-list");
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("_list")) {
            if (!this.virtualScroll) {
                this._items = this._list;
            }
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("_list")) {
            if (this.virtualScroll) {
                this.updateComplete.then(() => {
                    this.virtualScrollController.reinit({
                        itemCount: this._list.length,
                    });
                });
            }
        }

        if (_changedProperties.has("virtualScrollOptions")) {
            if (this.virtualScroll) {
                this.updateComplete.then(() => {
                    this.virtualScrollController.reinit(this.virtualScrollOptions);
                });
            }
        }
    }

    _getTrailingItem(item) {
        const trailing = [];

        if (item.hasChildren) {
            trailing.push({ component: "icon-button", width: "narrow", color: "standard", icon: this.expandedValues.has(item[this.valueField]) ? "keyboard_arrow_up" : "keyboard_arrow_down" });
        }

        return [...((item.trailing?.length && item.trailing) || []), ...trailing];
    }

    _handleVirtualScrollUpdate(params = {}) {
        const { controller } = params;
        this.startNode = controller.startNode;

        this._items = this._list.slice(controller.startNode, controller.endNode);
    }

    _handleClick(event) {
        if (this.clearSelection && !event.target.closest(".md-list__item")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();

            this.emit("select", { event, element: this });
        }
    }

    _handleKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.items.forEach((item) => {
                this.selectedValues.add(item[this.valueField]);
            });
            this.requestUpdate();

            this.emit("select", { event, element: this });
        }

        if (this.activeRow && (event.key === "ArrowUp" || event.key === "ArrowLeft")) {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.max(this.activeRowIndex - 1, 0);

            if (this.scrollOnArrowUpActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex);
            }

            if (this.selectOnArrowUpActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("select", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeRow && (event.key === "ArrowDown" || event.key === "ArrowRight")) {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.min(this.activeRowIndex + 1, this.items.length - 1);

            if (this.scrollOnArrowDownActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex, { offset: 16 });
            }

            if (this.selectOnArrowDownActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("select", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.selectOnEnterActiveRow && (event.key === "Enter" || event.code === "Space")) {
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

            this.emit("select", { event, element: this });
        }
    }

    _handleItemClick(event) {
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

            this.emit("select", { event, element: this, item });
        } else if ((this.multiSelect && event.ctrlKey) || li.hasCheckbox || li.hasSwitch) {
            if (this.selectedValues.has(item[this.valueField])) {
                this.selectedValues.delete(item[this.valueField]);
            } else {
                this.selectedValues.add(item[this.valueField]);
            }
            this.requestUpdate();
            this.emit("select", { event, element: this, item });
        } else if (this.singleSelect || li.hasRadioButton) {
            this.select(item);
            this.emit("select", { event, element: this, item });
        }
        if (this.activeRow) {
            this.activeVisible = false;

            const index = Array.prototype.indexOf.call(li.parentElement.children, li);
            this.activeRowIndex = index + this.startNode;

            this.requestUpdate();
        }

        this.emit("item-click", { event, element: this });
    }

    
    /**
     * 
     */
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
