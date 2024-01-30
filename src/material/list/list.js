import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

function notNull(value) {
    return value !== null && value !== undefined;
}

class MDListContainerComponent extends MDComponent {
    static properties = {
        leadingIcons: { type: Array },
        collapsibleIcons: { type: Array },
        leadingAvatar: { type: String },
        leadingImage: { type: String },
        leadingVideo: { type: String },
        leadingIcon: { type: String },
        leadingCheckbox: { type: String },
        leadingRadioButton: { type: String },
        label: { type: String },
        supportingText: { type: String },
        trailingCheckbox: { type: String },
        trailingSupportingText: { type: String },
        trailingSwitch: { type: String },
        trailingIcon: { type: String },
        activated: { type: Boolean, reflect: true },
        expanded: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        badge: { type: String },
    };

    get hasLeadingItems() {
        return (
            this.leadingIcons?.length ||
            notNull(this.leadingAvatar) || //
            notNull(this.leadingImage) ||
            notNull(this.leadingVideo) ||
            notNull(this.leadingIcon) ||
            notNull(this.leadingCheckbox) ||
            notNull(this.leadingRadioButton)
        );
    }
    get hasItems() {
        return (
            this.label || //
            this.supportingText
        );
    }
    get hasTrailingItems() {
        return (
            notNull(this.trailingCheckbox) || //
            this.trailingSupportingText ||
            notNull(this.trailingSwitch) ||
            notNull(this.trailingIcon)
        );
    }

