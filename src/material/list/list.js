import { LitElement, html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { MdStateController } from "../state/state";
import { notNull } from "../script";

class MdListItemComponent extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            supportingText: { type: String },
            badge: { type: Number },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
            activated: { type: Boolean, reflect: true },
            view: { type: String },
            level: { type: Number },
            expanded: { type: Boolean, reflect: true },
            collapsibleIcons: { type: Array },
            nodeIcons: { type: Array },
            leafIcon: { type: String },
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
        let collapsibleIcons = [];
        let nodeIcons = [];
        let leafIcon = "";
        let leadingIcons = [];
        let trailingIcons = [];

        if (this.view === "tree") {
            collapsibleIcons = this.collapsibleIcons ? [].concat(this.collapsibleIcons).filter(Boolean) : ["arrow_right", "arrow_drop_down"];
            nodeIcons = this.nodeIcons ? [].concat(this.nodeIcons).filter(Boolean) : ["folder", "folder_open"];
            leafIcon = this.leafIcon ?? "draft";

            leadingIcons = leadingIcons.concat(Array.from({ length: this.level }, () => ({ item: "md-icon" })));
            if (this.item.children?.length) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: collapsibleIcons[~~this.expanded] || collapsibleIcons[0] });
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: nodeIcons[~~this.expanded] || nodeIcons[0] });
            } else {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: "" });
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: leafIcon });
            }
        } else if (this.view === "level") {
            collapsibleIcons = this.collapsibleIcons ? [].concat(this.collapsibleIcons).filter(Boolean) : ["arrow_forward", "arrow_back"];
            leafIcon = this.leafIcon ?? "";

            if (this.item.parents?.length) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: collapsibleIcons[~~this.expanded] || collapsibleIcons[0] });
            } else if (this.item.children?.length) {
                trailingIcons = trailingIcons.concat({ item: "md-icon", icon: collapsibleIcons[~~this.expanded] || collapsibleIcons[0] });
            }
            if (!this.item.parents?.length && leafIcon) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: leafIcon });
            } else if (!this.item.parents?.length && this.item.parent) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: " " });
            }
        } else {
            collapsibleIcons = this.collapsibleIcons ? [].concat(this.collapsibleIcons).filter(Boolean) : ["arrow_drop_down", "arrow_drop_up"];
            leafIcon = this.leafIcon ?? "";

            if (this.item.children?.length) {
                trailingIcons = trailingIcons.concat({ item: "md-icon", icon: collapsibleIcons[~~this.expanded] || collapsibleIcons[0] });
            }
            if (leafIcon) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: leafIcon });
            } else if (this.level > 0) {
                leadingIcons = leadingIcons.concat({ item: "md-icon", icon: " " });
            }
        }

        /*prettier-ignore*/
        return html`
            ${leadingIcons.map(item=>this.renderItem(item))}
            ${this.leadingItems?.length ? html`<div class="md-list__start">${this.leadingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${this.label || this.supportingText ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} 
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing} 
            ${this.trailingItems?.length ? html`<div class="md-list__end">${this.trailingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${trailingIcons.map(item=>this.renderItem(item))}
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
            activatable: { type: Boolean },
            view: { type: String },
        };
    }

    constructor() {
        super();
        this.items = [];
        // this.view=''
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
                        .collapsibleIcons="${item.collapsibleIcons}"
                        .nodeIcons="${item.nodeIcons}"
                        .leafIcon="${item.leafIcon}"
                        .view="${this.list.view}"
                        .level="${this.level}"
                        @click="${this.onListItemClick}"></md-list-item>
                ` : nothing}
                ${item.divider ? html`<div class="md-list__divider"></div>` : nothing}
                ${item.children?.length&&item.expanded&&this.list.view!=='level' ? html`<md-list 
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
        var el = this.closest(".md-list");

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

                const activateListItem = (items, parent) => {
                    for (const item of items) {
                        item.parent = parent;
                        if (!listItem.item.children?.length) {
                            item.activated = item === listItem.item;
                        }
                        if (item.children?.length) {
                            activateListItem(item.children, item);
                            item.children = [...item.children];
                        }
                    }
                };

                if (!this.list._items) {
                    this.list._items = this.list.items;
                }

                if (this.list.view === "level") {
                    if (listItem.item.parents?.length) {
                        this.list.items = listItem.item.parents;
                        listItem.item.parents = [];
                    } else if (listItem.item.children?.length) {
                        listItem.item.parents = this.items;
                        this.list.items = [listItem.item, ...listItem.item.children];
                    }
                }

                activateListItem(this.list._items);
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
