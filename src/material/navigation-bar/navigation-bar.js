import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";
import { MDPanelComponent } from "../panel/panel";

/**
 * `MDNavigationBarComponent` is a custom web component representing a navigation bar.
 * @extends MDPanelComponent
 */
class MDNavigationBarComponent extends MDPanelComponent {
    /**
     * Properties for MDNavigationBarComponent.
     * @static
     * @type {object}
     * @property {Array} items - An array of items for the navigation bar.
     * @property {String} ui - The UI style for the navigation bar.
     * @property {String} type - The type of the list in the navigation bar (e.g., "single-select").
     * @property {Boolean} selectable - Indicates whether the list items are selectable.
     */
    static properties = Object.assign(MDPanelComponent.properties, MDListComponent.properties, {});

    /**
     * Constructs an instance of MDNavigationBarComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-bar");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     * Renders the content of the MDNavigationBarComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <md-panel-body>
                <md-list 
                    .items="${this.items}"
                    .ui="${this.ui}"
                    .type="${this.type ?? 'single-select'}"
                    .selectable="${this.selectable ?? true}"
                    class="md-navigation-bar__list"
                    @onListItemContainerClick="${this.handleListItemContainerClick}"
                ></md-list>
            </md-panel-body>
        `;
    }

    /**
     * Handles the click event on a list item container in the navigation bar.
     * @param {CustomEvent} event - The custom event containing the list item container.
     */
    handleListItemContainerClick(event) {
        this.activatedListItemContainer = event.detail.listItemContainer;

        if (!this.activatedListItemContainer) {
            return;
        }

        this.handleListIconAnimationend = this.handleListIconAnimationend.bind(this);
        this.activatedListItemContainer.addEventListener("animationend", this.handleListIconAnimationend);

        this.activatedListIcon = this.activatedListItemContainer.querySelector(".md-list__icon");
        if (!this.activatedListIcon) {
            return;
        }
        this.activatedListIcon.style.setProperty("animation-name", "md-navigation-bar-list-item-container-activated");
    }

    /**
     * Handles the animationend event on the list icon in the navigation bar.
     */
    handleListIconAnimationend() {
        if (!this.activatedListIcon) {
            return;
        }
        this.activatedListIcon.style.removeProperty("animation-name");
        this.activatedListIcon = null;

        if (!this.activatedListItemContainer) {
            return;
        }
        this.activatedListItemContainer.removeEventListener("animationend", this.handleListIconAnimationend);
        this.activatedListItemContainer = null;
    }
}

/**
 * Define the custom element "md-navigation-bar" with MDNavigationBarComponent.
 */
customElements.define("md-navigation-bar", MDNavigationBarComponent);

export { MDNavigationBarComponent };