    constructor() {
        super();

        // default
        // this.label = "Label";
        this.leadingIcons = [];
        // this.collapsibleIcons=[]
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__container");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__container");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            fadeout: true,
        });
    }

    updated(changedProperties) {}

    // prettier-ignore
    render() {
        if (this.ui === "tree") {
            this.collapsibleIcons = this.collapsibleIcons ?? ["folder", "folder_open"];
            this.leadingIcons = Array.from({ length: this.level });

            if (this.collapsibleIcons?.length) {
                this.leadingIcon = this.leadingIcon ?? "draft";

                if (this.item.children?.length) {
                    this.leadingIcon = this.collapsibleIcons[~~this.expanded];
                }
            }
        } else if (this.ui === "level") {
            this.collapsibleIcons = this.collapsibleIcons ?? ["arrow_forward", "arrow_back"];
            this.leadingIcon = this.leadingIcon ?? "";

            if (this.level === 0 && !this.leadingIcon) {
                this.leadingIcon = null;
            }

            if (this.item.children?.length && this.collapsibleIcons?.length) {
                if (this.item.canGoBack) {
                    this.leadingIcon = this.collapsibleIcons[~~this.expanded];
                } else {
                    this.trailingIcon = this.collapsibleIcons[~~this.expanded];
                }
            }
        } else {
            this.collapsibleIcons = this.collapsibleIcons ?? ["arrow_drop_down", "arrow_drop_up"];
            this.leadingIcon = this.leadingIcon ?? "";

            if (this.level === 0 && !this.leadingIcon) {
                this.leadingIcon = null;
            }

            if (this.item.children?.length && this.collapsibleIcons?.length) {
                this.trailingIcon = this.collapsibleIcons[~~this.expanded];
            }
        }
        
        return html`
            ${this.hasLeadingItems?html`
                <div class="md-list__start">
                    ${this.leadingIcons?.length?this.leadingIcons.map(() => html`<md-icon class="md-list__icon"></md-icon>`):nothing}
                    ${notNull(this.leadingAvatar)?html`<md-image class="md-list__avatar" .src="${this.leadingAvatar}" .ui="${"shape"}"></md-image>`:nothing}
                    ${notNull(this.leadingImage)?html`<md-image class="md-list__image" .src="${this.leadingImage}"></md-image>`:nothing}
                    ${notNull(this.leadingVideo)?html`<md-image class="md-list__video" .src="${this.leadingVideo}"></md-image>`:nothing}
                    ${notNull(this.leadingIcon)?html`<md-icon class="md-list__icon">${this.leadingIcon}</md-icon>`:nothing}
                    ${notNull(this.leadingCheckbox)?html`<md-checkbox class="md-list__checkbox" .checked="${this.leadingCheckbox?.checked??this.activated}">${this.leadingCheckbox}</md-checkbox>`:nothing}
                    ${notNull(this.leadingRadioButton)?html`<md-radio-button class="md-list__radio-button" .checked="${this.leadingRadioButton?.checked??this.activated}">${this.leadingRadioButton}</md-radio-button>`:nothing}
                </div>
            `:nothing}
            ${this.hasItems?html`
                <div class="md-list__center">
                    ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-list__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${this.hasTrailingItems?html`
                <div class="md-list__end">
                    ${notNull(this.trailingCheckbox)?html`<md-checkbox class="md-list__checkbox" .checked="${this.trailingCheckbox?.checked??this.activated}">${this.trailingCheckbox}</md-checkbox>`:nothing}
                    ${this.trailingSupportingText?html`<div class="md-list__supporting-text">${this.trailingSupportingText}</div>`:nothing}
                    ${notNull(this.trailingSwitch)?html`<md-switch class="md-list__switch" .checked="${this.trailingSwitch?.checked??this.activated}">${this.trailingSwitch}</md-switch>`:nothing}
                    ${notNull(this.trailingIcon)?html`<md-icon class="md-list__icon">${this.trailingIcon}</md-icon>`:nothing}
                </div>
            `:nothing}
            ${notNull(this.badge)?html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:nothing}
        `;
    }
}

customElements.define("md-list-container", MDListContainerComponent);

export { MDListContainerComponent };

class MDListItemComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-list-item", MDListItemComponent);

export { MDListItemComponent };

class MDListComponent extends MDComponent {
    static properties = {
        items: { type: Array },
        ui: { type: String },
        type: { type: String },
        selectable: { type: Boolean },
    };

    get list() {
        var el = this;

        do {
            if (el.matches(".md-list") && el.level === 0) return el;

            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    }

    constructor() {
        super();

        // default
        this.items = [];
        this.ui = "one-line";
        this.type = "single-select";
        this.level = 0;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["one-line", "two-line", "three-line", "tree-view", "level-view"].forEach((ui) => {
                this.classList.remove(`md-list--${ui}`);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-list--${ui}`);
                });
            }
        }
    }

    render() {
        // prettier-ignore
        return [this.parent]
        .concat(this.items)
        .filter(item=>item&&(item!==this.parent||this.list.ui==='level'))
        .map(item=>{
            item.canGoBack=item===this.parent
            return html`
                <md-list-item>
                    ${item.headline?html`<div class="md-list__headline">${item.headline}</div>`:nothing}
                    ${!item.headline&&!item.divider?html`
                        <md-list-container
                            .item="${item}"
                            .leadingAvatar="${item.leadingAvatar}"
                            .leadingImage="${item.leadingImage}"
                            .leadingVideo="${item.leadingVideo}"
                            .leadingIcon="${item.leadingIcon}"
                            .leadingCheckbox="${item.leadingCheckbox}"
                            .leadingRadioButton="${item.leadingRadioButton}"
                            .label="${item.label}"
                            .supportingText="${item.supportingText}"
                            .trailingCheckbox="${item.trailingCheckbox}"
                            .trailingSupportingText="${item.trailingSupportingText}"
                            .trailingSwitch="${item.trailingSwitch}"
                            .activated="${item.activated}"
                            .expanded="${item.expanded}"
                            .badge="${item.badge}"
                            .routerLink="${item.routerLink}"
                            .ui="${this.list.ui}"
                            .level="${this.level}"
                            @click="${this.handleListItemContainerClick}"
                        ></md-list-container>
                        ${item.children?.length&&item.expanded&&item!==this.parent?html`
                            <md-list
                                .parent="${item}"
                                .items="${item.children}"
                                .level="${this.level+1}"
                            ></md-list>
                        `:nothing}
                    `:nothing}
                    ${item.divider?html`<div class="md-list__divider"></div>`:nothing}
                </md-list-item>
            `
        })
    }

    handleListItemContainerClick(event) {
        const listItemContainer = event.currentTarget;

        if (this.list.selectable) {
            if (this.list.type === "multi-select") {
                // multi-select
                listItemContainer.item.activated = !listItemContainer.item.activated;
            } else {
                if (listItemContainer.item?.children) {
                    listItemContainer.item.expanded = !listItemContainer.item.expanded;
                }

                // single-select
                const activateListItem = (items) => {
                    for (const item of items) {
                        if (!listItemContainer.item?.children) {
                            item.activated = item === listItemContainer.item;
                        }

                        if (item.children?.length) {
                            activateListItem(item.children);
                            item.children = [...item.children];
                        }
                    }
                };

                activateListItem(this.list.items);
            }

            this.list.requestUpdate();
        }

        this.list.emit("onListItemContainerClick", { event, listItemContainer });
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
