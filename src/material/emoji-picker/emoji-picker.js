import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { MDStore } from "../store/store.js";
import data from "../../assets/emojis.json";

/**
 * Emoji Picker Component
 * @element md-emoji-picker
 * @extends MDSheetComponent
 * @fires MDEmojiPickerComponent#onEmojiPickerTabsItemClick - Emitted when a tab item is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerViewportVirtualScroll - Emitted on virtual scroll.
 * @fires MDEmojiPickerComponent#onEmojiPickerTextFieldNativeInput - Emitted when input is provided to the search field.
 * @fires MDEmojiPickerComponent#onEmojiPickerGridColumnClick - Emitted when a grid column is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonClick - Emitted when an icon button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonClick - Emitted when a button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonPrevClick - Emitted when the previous icon button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - Emitted on emoji selection.
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonNextClick - Emitted when the next icon button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonLabelClick - Emitted when the label button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonCancelClick - Emitted when the cancel button is clicked.
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonOkClick - Emitted when the ok button is clicked.
 */
class MDEmojiPickerComponent extends MDSheetComponent {
    /**
     * Properties of the component
     * @property {Object} tabs - Tabs object containing category names and emojis.
     * @property {Array} rows - Rows of emoji data.
     */
    static properties = {
        ...MDSheetComponent.properties,
        tabs: { type: Object },
        rows: { type: Array },
    };

    /**
     * Renders the main content of the component
     * @returns {TemplateResult} - Template for the main content.
     */
    get childNodes_() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * Sets the child nodes
     * @param {Array} value - Array of child nodes.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Leading actions for the emoji picker
     * @returns {Array} - Array of leading actions.
     */
    get leadingActions() {
        return [{ name: "label", component: "text-field", icon: "search", placeholder: "Search", type: "search", variant: "rounded" }];
    }

    /**
     * Actions for the emoji picker
     * @returns {Array} - Array of actions.
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * The emoji picker tabs element
     * @returns {HTMLElement} - The tabs element.
     */
    get emojiPickerTabs() {
        return this.querySelector(".md-emoji-picker__tabs");
    }

    /**
     * Sets the emoji picker tabs element
     * @param {HTMLElement} value - The tabs element.
     */
    set emojiPickerTabs(value) {}

    constructor() {
        super();
        this.tabs = {
            "Frequently Used": "🕛",
            "Smileys and emotions": "😀",
            People: "🙇",
            "Animals and nature": "💐",
            "Food and drink": "🍓",
            "Travel and places": "🛑",
            "Activities and events": "🎉",
            Objects: "📱",
            Symbols: "🔴",
            Flags: "🏁",
        };
        this.rows = [];
        this.popper = new MDPopperController(this, {});
    }

