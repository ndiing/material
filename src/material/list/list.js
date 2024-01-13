import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";
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
     * @property {String} label - The main label for the list item.
     * @property {String} supportingText - Additional text to support the main label.
     * @property {Array} leadingItems - An array of leading items (e.g., icons, avatars).
     * @property {Array} trailingItems - An array of trailing items (e.g., icons, checkboxes).
     * @property {Boolean} activated - A boolean reflecting the activated state of the list item.
     */
    static get properties() {
        return {
            label: { type: String },
            supportingText: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MDListItemComponent.
     */
    constructor() {
        super();
        this.leadingItems = [];
        this.trailingItems = [];
    }

    // prettier-ignore
    renderItem(item={}){
        return choose(item.component,[
            ['avatar',() => html`<md-image class="md-list__avatar" .src="${item.src}" .alt="${item.alt}" .shape="${true}"></md-image>`], // avatar
            ['image',() => html`<md-image class="md-list__image" .src="${item.src}" .alt="${item.alt}"></md-image>`], // image
            ['video',() => html`<md-image class="md-list__video" .src="${item.src}" .alt="${item.alt}" .ratio="${"16/9"}"></md-image>`], // video
            ['icon',() => html`<md-icon class="md-list__icon">${item.icon}</md-icon>`],
            ['checkbox',() => html`<md-checkbox class="md-list__checkbox" .name="${item.name}" .checked="${item.checked??this.activated}"></md-checkbox>`],
            ['radio-button',() => html`<md-radio-button class="md-list__radio-button" .name="${item.name}" .checked="${item.checked??this.activated}"></md-radio-button>`],
            ['switch',() => html`<md-switch class="md-list__switch" .name="${item.name}" .checked="${item.checked??this.activated}"></md-switch>`],
            ['supporting-text',() => html`<div class="md-list__supporting-text">${item.supportingText}</div>`],
        ],() => nothing)
    }

    /**
     * Renders the MDListItemComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.leadingItems?.length?html`<div class="md-list__start">${this.leadingItems.map(item=>this.renderItem(item))}</div>`:nothing}
            ${this.label||this.supportingText?html`
                <div class="md-list__center">
                    ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-list__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${this.trailingItems?.length?html`<div class="md-list__end">${this.trailingItems.map(item=>this.renderItem(item))}</div>`:nothing}
        `
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-list__item");

        this.mdState = new MDState(this, {});
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");

        this.mdState.destroy();
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
     * @property {Array} items - An array of items to be displayed in the list.
     * @property {String} size - The size style of the list ("one-line", "two-line", "three-line").
     * @property {String} type - The type of the list ("single-select", "multi-select").
     * @property {Boolean} activatable - Indicates whether the list items are activatable.
     */
    static get properties() {
        return {
            items: { type: Array },
            size: { type: String },
            type: { type: String },
            activatable: { type: Boolean },
        };
    }

    /**
     * Constructor for MDListComponent.
     */
    constructor() {
        super();
        this.items = [];
        this.size = "one-line";
        this.type = "single-select";
    }

    /**
     * Renders the MDListComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.items.map(item=>html`
                <md-list-row>
                    <md-list-item
                        .item="${item}"
                        .label="${item.label}"
                        .supportingText="${item.supportingText}"
                        .leadingItems="${item.leadingItems}"
                        .trailingItems="${item.trailingItems}"
                        .activated="${item.activated}"
                        @click="${this.handleListItemClick}"
                    ></md-list-item>
                </md-list-row>
            `)}
        `
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
    updated(_changedProperties) {
        if (_changedProperties.has("size")) {
            ["one-line", "two-line", "three-line"].forEach((size) => {
                this.classList.remove("md-list--" + size);
            });
            if (this.size) this.classList.add("md-list--" + this.size);
        }
    }

    /**
     * Handles the click event on a list item.
     * @param {Event} event - The click event.
     * @fires MDListItemComponent#handleListItemClick
     */
    handleListItemClick(event) {
        const listItem = event.currentTarget;

        // const classNames=[
        //     'md-list__checkbox',
        //     'md-list__radio-button',
        //     'md-list__switch',
        // ]
        // const isAction = classNames.some(className => event.target.closest('.'+className))

        if (this.activatable) {
            if (this.type === "multi-select") listItem.item.activated = !listItem.item.activated;
            else for (const item of this.items) item.activated = item === listItem.item;
            this.requestUpdate();
        }


        this.emit("handleListItemClick", { event, listItem });
    }
}

customElements.define("md-list", MDListComponent);

export { MDListItemComponent, MDListRowComponent, MDListComponent };
