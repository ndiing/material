import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 * @extends MdComponent
 * @element md-navigation-list
 * @fires MdNavigationListComponent#onNavigationListKeydownArrowUp
 * @fires MdNavigationListComponent#onNavigationListKeydownArrowDown
 * @fires MdNavigationListComponent#onNavigationListKeydownEnter
 * @fires MdNavigationListComponent#onNavigationListKeydown
 * @fires MdNavigationListComponent#onNavigationListItemClick
 */
class MdNavigationListComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     */
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
    };

    /**
     */
    constructor() {
        super();
        this.items = [];
        this.store = new Store();
        this.storeItems = [];
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderNavigationListItem(item) {
        return html`
            <md-navigation-list-row>
                <md-navigation-list-item
                    .data="${item}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .disabled="${ifDefined(item.disabled)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
                    @click="${this.handleNavigationListItemClick}"
                ></md-navigation-list-item>
            </md-navigation-list-row>
        `;
    }

    /**
     * @private
     */
    render() {
        return this.items.map((item) => this.renderNavigationListItem(item));
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list");
        this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
        this.handleNavigationListKeydown = this.handleNavigationListKeydown.bind(this);
        window.addEventListener("keydown", this.handleNavigationListKeydown);
    }

    /**
     * @private
     * @async
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("keydown", this.handleNavigationListKeydown);
    }

    /**
     * @private
     * @async
     * @param {Undefined} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.store.load(this.items);
            this.updateStore();
        }
    }

    /**
     */
    updateStore() {
        const result = this.store.get({});
        this.storeItems = result.data;
        this.requestUpdate();
    }

    /**
     * @async
     */
    async updateScroll() {
        await this.updateComplete;
        const navigationListItemSelected = this.querySelector("md-navigation-list-item[selected]");
        navigationListItemSelected.focus();
        navigationListItemSelected.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant",
        });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleNavigationListKeydownArrowUp(event) {
        event.preventDefault();
        const selectedIndex = this.storeItems.findIndex((item) => item.selected);
        const prevIndex = selectedIndex - 1;
        if (prevIndex === -1) return;
        this.storeItems.forEach((item, index) => {
            item.selected = index === prevIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onNavigationListKeydownArrowUp", { event });
    }

    /**
     * @private
     * @async
     * @param {Undefined} [event]
     */
    async handleNavigationListKeydownArrowDown(event) {
        event.preventDefault();
        const selectedIndex = this.storeItems.findIndex((item) => item.selected);
        const nextIndex = selectedIndex + 1;
        if (nextIndex === this.storeItems.length) return;
        this.storeItems.forEach((item, index) => {
            item.selected = index === nextIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onNavigationListKeydownArrowDown", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleNavigationListKeydownEnter(event) {
        event.preventDefault();
        const navigationListItemSelected = this.querySelector("md-navigation-list-item[selected]");
        navigationListItemSelected.click();
        this.emit("onNavigationListKeydownEnter", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleNavigationListKeydown(event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowUp") return this.handleNavigationListKeydownArrowUp(event);
            else if (event.key === "ArrowDown") return this.handleNavigationListKeydownArrowDown(event);
            else if (event.key === "Enter") return this.handleNavigationListKeydownEnter(event);
        }
        this.emit("onNavigationListKeydown", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleNavigationListItemClick(event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");
        const data = event.currentTarget.data;
        this.items.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onNavigationListItemClick", { event });
    }
}
customElements.define("md-navigation-list", MdNavigationListComponent);
export { MdNavigationListComponent };
