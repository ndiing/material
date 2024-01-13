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
        return {
            label: { type: String },
            supportingText: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
        };
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
            ['avatar',() => html`<md-image class="md-list__avatar" .shape="${true}" .src="${item.src}"></md-image>`],
            ['image',() => html`<md-image class="md-list__image" .src="${item.src}"></md-image>`],
            ['video',() => html`<md-image class="md-list__video" .ratio="${"16/9"}" .src="${item.src}"></md-image>`],
            ['icon',() => html`<md-icon class="md-list__icon">${item.icon}</md-icon>`],
            ['checkbox',() => html`<md-checkbox class="md-list__checkbox"></md-checkbox>`],
            ['radio-button',() => html`<md-radio-button class="md-list__radio-button"></md-radio-button>`],
            ['switch',() => html`<md-switch class="md-list__switch"></md-switch>`],
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
            <div class="md-list__start">${this.leadingItems.map(item=>this.renderItem(item))}</div>
            <div class="md-list__center">
                <div class="md-list__label">${this.label}</div>
                <div class="md-list__supporting-text">${this.supportingText}</div>
            </div>
            <div class="md-list__end">${this.trailingItems.map(item=>this.renderItem(item))}</div>
        `
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
        return {
            label: { type: String },
            supportingText: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
        };
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
        return html`
            <md-list-item
                .label="${this.label}"
                .supportingText="${this.supportingText}"
                .leadingItems="${this.leadingItems}"
                .trailingItems="${this.trailingItems}"
            ></md-list-item>
        `
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
        return {
            items: { type: Array },
            size: { type: String },
        };
    }

    /**
     * Constructor for MDListComponent.
     */
    constructor() {
        super();
        this.items = [];
        this.size = "one-line";
    }

    /**
     * Renders the MDListComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.items.map(item=>html`
                <md-list-row
                    .label="${item.label}"
                    .supportingText="${item.supportingText}"
                    .leadingItems="${item.leadingItems}"
                    .trailingItems="${item.trailingItems}"
                ></md-list-row>
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
}

customElements.define("md-list", MDListComponent);

export { MDListItemComponent, MDListRowComponent, MDListComponent };
