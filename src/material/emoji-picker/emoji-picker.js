import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { MDStore } from "../store/store.js";
import data from "../../assets/emojis.json";

/**
 * {{description}}
 * @element md-emoji-picker
 * @extends MDSheetComponent
 * @fires MDEmojiPickerComponent#onEmojiPickerTabsItemClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerViewportVirtualScroll - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerTextFieldNativeInput - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGridColumnClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonPrevClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonNextClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonLabelClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonCancelClick - {{description}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonOkClick - {{description}}
 */
class MDEmojiPickerComponent extends MDSheetComponent {
    /**
     * {{description}}
     * @property {Object} tabs - {{description}}
     * @property {Array} rows - {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        tabs: { type: Object },
        rows: { type: Array },
    };

    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * {{description}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * {{description}}
     */
    get leadingActions() {
        return [{ name: "label", component: "text-field", icon: "search", placeholder: "Search", type: "search", variant: "rounded" }];
    }

    /**
     * {{description}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * {{description}}
     */
    get emojiPickerTabs() {
        return this.querySelector(".md-emoji-picker__tabs");
    }

    /**
     * {{description}}
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
                    class="md-emoji-picker__viewport"
                    @onVirtualScroll="${this.handleEmojiPickerViewportVirtualScroll}"
                >
                    <div class="md-emoji-picker__scrollbar"></div>
                    <div class="md-emoji-picker__container">

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
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-emoji-picker");

        this.store = new MDStore(data);
        const { docs } = this.store.getAll();

        const { dataTabs, dataRows } = this.generateTabsAndRows(this.rows.concat(docs), this.tabs);
        this.dataTabs = dataTabs;
        this.dataRows = dataRows;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-emoji-picker__viewport",
            scrollbarSelector: ".md-emoji-picker__scrollbar",
            containerSelector: ".md-emoji-picker__container",

            rowTotal: this.dataRows.length,
            rowHeight: 48,
            rowBuffer: this.dataTabs.length,
        });

        this.on("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    /**
     * @private
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.off("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    /**
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
     * {{description}}
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
     * @private
     */
    handleEmojiPickerViewportVirtualScroll(event) {
        const {
            viewport,
            scrollbar,
            container,
            scrollbarHeight,
            translateY,
            rowStart,
            rowEnd,
            options: { rowHeight },
        } = this.virtual;

        this.virtualRows = this.dataRows.filter((row, index) => {
            return (index >= rowStart && index < rowEnd) || !!row[0]?.label;
        });
        this.requestUpdate();

        const scrollTop = Math.floor(viewport.scrollTop / rowHeight);
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

        scrollbar.style.height = scrollbarHeight + "px";
        container.style.transform = `translate3d(0,${translateY}px,0)`;

        this.emit("onEmojiPickerViewportVirtualScroll", event);
    }

    /**
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
     * @private
     */
    handleEmojiPickerGridColumnClick(event) {
        this.emit("onEmojiPickerGridColumnClick", event);
    }

    /**
     * {{description}}
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
     * @private
     */
    handleEmojiPickerIconButtonPrevClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonPrevClick", event);
    }

    /**
     * @private
     */
    handleEmojiPickerIconButtonNextClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonNextClick", event);
    }

    /**
     * @private
     */
    handleEmojiPickerButtonLabelClick(event) {
        this.emit("onEmojiPickerButtonLabelClick", event);
    }

    /**
     * @private
     */
    handleEmojiPickerButtonCancelClick(event) {
        this.emit("onEmojiPickerButtonCancelClick", event);
    }

    /**
     * @private
     */
    handleEmojiPickerButtonOkClick(event) {
        this.emit("onEmojiPickerButtonOkClick", event);
    }

    /**
     * {{description}}
     */
    showModal(button, options) {
        this.setPlacement(button, options);
        super.showModal();
    }

    /**
     * {{description}}
     */
    show(button, options) {
        this.setPlacement(button, options);
        super.show();
    }

    /**
     * {{description}}
     * @private
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-emoji-picker", MDEmojiPickerComponent);

export { MDEmojiPickerComponent };
