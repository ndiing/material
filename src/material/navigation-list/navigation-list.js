import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 *
 * @extends MdComponent
 * @fires onNavigationListItemClick
 * @element md-navigation-list
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
     *
     */
    constructor() {
        super();
        this.items = [];
        this.store = new Store();
        this.itemsStore = [];
    }

    /**
     *
     * @private
     * @param {Any} [item]
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
     *
     * @private
     */
    render() {
        return this.items.map((item) => this.renderNavigationListItem(item));
    }

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list");
        this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
    }

    /**
     *
     * @private
     * @param {Any} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.store.load(this.items);
            this.requestUpdateStore();
        }
    }

    /**
     *
     * @param {Any} [data]
     */
    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }

    /**
     *
     */
    requestUpdateStore() {
        const result = this.store.get({});
        this.itemsStore = result.data;
        this.requestUpdate();
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleNavigationListItemClick(event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();
        this.emit("onNavigationListItemClick", { event });
    }
}
customElements.define("md-navigation-list", MdNavigationListComponent);
export { MdNavigationListComponent };
