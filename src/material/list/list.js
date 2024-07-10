import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * {{description}}
 * @element md-list
 * @extends MDComponent
 * @fires MDListComponent#onListItemClick - {{description}}
 * @fires MDListComponent#handleListKeydown - {{description}}
 * @fires MDListComponent#onListItemSelectionStart - {{description}}
 * @fires MDListComponent#onListItemSelection - {{description}}
 * @fires MDListComponent#onListItemSelectionEnd - {{description}}
 * @fires MDListComponent#onListItemCheckboxNativeInput - {{description}}
 * @fires MDListComponent#onListItemRadioButtonNativeInput - {{description}}
 * @fires MDListComponent#onListItemSwitchNativeInput - {{description}}
 */
class MDListComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Array} list - {{description}}
     * @property {Object} map - {{description}}
     * @property {Function} format - {{description}}
     * @property {Boolean} selection - {{description}}
     * @property {Boolean} rangeSelection - {{description}}
     * @property {Boolean} multiSelection - {{description}}
     * @property {Boolean} singleSelection - {{description}}
     * @property {Boolean} allSelection - {{description}}
     */
    static properties = {
        list: { type: Array },
        map: { type: Object },
        format: { type: Function },

        selection: { type: Boolean },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.map = {
            label: "label",
            value: "value",
        };
    }

    /**
     * @private
     */
    renderListItem(item) {
        /* prettier-ignore */
        return html`
            <md-list-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined((this.format||(value=>value))(item[this.map.label]))}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .value="${ifDefined(item[this.map.value])}"
                .activated="${ifDefined(item.activated)}"
                @click="${this.handleListItemClick}"
                @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                @onSelectionStart="${this.handleListItemSelectionStart}"
                @onSelection="${this.handleListItemSelection}"
                @onSelectionEnd="${this.handleListItemSelectionEnd}"
            ></md-list-item>
        `;
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.list?.map(item => this.renderListItem(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.on("keydown", this.handleListKeydown);
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this.handleListKeydown);
    }

    /**
     * {{description}}
     */
    select(data) {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item === data;
        }
        this.endIndex = this.list.indexOf(data);
    }

    /**
     * {{description}}
     */
    selectToggle(data) {
        data.selected = !data.selected;

        if (this.selectionMode && this.list.findIndex((item) => item.selected) === -1) {
            this.selectionMode = false;
        }
    }

    /**
     * {{description}}
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.list.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = i >= this.startIndex && i <= this.endIndex;
        }

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     * {{description}}
     */
    selectAll() {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = true;
        }
    }

    /**
     * @private
     */
    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox," + ".md-list__radio-button," + ".md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if ((this.multiSelection && event.ctrlKey) || this.selectionMode) {
            this.selectToggle(data);
        } else if (this.singleSelection) {
            this.select(data);
        }

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    /**
     * @private
     */
    handleListKeydown(event) {
        const activeElement = document.activeElement === event.target.closest(".md-list__item");

        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();

            this.requestUpdate();
        }

        this.emit("handleListKeydown", event);
    }

    /**
     * @private
     */
    handleListItemSelectionStart(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        this.select(data);

        this.requestUpdate();

        this.emit("onListItemSelectionStart", event);
    }

    /**
     * @private
     */
    handleListItemSelection(event) {
        if (!this.selection) {
            return;
        }
        const data = event.detail.target.closest(".md-list__item")?.data;
        if (data && this.data !== data) {
            this.data = data;
            this.selectRange(data);
            this.requestUpdate();
        }

        this.emit("onListItemSelection", event);
    }

    /**
     * @private
     */
    async handleListItemSelectionEnd(event) {
        if (!this.selection) {
            return;
        }

        window.requestAnimationFrame(() => {
            this.selectionMode = true;
        });

        this.emit("onListItemSelectionEnd", event);
    }

    /**
     * @private
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        this.selectToggle(data);
        this.requestUpdate();

        this.emit("onListItemCheckboxNativeInput", event);
    }

    /**
     * @private
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;

        this.select(data);
        this.requestUpdate();

        this.emit("onListItemRadioButtonNativeInput", event);
    }

    /**
     * @private
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
