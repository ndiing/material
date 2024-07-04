import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * A custom list component that extends MDComponent to display a list of items with various selection modes.
 * @extends MDComponent
 * @tagname md-list
 * @fires MDListComponent#onListItemClick - Fires when a list item is clicked.
 * @fires MDListComponent#handleListKeydown - Fires when a keydown event occurs on the list.
 * @fires MDListComponent#onListItemSelectionStart - Fires when a list item selection starts.
 * @fires MDListComponent#onListItemSelection - Fires when a list item is selected.
 * @fires MDListComponent#onListItemSelectionEnd - Fires when a list item selection ends.
 * @fires MDListComponent#onListItemCheckboxNativeInput - Fires when a checkbox native input event occurs on a list item.
 * @fires MDListComponent#onListItemRadioButtonNativeInput - Fires when a radio button native input event occurs on a list item.
 * @fires MDListComponent#onListItemSwitchNativeInput - Fires when a switch native input event occurs on a list item.
 */
class MDListComponent extends MDComponent {
    /**
     * @property {Array} list - The list of items to be rendered in the list component.
     * @property {Boolean} selection - Enables or disables selection mode.
     * @property {Boolean} rangeSelection - Enables or disables range selection mode.
     * @property {Boolean} multiSelection - Enables or disables multi-selection mode.
     * @property {Boolean} singleSelection - Enables or disables single-selection mode.
     * @property {Boolean} allSelection - Enables or disables the ability to select all items.
     */
    static properties = {
        list: { type: Array },

        selection: { type: Boolean },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    constructor() {
        super();
    }

    renderListItem(item) {
        /* prettier-ignore */
        return html`
            <md-list-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
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

    render() {
        /* prettier-ignore */
        return this.list?.map(item => this.renderListItem(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.on("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this.handleListKeydown);
    }

    /**
     * Selects a single item in the list.
     * @param {Object} data - The data item to select.
     */
    select(data) {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item === data;
        }
        this.endIndex = this.list.indexOf(data);
    }

    /**
     * Toggles the selection state of an item in the list for multi-selection.
     * @param {Object} data - The data item to toggle selection.
     */
    multiSelect(data) {
        data.selected = !data.selected;

        if (this.selectionMode && this.list.findIndex((item) => item.selected) === -1) {
            this.selectionMode = false;
        }
    }

    /**
     * Selects a range of items in the list from the last selected item to the current item.
     * @param {Object} data - The data item to start the range selection.
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
     * Selects all items in the list.
     */
    selectAll() {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = true;
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox," + ".md-list__radio-button," + ".md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if ((this.multiSelection && event.ctrlKey) || this.selectionMode) {
            this.multiSelect(data);
        } else if (this.singleSelection) {
            this.select(data);
        }

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    handleListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key === "a") {
            this.selectAll();

            this.requestUpdate();
        }

        this.emit("handleListKeydown", event);
    }

    handleListItemSelectionStart(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        this.select(data);

        this.requestUpdate();

        this.emit("onListItemSelectionStart", event);
    }

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

    async handleListItemSelectionEnd(event) {
        if (!this.selection) {
            return;
        }

        window.requestAnimationFrame(() => {
            this.selectionMode = true;
        });

        this.emit("onListItemSelectionEnd", event);
    }

    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemCheckboxNativeInput", event);
    }

    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;

        this.select(data);
        this.requestUpdate();

        this.emit("onListItemRadioButtonNativeInput", event);
    }

    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemSwitchNativeInput", event);
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
