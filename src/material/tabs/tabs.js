import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDTabsComponent represents a set of tabs.
 *
 * @extends MDComponent
 * @fires MDTabsComponent#onTabClick
 */
class MDTabsComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Array} items - An array of tab items.
     * @property {String} type - The type of tabs (e.g., "primary", "secondary").
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /**
     * Returns the tab indicator element.
     *
     * @returns {HTMLElement} - The tab indicator element.
     * @private
     */
    get tabIndicator() {
        return this.querySelector(".md-tabs__indicator");
    }

    /**
     * Constructor for MDTabsComponent.
     */
    constructor() {
        super();

        // Default items to an empty array
        this.items = [];
    }

    /**
     * Called when the element is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    /**
     * Called when the element is disconnected from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tabs");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     * @override
     */
    firstUpdated(changedProperties) {}

    /**
     * Called when the component is updated.
     *
     * @param {Map} changedProperties - Map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has("type")) {
            ["primary", "secondary"].forEach((type) => {
                this.classList.remove(`md-tabs--${type}`);
            });
            if (this.type) {
                this.type.split(" ").forEach((type) => {
                    this.classList.add(`md-tabs--${type}`);
                });
            }
        }
    }

    /**
     * Renders the tabs and the tab indicator.
     *
     * @returns {TemplateResult} - The rendered template.
     * @override
     */
    render() {
        return html`
            ${this.items.map((item) => html`
                <md-tab 
                    .item="${item}" 
                    .icon="${item.icon}" 
                    .label="${item.label}" 
                    .badge="${item.badge}" 
                    .activated="${item.activated}" 
                    @click="${this.handleTabClick}" 
                    @onTabActivated="${this.handleTabActivated}"
                ></md-tab>
            `)}
            <div class="md-tabs__indicator"></div>
        `;
    }

    /**
     * Handles a click event on a tab.
     *
     * @param {Event} event - The click event.
     * @fires MDTabsComponent#onTabClick
     */
    handleTabClick(event) {
        const tab = event.currentTarget;
        const tabItem = tab.item;

        // Update the 'activated' property for each tab item
        for (const item of this.items) {
            item.activated = item === tabItem;
        }

        this.requestUpdate();


        this.emit("onTabClick", { event });
    }

    /**
     * Handles the 'onTabActivated' event.
     *
     * @param {Event} event - The 'onTabActivated' event.
     */
    handleTabActivated(event) {
        const tab = event.detail.tab;
        const tabWrapper = tab.querySelector(".md-tab__wrapper");

        let left = tab.offsetLeft;
        let width = tab.clientWidth;

        if (this.type === "primary") {
            left = tab.offsetLeft + tabWrapper.offsetLeft;
            width = tabWrapper.clientWidth;
        }

        // Set the position and width of the tab indicator
        this.tabIndicator.style.setProperty("left", `${left}px`);
        this.tabIndicator.style.setProperty("width", `${width}px`);
    }

  
}

// Define the custom element
customElements.define("md-tabs", MDTabsComponent);

// Export the component
export { MDTabsComponent };