    /**
     * Renders the main section of the emoji picker
     * @returns {TemplateResult} - Template for the main section.
     * @private
     */
    renderMain() {
        /* prettier-ignore */
        return html`
            <div class="md-emoji-picker__main">
                <div class="md-emoji-picker__tabs">
                    ${this.dataTabs.map(item=>html`
                        <div 
                            class="md-emoji-picker__tabs-item"
                            .data="${item}"
                            @click="${this.handleEmojiPickerTabsItemClick}"
                        >
                            ${item.emoji?html`<div class="md-emoji-picker__tabs-emoji md-emoji">${item.emoji}</div>`:nothing}
                        </div>
                    `)}
                </div>
                <div 
                    class="md-virtual md-emoji-picker__viewport"
                    @onVirtualScroll="${this.handleEmojiPickerViewportVirtualScroll}"
                >
                    <div class="md-virtual__scrollbar md-emoji-picker__scrollbar"></div>
                    <div class="md-virtual__container md-emoji-picker__container">
                        <div class="md-emoji-picker__grid">
                            ${this.virtualRows?.map(row=>html`
                                <div 
                                    class="md-emoji-picker__grid-row"
                                    style="${styleMap({
                                        ...(!!row[0]?.label&&{
                                            "position":"sticky",
                                            "top":(0-this.virtual.translateY)+"px",
                                            "z-index":"1",
                                        })
                                    })}"
                                >
                                    ${row.map(item=>html`
                                        <div 
                                            class="md-emoji-picker__grid-column"
                                            .data="${item}"
                                            @click="${this.handleEmojiPickerGridColumnClick}"
                                        >
                                            ${item.label?html`<div class="md-emoji-picker__grid-label">${item.label}</div>`:nothing}
                                            ${item.emoji?html`<div class="md-emoji-picker__grid-emoji md-emoji">${item.emoji}</div>`:nothing}
                                        </div>
                                    `)}
                                </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Connected callback lifecycle method
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji-picker");
        this.store = new MDStore(data);
        const { docs } = this.store.getAll();
        const { dataTabs, dataRows } = this.generateTabsAndRows(this.rows.concat(docs), this.tabs);
        this.dataTabs = dataTabs;
        this.dataRows = dataRows;
        this.virtual = new MDVirtualController(this, {
            rowTotal: this.dataRows.length,
            rowHeight: 48,
            rowBuffer: this.dataTabs.length,
        });
        this.on("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    /**
     * Disconnected callback lifecycle method
     * @private
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.off("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    /**
     * Handles emoji picker tabs item click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerTabsItemClick(event) {
        const data = event.currentTarget.data;
        const { viewport } = this.virtual;
        viewport.scrollTop = data.rowIndex * 48 + data.index * 48;
        this.updateEmojiPickerTabsIndicator(data);
        this.emit("onEmojiPickerTabsItemClick", event);
    }

    /**
     * Updates the emoji picker tabs indicator
     * @param {Object} data - Data for the indicator.
     * @private
     */
    updateEmojiPickerTabsIndicator(data) {
        if (!data) {
            return;
        }
        let left = 12 + 12 + data.index * 48;
        let scrollWidth = 12 + this.dataTabs.length * 48 + 12;
        let clientWidth = 360;
        let right = scrollWidth - left - 24 - (scrollWidth - clientWidth);
        this.emojiPickerTabs.scrollLeft = scrollWidth - clientWidth - right + 24;
        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-left", left + "px");
        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-right", right + "px");
    }

    /**
     * Handles virtual scroll event
     * @param {Event} event - Scroll event.
     * @private
     */
    async handleEmojiPickerViewportVirtualScroll(event) {
        this.virtualRows = this.dataRows.filter((row, index) => {
            return (index >= this.virtual.rowStart && index < this.virtual.rowEnd) || !!row[0]?.label;
        });
        this.requestUpdate();
        await this.updateComplete;
        const scrollTop = Math.floor(this.virtual.viewport.scrollTop / this.virtual.options.rowHeight);

        const data = this.dataTabs.find((item, index, array) => {
            if (array[index + 1]) {
                return scrollTop >= item.rowIndex && scrollTop < array[index + 1].rowIndex;
            }
            return scrollTop >= item.rowIndex;
        });

        if (this.selectedTab !== data) {
            this.selectedTab = data;
            this.updateEmojiPickerTabsIndicator(data);
        }
        this.emit("onEmojiPickerViewportVirtualScroll", event);
    }

    /**
     * Handles text field native input event
     * @param {Event} event - Input event.
     * @private
     */
    handleEmojiPickerTextFieldNativeInput(event) {
        const value = event.detail.currentTarget.value;
        const { docs } = this.store.getAll({
            shortcodes_like: value,
        });
        const data = value ? docs : this.rows.concat(docs);
        const { dataTabs, dataRows } = this.generateTabsAndRows(data, this.tabs);
        this.dataTabs = dataTabs;
        this.dataRows = dataRows;
        this.virtual.options.rowTotal = this.dataRows.length;
        this.virtual.options.rowBuffer = this.dataTabs.length;
        this.virtual.handleVirtualScroll();
        this.emit("onEmojiPickerTextFieldNativeInput", event);
    }

    /**
     * Handles emoji picker grid column click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerGridColumnClick(event) {
        this.emit("onEmojiPickerGridColumnClick", event);
    }

    /**
     * Generates tabs and rows for the emoji picker
     * @param {Array} data - Data for the emoji picker.
     * @param {Object} tabs - Tabs object.
     * @returns {Object} - Data tabs and data rows.
     * @private
     */
    generateTabsAndRows(data = [], tabs = {}) {
        const grouped = data.reduce((acc, curr) => {
            const { group = "Frequently Used", emoji } = curr;

            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push({ emoji });
            return acc;
        }, {});
        const dataTabs = [];
        const dataRows = [];
        let rowIndex = 0;
        let index = 0;

        for (const name in grouped) {
            const value = grouped[name];
            dataTabs.push({ label: name, emoji: tabs[name] || value[0].emoji, rowIndex, index });
            dataRows.push([{ label: name }]);
            ++rowIndex;
            ++index;

            for (let i = 0; i < value.length; i += 7) {
                dataRows.push(value.slice(i, i + 7));
                ++rowIndex;
            }
        }
        return { dataTabs, dataRows };
    }

    /**
     * Handles card icon button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleCardIconButtonClick(event) {
        if (event.currentTarget.name === "prev") {
            this.handleEmojiPickerIconButtonPrevClick(event);
        } else if (event.currentTarget.name === "next") {
            this.handleEmojiPickerIconButtonNextClick(event);
        }
        this.emit("onEmojiPickerIconButtonClick", event);
    }

    /**
     * Handles card button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleCardButtonClick(event) {
        if (event.currentTarget.name === "label") {
            this.handleEmojiPickerButtonLabelClick(event);
        } else if (event.currentTarget.name === "cancel") {
            this.handleEmojiPickerButtonCancelClick(event);
        } else if (event.currentTarget.name === "ok") {
            this.handleEmojiPickerButtonOkClick(event);
        }
        this.emit("onEmojiPickerButtonClick", event);
    }

    /**
     * Handles previous icon button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerIconButtonPrevClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonPrevClick", event);
    }

    /**
     * Handles next icon button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerIconButtonNextClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonNextClick", event);
    }

    /**
     * Handles label button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerButtonLabelClick(event) {
        this.emit("onEmojiPickerButtonLabelClick", event);
    }

    /**
     * Handles cancel button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerButtonCancelClick(event) {
        this.emit("onEmojiPickerButtonCancelClick", event);
    }

    /**
     * Handles ok button click event
     * @param {Event} event - Click event.
     * @private
     */
    handleEmojiPickerButtonOkClick(event) {
        this.emit("onEmojiPickerButtonOkClick", event);
    }

    /**
     * Shows the emoji picker as a modal
     * @param {HTMLElement} button - Button element that triggers the modal.
     * @param {Object} options - Options for positioning the modal.
     */
    showModal(button, options) {
        this.updatePosition(button, options);
        super.showModal();
    }

    /**
     * Shows the emoji picker
     * @param {HTMLElement} button - Button element that triggers the picker.
     * @param {Object} options - Options for positioning the picker.
     */
    show(button, options) {
        this.updatePosition(button, options);
        super.show();
    }

    /**
     * Updates the position of the emoji picker
     * @param {HTMLElement} button - Button element that triggers the picker.
     * @param {Object} options - Options for positioning the picker.
     * @private
     */
    updatePosition(button, options) {
        this.popper.setPosition(button, {
            /* prettier-ignore */
            placements: [
                "below-start","below-end","below",
                "above-start","above-end","above",
                "before-start","before-end","before",
                "after-start","after-end","after",
                "top-start","top-end","top",
                "bottom-start","bottom-end","bottom",
                "left-start","left-end","left",
                "right-start","right-end","right",
            ],
            ...options,
        });
    }
}
customElements.define("md-emoji-picker", MDEmojiPickerComponent);
export { MDEmojiPickerComponent };
