import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @fires MdNavigationListComponent#onNavigationListItemClick - {"detail":{"event":{}}}
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
    }

    /**
     * @private
     * @param {String} [item]
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
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list");
        this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleNavigationListItemClick(event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();
        this.emit("onNavigationListItemClick", { event });
    }

    /**
     * @param {Object} [data]
     */
    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }
}
customElements.define("md-navigation-list", MdNavigationListComponent);
export { MdNavigationListComponent };
