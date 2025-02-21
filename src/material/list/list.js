import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";
import { Virtual } from "../virtual/virtual";
import { styleMap } from "lit/directives/style-map.js";
/**
 * MDListComponent class responsible for displaying a list.
 * @extends MdComponent
 * @element md-list
 */
class MDListComponent extends MdComponent {
    /**
     * The properties of the component.
     * @property {Array} [items=[]] - The items to display in the list.
     * @property {string} [type="single-select"] - The selection type: "single-select" or "multi-select".
     * @property {Object} [fieldMap={}] - The field mapping for the items.
     * @property {Object} [rippleOptions={}] - The ripple options for the list items.
     * @property {Object} [virtualOptions={}] - The virtual options for the list items.
     * @property {boolean} [virtualize=false] - Indicates if the list should use virtualization.
     */
    static properties = {
        type: { type: String },
        items: { type: Array },
        rippleOptions: { type: Object },
        fieldMap: { type: Object },
        storeOptions: { type: Object },
        itemsStore: { type: Array },
        virtualize: { type: Boolean },
        virtualOptions: { type: Object },
        itemsVirtual: { type: Array },
    };

    /**
     * The available selection types.
     * @type {Array<string>}
     */
    types = ["single-select", "multi-select"];

    /**
     * Creates an instance of the MDListComponent class.
     */
    constructor() {
        super();

        this.type = "single-select";
        this.fieldMap = {};
        this.storeOptions = {};
        this.virtualOptions = {
            item: "md-list-row",
            rowHeight: 56,
        };
    }

    getValue(item, name) {
        return item[this.fieldMap[name] || name];
    }

    styleListItem(item,index){
        return {
            '--md-comp-list-item-index': index,
        }
    }

    // /**
    //  * Renders a list item.
    //  * @param {Object} item - The item data.
    //  * @returns {TemplateResult} The rendered template for the list item.
    //  */
    renderListItem(item,index) {
        /* prettier-ignore */
        return html`
            <md-list-row>
                <md-list-item
                    .data="${item}"
                    style="${styleMap(this.styleListItem(item,index))}"
                    .avatar="${ifDefined(this.getValue(item, "avatar"))}"
                    .image="${ifDefined(this.getValue(item, "image"))}"
                    .video="${ifDefined(this.getValue(item, "video"))}"
                    .icon="${ifDefined(this.getValue(item, "icon"))}"
                    .label="${ifDefined(this.getValue(item, "label"))}"
                    .sublabel="${ifDefined(this.getValue(item, "sublabel"))}"
                    .text="${ifDefined(this.getValue(item, "text"))}"
                    .leadingCheckbox="${ifDefined(this.getValue(item, "leadingCheckbox"))}"
                    .leadingRadioButton="${ifDefined(this.getValue(item, "leadingRadioButton"))}"
                    .leadingSwitch="${ifDefined(this.getValue(item, "leadingSwitch"))}"
                    .trailingCheckbox="${ifDefined(this.getValue(item, "trailingCheckbox"))}"
                    .trailingRadioButton="${ifDefined(this.getValue(item, "trailingRadioButton"))}"
                    .trailingSwitch="${ifDefined(this.getValue(item, "trailingSwitch"))}"
                    .selected="${ifDefined(this.getValue(item, "selected"))}"
                    .disabled="${ifDefined(this.getValue(item, "disabled"))}"
                    .routerLink="${ifDefined(this.getValue(item, "routerLink"))}"
                    .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                    .badge="${ifDefined(this.getValue(item, "badge"))}"
                    @click="${this.handleListItemClick}"
                    @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                    @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                    @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                ></md-list-item>
            </md-list-row>
        `;
    }

    // /**
    //  * Renders the list.
    //  * @returns {TemplateResult} The rendered template for the list.
    //  */
    render() {
        return this.itemsVirtual?.map((item,index) => this.renderListItem(item,index));
    }

    // /**
    //  * Called when the element is connected to the DOM.
    //  * Adds the 'md-list' class and initializes virtual scrolling if enabled.
    //  */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
        this.style.setProperty("--md-comp-list-icon-animation", "none");
        this.handleListWindowKeydown = this.handleListWindowKeydown.bind(this);
        window.addEventListener("keydown", this.handleListWindowKeydown);
        this.store = new Store();

