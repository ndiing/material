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
 * @fires MDListComponent#onListItemSelected - {{desc}}
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

    /**
     * {{desc}}
     * @param {Any} item = {} - {{desc}}
     * @private
     */
    renderListItem(item = {}) {
        item.onListItemClick = this.handleListItemClick.bind(this);
        item.onSelected = this.handleListItemSelected.bind(this);
        item.onCheckboxNativeInput = this.handleListItemCheckboxNativeInput.bind(this);
        item.onRadioButtonNativeInput = this.handleListItemRadioButtonNativeInput.bind(this);
        item.onSwitchNativeInput = this.handleListItemSwitchNativeInput.bind(this);
        return renderListItem(item);
    }

    /**
     * {{desc}}
     * @param {Any} item = {} - {{desc}}
     * @private
     */
    renderListSection(item = {}) {
        return html`
            <div class="md-block md-list__section">
                <div class="md-block__inner">
                    <div class="md-block__group">
                        <div class="md-block__headline">${item.section}</div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * {{desc}}
     * @param {Any} item = {} - {{desc}}
     * @private
     */
    renderListDivider(item = {}) {
        item.classMap = { "md-list__divider": true };
        return renderDivider(item);
    }

    /**
     * {{desc}}
     * @private
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
     * @private
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
     * @private
     */
    handleListItemClick(event) {
        if (
            /* prettier-ignore */
            event.target.closest(
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
     * @private
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
     * @private
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
     * @private
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
     * @private
     */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleListItemSelected(event) {
        const data = event.currentTarget.data;
        this.emit("onListItemSelected", event);
    }
}
customElements.define("md-list", MDListComponent);
export { MDListComponent };
