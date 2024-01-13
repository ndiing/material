import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDListItem.
 * @extends MDComponent
 */
class MDListItemComponent extends MDComponent {
    /**
     * Properties for the MDListItemComponent.
     * @returns {Object} Property configuration.
     */
    static get properties() {
        return {};
    }

    /**
     * Constructor for MDListItemComponent.
     */
    constructor() {
        super();
    }

    // prettier-ignore
    renderItem(item={}){
        return choose(item.component,[
            ['avatar',() => html``],
            ['image',() => html``],
            ['video',() => html``],
            ['icon',() => html``],
            ['checkbox',() => html``],
            ['radio-button',() => html``],
            ['switch',() => html``],
            ['supporting-text',() => html``],
        ],() => nothing)
    }

    /**
     * Renders the MDListItemComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-list-item", MDListItemComponent);


/**
 * Custom Lit web component representing an MDListRow.
 * @extends MDComponent
 */
class MDListRowComponent extends MDComponent {
    /**
     * Properties for the MDListRowComponent.
     * @returns {Object} Property configuration.
     */
    static get properties() {
        return {};
    }

    /**
     * Constructor for MDListRowComponent.
     */
    constructor() {
        super();
    }

    /**
     * Renders the MDListRowComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__row");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__row");
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-list-row", MDListRowComponent);


/**
 * Custom Lit web component representing an MDList.
 * @extends MDComponent
 */
class MDListComponent extends MDComponent {
    /**
     * Properties for the MDListComponent.
     * @returns {Object} Property configuration.
     */
    static get properties() {
        return {};
    }

    /**
     * Constructor for MDListComponent.
     */
    constructor() {
        super();
    }

    /**
     * Renders the MDListComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list");
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-list", MDListComponent);

export {
    MDListItemComponent,
    MDListRowComponent,
    MDListComponent,
};