        if (this.virtualize) {
            this.handleListVirtualScroll = this.handleListVirtualScroll.bind(this);
            this.addEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual = new Virtual(this, this.virtualOptions);

            if (this.hasConnected) {
                this.load();
            }
        }
    }

    // /**
    //  * Called when the element is disconnected from the DOM.
    //  * Removes the virtual scrolling event listener and destroys the virtual instance if enabled.
    //  */
    async disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener("keydown", this.handleListWindowKeydown);

        if (this.virtualize) {
            this.removeEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual.destroy();
        }
        this.hasConnected = true;
    }

    // /**
    //  * Called when the properties of the component are updated.
    //  * @param {Map} changedProperties - The properties that changed.
    //  */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("items")) {
            await this.updateComplete;

            this.load();
        }
    }

    load() {
        this.store.load(this.items);
        const result = this.store.get(this.storeOptions);
        this.itemsStore = result.data;

        if (this.virtualize) {
            this.virtualOptions.data = this.itemsStore;
            this.virtual.load(this.virtualOptions);
        } else {
            this.itemsVirtual = this.itemsStore;
        }
    }

    selectByOffset(offset) {
        const startIndex = this.itemsStore.findIndex((item) => item.selected);
        const total = this.itemsStore.length;
        const currentIndex = offset < 0 ? Math.max(startIndex + offset, 0) : Math.min(startIndex + offset, total - 1);
        this.itemsStore.forEach((item, index) => {
            item.selected = index === currentIndex;
        });
        this.requestUpdate();
        return currentIndex;
    }

    scrollToIndex(currentIndex, block = "nearest") {
        const rowHeight = this.virtualOptions.rowHeight;

        if (block === "nearest") {
            const viewportHeight = Math.floor(this.clientHeight / rowHeight) * rowHeight;

            if (currentIndex * rowHeight < this.scrollTop) {
                this.scrollTop = Math.max(currentIndex * rowHeight, 0);
            } else if ((currentIndex + 1) * rowHeight > viewportHeight + this.scrollTop) {
                this.scrollTop = (currentIndex + 1) * rowHeight - viewportHeight;
            }
        } else if (block === "center") {
            const rowTotal = Math.floor(this.clientHeight / rowHeight);
            const middleIndex = Math.floor((rowTotal - 1) / 2);
            this.scrollTop = (currentIndex - middleIndex) * rowHeight;
        } else if (block === "start") {
            this.scrollTop = currentIndex * rowHeight;
        } else if (block === "end") {
            const rowTotal = Math.floor(this.clientHeight / rowHeight);
            this.scrollTop = (currentIndex - (rowTotal - 1)) * rowHeight;
        }
    }

    async handleListWindowKeydownArrowUp(event) {
        event.preventDefault();
        const currentIndex = this.selectByOffset(-1);
        this.scrollToIndex(currentIndex);
        /**
         * @event onListWindowKeydownArrowUp
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onListWindowKeydownArrowUp", { event });
    }

    async handleListWindowKeydownArrowDown(event) {
        event.preventDefault();
        const currentIndex = this.selectByOffset(1);
        this.scrollToIndex(currentIndex);
        /**
         * @event onListWindowKeydownArrowDown
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onListWindowKeydownArrowDown", { event });
    }

    async handleListWindowKeydownEnter(event) {
        event.preventDefault();
        /**
         * @event onListWindowKeydownEnter
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onListWindowKeydownEnter", { event });
    }

    handleListWindowKeydown(event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowUp") {
                this.handleListWindowKeydownArrowUp(event);
            } else if (event.key === "ArrowDown") {
                this.handleListWindowKeydownArrowDown(event);
            } else if (event.key === "Enter") {
                this.handleListWindowKeydownEnter(event);
            }
            /**
             * @event onListWindowKeydown
             * @type {Object}
             * @property {Object} event
             */
            this.emit("onListWindowKeydown", { event });
        }
    }

    handleListVirtualScroll(event) {
        this.itemsVirtual = event.detail.data;
    }

    // /**
    //  * Handles the click event on a list item.
    //  * @param {Event} event - The click event.
    //  */
    handleListItemClick(event) {
        const action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");

        if (action) {
            return;
        }
        this.style.removeProperty("--md-comp-list-icon-animation");
        const data = event.currentTarget.data;

        if (this.type === "single-select") {
            this.itemsStore.forEach((item) => {
                item.selected = item === data;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        /**
         * @event onListItemClick
         * @property {Object} event - The list item click event.
         */
        this.emit("onListItemClick", { event });
    }

    // /**
    //  * Handles the native input event on a list item checkbox.
    //  * @param {Event} event - The native input event.
    //  */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        /**
         * @event onListItemCheckboxNativeInput
         * @property {Object} event
         */
        this.emit("onListItemCheckboxNativeInput", { event });
    }

    // /**
    //  *
    //  * @param {*} event
    //  */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.itemsStore.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        /**
         * @event onListItemRadioButtonNativeInput
         * @property {Object} event
         */
        this.emit("onListItemRadioButtonNativeInput", { event });
    }

    // /**
    //  *
    //  * @param {*} event
    //  */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        /**
         * @event onListItemSwitchNativeInput
         * @property {Object} event
         */
        this.emit("onListItemSwitchNativeInput", { event });
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
