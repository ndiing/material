import { LitElement, html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { MdStateController } from "../state/state";

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
        /*prettier-ignore*/
        return html`
            ${this.leadingItems?.length ? html`<div class="md-list__start">${this.leadingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${this.label || this.supportingText ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} 
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing} 
            ${this.trailingItems?.length ? html`<div class="md-list__end">${this.trailingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${this.badge !== undefined && this.badge !== null ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing} 
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
        this.state = new MdStateController(this, {
            fadeout:true
        });

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
        };
    }

    constructor() {
        super();
        this.items = [];
        this.level=0
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
                        @click="${this.onListItemClick}"></md-list-item>
                ` : nothing}
                ${item.divider ? html`<div class="md-list__divider"></div>` : nothing}
                ${item.children?.length&&item.expanded ? html`<md-list 
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

    get list(){
        var el = this;

        do {
            if (el.matches('.md-list')&&el.level===0) return el;
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
                if(listItem.item.children?.length){
                    listItem.item.expanded = !listItem.item.expanded;
                }

                const activateListItem = (items) => {
                    for (const item of items) {
                        if(!listItem.item.children?.length){
                            item.activated = item === listItem.item;
                        }
                        
                        if(item.children?.length){
                            activateListItem(item.children)
                            item.children=[...item.children]
                        }
                    }
                }

                activateListItem(this.list.items)
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
