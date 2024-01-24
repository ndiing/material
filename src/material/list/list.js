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

        let leadingItems = []
        let trailingItems = []

        let collapsibleIcons=this.collapsibleIcons
        let nodeIcons=this.nodeIcons
        let leafIcon=this.leafIcon

        if(this.ui==='tree'){
            collapsibleIcons = collapsibleIcons??['arrow_right','arrow_drop_down']
            nodeIcons = nodeIcons??['folder','folder_open']
            leafIcon = leafIcon??'draft'

            leadingItems=leadingItems.concat(Array.from({length:this.level}, () => ({item:'md-icon'})))
            if(this.item.children?.length){
                if(collapsibleIcons?.length){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:collapsibleIcons[~~this.expanded]})
                }
                if(leafIcon&&nodeIcons.length){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:nodeIcons[~~this.expanded]})
                }
            }
            else{
                if(collapsibleIcons?.length){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:''})
                }
                if(leafIcon&&nodeIcons.length){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:leafIcon})
                }
            }
        }
        else if(this.ui==='level'){
            collapsibleIcons = collapsibleIcons??['arrow_forward','arrow_back']
            leafIcon = leafIcon??''

            if(this.item.children?.length){
                if(this.item.canGoBack){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:collapsibleIcons[~~this.expanded]})
                }
                else{
                    trailingItems=trailingItems.concat({item:'md-icon',icon:collapsibleIcons[~~this.expanded]})
                }
            }

            if(!this.item.canGoBack){
                if(leafIcon||this.level>0){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:leafIcon})
                }
            }
        }
        else {
            collapsibleIcons = collapsibleIcons??['arrow_drop_down','arrow_drop_up']
            leafIcon = leafIcon??''

            if(this.item.children?.length){
                trailingItems=trailingItems.concat({item:'md-icon',icon:collapsibleIcons[~~this.expanded]})
            }

            if(!this.item.canGoBack){
                if(leafIcon||this.level>0){
                    leadingItems=leadingItems.concat({item:'md-icon',icon:leafIcon})
                }
            }
        }

        /*prettier-ignore*/
        return html`
            ${leadingItems.map(item=>this.renderItem(item))}
            ${this.leadingItems?.length ? html`<div class="md-list__start">${this.leadingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${this.label || this.supportingText ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} 
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing} 
            ${this.trailingItems?.length ? html`<div class="md-list__end">${this.trailingItems.map((item) => this.renderItem(item))}</div>` : nothing} 
            ${trailingItems.map(item=>this.renderItem(item))}
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
        this.state = new MdStateController(this, {fadeout:true});

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
        return [this.item].concat(this.items).filter(item=>item&&(item!==this.item||this.ui==='level')).map((item) => {
            item.canGoBack=item===this.item
            const template=html`
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
                            .ui="${item.ui??this.ui}"
                            .level="${this.level}"
                            @click="${this.onListItemClick}"></md-list-item>
                    ` : nothing}
                    ${item.divider ? html`<div class="md-list__divider"></div>` : nothing}
                    ${item.children?.length&&item.expanded&&item!==this.item ? html`<md-list 
                        class="md-list__children"
                        .ui="${item.ui??this.list.ui}"
                        .items="${item.children}"
                        .item="${item}"
                        .level="${this.level+1}"
                    ></md-list>` : nothing}
                </md-list-row>
            `
            return template
        });
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
        let el = this
        do{
            if(el.closest('.md-list')&&el.level===0){
                return el
            }
            el=el.parentElement
        }while(el)
        return null
    }

    activatedListItem(items,currentItem){
        for(const item of items){
            if(!currentItem.children?.length){
                item.activated=item==currentItem
            }
            if(item.children?.length){
                this.activatedListItem(item.children,currentItem)
                item.children=[...item.children]
            }
        }
    }

    onListItemClick(event) {
        const listItem = event.currentTarget;
        const currentItem = listItem.item
        if (this.list.activatable) {
            if (this.list.type === "multi-select") {
                currentItem.activated = !currentItem.activated;
            } else {
                if(currentItem.children?.length){
                    currentItem.expanded = !currentItem.expanded;
                }
                this.list.activatedListItem(this.list.items,currentItem)
            }
            this.list.requestUpdate();
        }
        this.list.dispatchEvent(
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