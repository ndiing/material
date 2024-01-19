import { LitElement, html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { MdStateController } from "../state/state";

function notNull(value) {
    return value !== undefined && value !== null;
}

function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * `MdListItemComponent` is a custom LitElement representing a list item.
 *
 * @extends LitElement
 */

class MdListItemComponent extends LitElement {
    /**
     * @property {String} label - The label for the list item.
     * @property {String} supportingText - The supporting text for the list item.
     * @property {Array} leadingItems - An array of leading items.
     * @property {Array} trailingItems - An array of trailing items.
     * @property {Boolean} activated - Indicates whether the list item is activated.
     */
    static get properties() {
        return {
            label: { type: String },
            supportingText: { type: String },
            badge: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
            activated: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.leadingItems = [];
        this.trailingItems = [];
    }

    createRenderRoot() {
        return this;
    }

    renderItem(item = {}) {
        // prettier-ignore
        return choose(
            item.item,
            [
                ["md-avatar", () => html`<md-image class="md-list__avatar" .src="${item.src}" .alt="${item.alt}" .ratio="${item.ratio}" .shape="${true}"></md-image>`],
                ["md-image", () => html`<md-image class="md-list__image" .src="${item.src}" .alt="${item.alt}" .ratio="${item.ratio}" .shape="${item.shape}"></md-image>`],
                ["md-video", () => html`<md-image class="md-list__video" .src="${item.src}" .alt="${item.alt}" .ratio="${"16/9"}" .shape="${item.shape}"></md-image>`],
                ["md-icon", () => html`<md-icon class="md-list__icon">${item.icon}</md-icon>`],
                ["md-checkbox", () => html`<md-checkbox class="md-list__checkbox" .checked="${item.checked ?? this.activated}"></md-checkbox>`],
                ["md-radio-button", () => html`<md-radio-button class="md-list__radio-button" .checked="${item.checked ?? this.activated}"></md-radio-button>`],
                ["md-switch", () => html`<md-switch class="md-list__switch" .checked="${item.checked ?? this.activated}"></md-switch>`],
                ["md-supporting-text", () => html`<div class="md-list__supporting-text">${item.supportingText}</div>`],
            ],
            () => nothing
        );
    }

    render() {
        return html` ${this.leadingItems?.length ? html`<div class="md-list__start">${this.leadingItems.map((item) => this.renderItem(item))}</div>` : nothing} ${this.label || this.supportingText ? html` <div class="md-list__center">${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}</div> ` : nothing} ${this.trailingItems?.length ? html`<div class="md-list__end">${this.trailingItems.map((item) => this.renderItem(item))}</div>` : nothing} ${notNull(this.badge) ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing} `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__item");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {});

        if (this.label) {
            this.classList.remove("md-list__item--no-label");
        } else {
            this.classList.add("md-list__item--no-label");
        }
    }

    updated(_changedProperties) {}
}

customElements.define("md-list-item", MdListItemComponent);

/**
 * `MdListRowComponent` is a custom LitElement representing a list row.
 *
 * @extends LitElement
 */
class MdListRowComponent extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__row");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__row");
    }

    firstUpdated() {}

    updated(_changedProperties) {}
}

customElements.define("md-list-row", MdListRowComponent);

/**
 * `MdListComponent` is a custom LitElement representing a list.
 *
 * @extends LitElement
 */
class MdListComponent extends LitElement {
    /**
     * @property {Array} items - An array of items to be displayed in the list.
     * @property {String} ui - The UI style of the list ('one-line', 'two-line', 'three-line').
     * @property {String} type - The type of the list ('multi-select', etc.).
     * @property {Boolean} activatable - Indicates whether list items are activatable.
     */
    static get properties() {
        return {
            items: { type: Array },
            ui: { type: String },
            type: { type: String },
            activatable: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.items = [];
    }

    createRenderRoot() {
        return this;
    }

    hasListItem(item = {}) {
        return item.label || item.supportingText || item.leadingItems?.length || item.trailingItems?.length;
    }

    render() {
        // prettier-ignore
        return this.items.map((item) => html`
            <md-list-row>
                ${this.hasListItem(item) ? html`
                    <md-list-item 
                        .item="${item}" 
                        .label="${item.label}" 
                        .supportingText="${item.supportingText}" 
                        .badge="${item.badge}" 
                        .leadingItems="${item.leadingItems}" 
                        .trailingItems="${item.trailingItems}" 
                        .activated="${item.activated}"
                        @click="${this.onListItemClick}"></md-list-item>
                ` : nothing}
                ${item.divider ? html`<div class="md-list__divider"></div>` : nothing}
            </md-list-row>
        `);
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list");
    }

    firstUpdated() {}

    updated(_changedProperties) {
        if (_changedProperties.has("ui")) {
            ["one-line", "two-line", "three-line"].forEach((ui) => {
                this.classList.remove("md-list--" + ui);
            });
            if (this.ui) {
                this.classList.add("md-list--" + this.ui);
            }
        }
    }

    /**
     * Dispatched when a list item is clicked.
     *
     * @event MdListItemComponent#onListItemClick
     * @type {CustomEvent}
     * @property {Event} event - The click event.
     * @property {HTMLElement} listItem - The clicked list item.
     */
    onListItemClick(event) {
        const listItem = event.currentTarget;
        if (this.activatable) {
            if (this.type === "multi-select") {
                listItem.item.activated = !listItem.item.activated;
            } else {
                for (const item of this.items) {
                    item.activated = item === listItem.item;
                }
            }
            this.requestUpdate();
        }
        this.dispatchEvent(
            new CustomEvent("onListItemClick", {
                bubbles: true,
                cancelable: true,
                detail: { event, listItem },
            })
        );
    }
}

customElements.define("md-list", MdListComponent);

export { MdListItemComponent, MdListRowComponent, MdListComponent };
