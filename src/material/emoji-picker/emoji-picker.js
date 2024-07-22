import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { MDStore } from "../store/store.js";
import data from "../../assets/emojis.json";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-emoji-picker
 * @fires MDEmojiPickerComponent#onSheetShow - {{desc}}
 * @fires MDEmojiPickerComponent#onSheetClose - {{desc}}
 * @fires MDEmojiPickerComponent#onSheetScrimClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerTextFieldNativeInput - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerTabsItemClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerViewportVirtualScroll - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGridColumnClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonCancelClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonOkClick - {{desc}}
 */
class MDEmojiPickerComponent extends MDSheetComponent {
    
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     * @property {Object} tabs - {{desc}}
     * @property {Array} rows - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        tabs: { type: Object },
        rows: { type: Array },
    };
    
    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [this.renderMain()];
    }
    
    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }
    
    /**
     * {{desc}}
     */
    get leadingActions() {
        return [{ name: "label", component: "text-field", icon: "search", placeholder: "Search", type: "search", variant: "rounded" }];
    }
    
    /**
     * {{desc}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }
    
    /**
     * {{desc}}
     */
    get emojiPickerTabs() {
        return this.querySelector(".md-emoji-picker__tabs");
    }
    
    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
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
        this.popper = new MDPopperController(this, {});
    }
    
    /**
     * {{desc}}
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
                            ${item.emoji?html`<md-emoji class="md-emoji-picker__tabs-emoji" .emoji="${item.emoji}"></md-emoji>`:nothing}
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
                                            ${item.emoji?html`<md-emoji class="md-emoji-picker__grid-emoji" .emoji="${item.emoji}"></md-emoji>`:nothing}
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
     * {{desc}}
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
     * {{desc}}
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.off("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }
    
    /**
     * {{desc}}
     * @param {Any} data = [] - {{desc}}
     * @param {Any} tabs = {} - {{desc}}
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
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    showModal(button, options) {
        this.updatePosition(button, options);
        super.showModal();
    }
    
    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    show(button, options) {
        this.updatePosition(button, options);
        super.show();
    }
    
    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
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
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleEmojiPickerTabsItemClick(event) {
        const data = event.currentTarget.data;
        const { viewport } = this.virtual;
        viewport.scrollTop = data.rowIndex * 48 + data.index * 48;
        this.updateEmojiPickerTabsIndicator(data);
        this.emit("onEmojiPickerTabsItemClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleEmojiPickerGridColumnClick(event) {
        this.emit("onEmojiPickerGridColumnClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleEmojiPickerButtonCancelClick(event) {
        this.emit("onEmojiPickerButtonCancelClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleEmojiPickerButtonOkClick(event) {
        this.emit("onEmojiPickerButtonOkClick", event);
    }
}
customElements.define("md-emoji-picker", MDEmojiPickerComponent);
export { MDEmojiPickerComponent };
