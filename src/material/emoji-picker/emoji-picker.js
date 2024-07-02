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
 * @tagname md-emoji-picker
 * @fires MDEmojiPickerComponent#onEmojiPickerTabsItemClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerViewportVirtualScroll - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerTextFieldNativeInput - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGridColumnClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonPrevClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonNextClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonLabelClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonCancelClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonOkClick - {{desc}}
 */
class MDEmojiPickerComponent extends MDSheetComponent {
    
    /**
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
    get body() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    
    /**
     * {{desc}}
     */
    set body(value) {
        this._body = value;
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
        // frequently used
        this.rows = [];

        this.popper = new MDPopperController(this, {});
    }

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

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.off("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    handleEmojiPickerTabsItemClick(event) {
        const data = event.currentTarget.data;

        const { viewport } = this.virtual;

        viewport.scrollTop = data.rowIndex * 48 + data.index * 48;

        this.updateEmojiPickerTabsIndicator(data);

        this.emit("onEmojiPickerTabsItemClick", event);
    }

    
    /**
     * {{desc}}
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

        // viewport.style
        scrollbar.style.height = scrollbarHeight + "px";
        container.style.transform = `translate3d(0,${translateY}px,0)`;

        this.emit("onEmojiPickerViewportVirtualScroll", event);
    }

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

    handleEmojiPickerGridColumnClick(event) {
        this.emit("onEmojiPickerGridColumnClick", event);
    }

    
    /**
     * {{desc}}
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

    handleCardIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            this.handleEmojiPickerIconButtonPrevClick(event);
        } else if (event.currentTarget.name == "next") {
            this.handleEmojiPickerIconButtonNextClick(event);
        }
        this.emit("onEmojiPickerIconButtonClick", event);
    }

    handleCardButtonClick(event) {
        if (event.currentTarget.name == "label") {
            this.handleEmojiPickerButtonLabelClick(event);
        } else if (event.currentTarget.name == "cancel") {
            this.handleEmojiPickerButtonCancelClick(event);
        } else if (event.currentTarget.name == "ok") {
            this.handleEmojiPickerButtonOkClick(event);
        }
        this.emit("onEmojiPickerButtonClick", event);
    }

    handleEmojiPickerIconButtonPrevClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonPrevClick", event);
    }

    handleEmojiPickerIconButtonNextClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonNextClick", event);
    }

    handleEmojiPickerButtonLabelClick(event) {
        this.emit("onEmojiPickerButtonLabelClick", event);
    }

    handleEmojiPickerButtonCancelClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerButtonCancelClick", event);
    }

    handleEmojiPickerButtonOkClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerButtonOkClick", event);
    }

    
    /**
     * {{desc}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    
    /**
     * {{desc}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    
    /**
     * {{desc}}
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
