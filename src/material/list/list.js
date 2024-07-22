import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { renderDivider, renderListItem } from "../template/template.js";
import { choose } from "lit/directives/choose.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-list
 * @fires MDListComponent#onListItemClick - {{desc}}
 * @fires MDListComponent#onListKeydown - {{desc}}
 * @fires MDListComponent#onListItemCheckboxNativeInput - {{desc}}
 * @fires MDListComponent#onListItemRadioButtonNativeInput - {{desc}}
 * @fires MDListComponent#onListItemSwitchNativeInput - {{desc}}
 */
class MDListComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} items - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
     */
    static properties = {
        items: { type: Array },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    /**
     * {{desc}}
     */
    constructor() {
        super();
    }

    renderListItem(item = {}) {
        item.onListItemClick = this.handleListItemClick;
        item.onCheckboxNativeInput = this.handleListItemCheckboxNativeInput;
        item.onRadioButtonNativeInput = this.handleListItemRadioButtonNativeInput;
        item.onSwitchNativeInput = this.handleListItemSwitchNativeInput;
        return renderListItem(item);
    }

    renderListSection(item = {}) {
        return html`
            <div class="md-block md-list__section">
                <div class="md-block__group">
                    <div class="md-block__headline">${item.section}</div>
                </div>
            </div>
        `;
    }

    renderListDivider(item = {}) {
        item.classMap = { "md-list__divider": true };
        return renderDivider(item);
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return this.items?.map((item) => {
            
            return choose(item.component, [
                ['section', () => this.renderListSection(item)],
                ['divider', () => this.renderListDivider(item)],
            ], () => this.renderListItem(item))
        });
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.on("keydown", this.handleListKeydown);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("keydown", this.handleListKeydown);
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    select(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.items.indexOf(data);
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    selectToggle(data) {
        data.selected = !data.selected;
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.items.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;
        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }
        this.items.forEach((item, i) => {
            item.selected = i >= this.startIndex && i <= this.endIndex;
        });
        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     * {{desc}}
     */
    selectAll() {
        this.items.forEach((item) => {
            item.selected = true;
        });
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleListItemClick(event) {
        if (
            /* prettier-ignore */
            event.target.closest(
                ".md-list__checkbox," + 
                ".md-list__radio-button," +
                ".md-list__switch,"+
                ".md-block__checkbox," + 
                ".md-block__radio-button," +
                ".md-block__switch",
            )
        ) {
            return;
        }
        const data = event.currentTarget.data;
        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection && event.ctrlKey) {
            this.selectToggle(data);
        } else if (this.singleSelection) {
            this.select(data);
        }
        this.requestUpdate();
        this.emit("onListItemClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleListKeydown(event) {
        const activeElement = document.activeElement === event.target.closest(".md-list__item");
        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();
            this.requestUpdate();
        }
        this.emit("onListKeydown", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.select(data);
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput", event);
    }
}
customElements.define("md-list", MDListComponent);
export { MDListComponent };
