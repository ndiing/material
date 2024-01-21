import { LitElement, html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { MdStateController } from "../state/state";

function notNull(value) {
    return value !== undefined && value !== null;
}

function notEmpty(value) {
    return notNull(value) && value !== "";
}

class MdListItemComponent extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            supportingText: { type: String },
            badge: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
            activated: { type: Boolean, reflect: true },
            expanded: { type: Boolean, reflect: true },
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
        /*prettier-ignore*/
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
        const leadingItems = [
            ...((!this.view && Array.from({ length: this.level > 0 ? 1 : 0 }, () => ({ item: "md-icon" }))) || []),
            ...((this.view === "tree" &&
                Array.from({ length: this.level + 2 }, (v, k) => ({
                    item: "md-icon",
                    ...(k === this.level && { icon: this.item.children?.length ? (this.expanded ? "arrow_drop_down" : "arrow_right") : "" }),
                    ...(k === this.level + 1 && { icon: this.item.children?.length ? (this.expanded ? "folder_open" : "folder") : "draft" }),
                }))) ||
                []),
            ...((this.view === "level" && (this.item.level > 0 || this.item.parents?.length) && [{ item: "md-icon", ...(this.item.parents?.length && { icon: "arrow_back" }) }]) || []),
        ].concat(this.leadingItems);
        const trailingItems = []
            .concat(this.trailingItems)
            .concat([
                //
                ...((!this.view && this.item.children?.length && [{ item: "md-icon", icon: this.expanded ? "arrow_drop_up" : "arrow_drop_down" }]) || []),
                ...((this.view === "level" && this.item.children?.length && !this.item.parents?.length && [{ item: "md-icon", icon: "arrow_forward" }]) || []),
            ])
            .filter(Boolean);
        /*prettier-ignore*/
        return html`
            ${leadingItems?.length ? html`<div class="md-list__start">${leadingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${this.label || this.supportingText ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} 
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing} 
            ${trailingItems?.length ? html`<div class="md-list__end">${trailingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${notNull(this.badge) ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing} 
        `;
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

class MdListComponent extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
            ui: { type: String },
            type: { type: String },
            view: { type: String },
            activatable: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.items = [];
        this.level = 0;
    }

    createRenderRoot() {
        return this;
    }

    hasListItem(item = {}) {
        return item.label || item.supportingText || item.leadingItems?.length || item.trailingItems?.length;
    }

    render() {
        /*prettier-ignore*/
        return this.items.map((item) => html`
            <md-list-row>
                ${item.headline ? html`<div class="md-list__headline">${item.headline}</div>` : nothing}
                ${this.hasListItem(item) ? html`
                    <md-list-item 
                        .item="${item}" 
                        .label="${item.label}" 
                        .supportingText="${item.supportingText}" 
                        .badge="${item.badge}" 
                        .leadingItems="${item.leadingItems}" 
                        .trailingItems="${item.trailingItems}" 
                        .activated="${item.activated}"
                        .expanded="${item.expanded}"
                        .view="${this.list.view}"
                        .level="${this.level}"
                        @click="${this.onListItemClick}"></md-list-item>
                ` : nothing}
                ${item.divider ? html`<div class="md-list__divider"></div>` : nothing}
                ${item.children?.length&&item.expanded&&this.view!=='level' ? html`<md-list 
                    class="md-list__children"
                    .items="${item.children}"
                    .level="${this.level+1}"
                    ></md-list>` : nothing}
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

    get list() {
        let el = this.closest(".md-list");
        do {
            if (el.level === 0) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    }

    onListItemClick(event) {
        const listItem = event.currentTarget;
        if (this.list.activatable) {
            if (this.list.type === "multi-select") {
                listItem.item.activated = !listItem.item.activated;
            } else {
                if (listItem.item.children?.length) {
                    listItem.item.expanded = !listItem.item.expanded;
                }
                const activateListItem = (items, level = 0) => {
                    for (const item of items) {
                        if (item.level === undefined) {
                            item.level = level;
                        }
                        item.activated = item === listItem.item;
                        if (item.children?.length) {
                            activateListItem(item.children, item.level + 1);
                            item.children = [...item.children];
                        }
                    }
                };
                activateListItem(this.list.items);
                if (this.view === "level") {
                    if (listItem.item.parents?.length) {
                        this.list.items = [...listItem.item.parents];
                        listItem.item.parents = [];
                    } else if (listItem.item.children?.length) {
                        listItem.item.parents = this.items;
                        this.list.items = [listItem.item, ...listItem.item.children];
                    }
                } else {
                    this.list.items = [...this.list.items];
                }
            }
            this.list.requestUpdate();
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
