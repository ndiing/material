import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-card
 * @fires MDCardComponent#onCardIconButtonClick - {{desc}}
 * @fires MDCardComponent#onCardIconClick - {{desc}}
 * @fires MDCardComponent#onCardButtonClick - {{desc}}
 * @fires MDCardComponent#onCardFabClick - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeFocus - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeBlur - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeInput - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeSearch - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeInvalid - {{desc}}
 * @fires MDCardComponent#onCardTextFieldNativeReset - {{desc}}
 * @fires MDCardComponent#onCardTextFieldIconButtonClick - {{desc}}
 * @fires MDCardComponent#onCardPaginationChange - {{desc}}
 * @fires MDCardComponent#onCardPaginationLimitChange - {{desc}}
 * @fires MDCardComponent#onCardPaginationFirstClick - {{desc}}
 * @fires MDCardComponent#onCardPaginationPrevClick - {{desc}}
 * @fires MDCardComponent#onCardPaginationNextClick - {{desc}}
 * @fires MDCardComponent#onCardPaginationLastClick - {{desc}}
 */
class MDCardComponent extends MDComponent {
    /**
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     */
    static properties = {
        variant: { type: String },
        leadingActions: { type: Array },
        label: { type: String },
        subLabel: { type: String },
        trailingActions: { type: Array },
        actions: { type: Array },
    };

    variants = ["elevated", "filled", "outlined"];

    constructor() {
        super();

        this.body = Array.from(this.childNodes);

        this.renderIconButton = this.renderIconButton.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.renderFab = this.renderFab.bind(this);
        this.renderTextField = this.renderTextField.bind(this);
    }

    renderPagination(item) {
        /* prettier-ignore */
        return html`
            <md-pagination
                class="md-card__pagination"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .total="${ifDefined(item.total)}"
                .limit="${ifDefined(item.limit)}"
                .page="${ifDefined(item.page)}"
                .options="${ifDefined(item.options)}"
                @onPaginationChange="${this.handleCardPaginationChange}"
                @onPaginationLimitChange="${this.handleCardPaginationLimitChange}"
                @onPaginationFirstClick="${this.handleCardPaginationFirstClick}"
                @onPaginationPrevClick="${this.handleCardPaginationPrevClick}"
                @onPaginationNextClick="${this.handleCardPaginationNextClick}"
                @onPaginationLastClick="${this.handleCardPaginationLastClick}"
            ></md-pagination>
        `;
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-card__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleCardIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <div
                class="md-icon md-card__icon"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                @click="${this.handleCardIconClick}"
            >${item.icon}</div>
        `;
    }

    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                class="md-card__button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `;
    }

    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                class="md-card__fab"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                @click="${this.handleCardFabClick}"
            ></md-fab>
        `;
    }

    renderTextField(item) {
        /* prettier-ignore */
        return html`
            <md-text-field
                class="md-card__text-field"
                name="${ifDefined(item.name)}"
                .icon="${ifDefined(item.icon)}"
                .placeholder="${ifDefined(item.placeholder)}"
                @onTextFieldNativeInput="${this.handleCardTextFieldNativeInput}"
            ></md-text-field>
        `;
    }

    renderSearchField(item) {
        /* prettier-ignore */
        return html`
            <md-search-field
                class="md-card__search-field"
                name="${ifDefined(item.name)}"
                .icon="${ifDefined(item.icon)}"
                .placeholder="${ifDefined(item.placeholder)}"
                @onTextFieldNativeInput="${this.handleCardTextFieldNativeInput}"
                @onTextFieldNativeSearch="${this.handleCardTextFieldNativeSearch}"
            ></md-search-field>
        `;
    }

    renderAction(item, defaultAction = this.renderButton) {
        /* prettier-ignore */
        return choose(item.component, [
            ['text-field', () => this.renderTextField(item)],
            ['search-field', () => this.renderSearchField(item)],
            ['icon-button', () => this.renderIconButton(item)],
            ['icon', () => this.renderIcon(item)],
            ['button', () => this.renderButton(item)],
            ['fab', () => this.renderFab(item)],
            ['pagination', () => this.renderPagination(item)],
            ['spacer', () => html`<div class="md-pane__spacer"></div>`],
        ], () => defaultAction(item));
    }

    renderHeader() {
        /* prettier-ignore */
        return this.leadingActions?.length || this.label || this.subLabel || this.trailingActions?.length ? html`
            <div class="md-card__header">
                ${this.leadingActions?.length ? html`
                    <div class="md-card__actions">
                        ${this.leadingActions.map(item => this.renderAction(item, this.renderIconButton))}
                    </div>
                ` : nothing}
                ${this.label || this.subLabel ? html`
                    <div class="md-card__label">
                        ${this.label ? html`<div class="md-card__label-primary">${this.label}</div>` : nothing}
                        ${this.subLabel ? html`<div class="md-card__label-secondary">${this.subLabel}</div>` : nothing}
                    </div>
                ` : nothing}
                ${this.trailingActions?.length ? html`
                    <div class="md-card__actions md-card__actions--end">
                        ${this.trailingActions.map(item => this.renderAction(item, this.renderIconButton))}
                    </div>
                ` : nothing}
            </div>
        ` : nothing;
    }

    renderBody() {
        /* prettier-ignore */
        return this.body?.length || this.actions?.length ? html`
            <div class="md-card__body">
                ${this.body?.length ? html`<div class="md-card__inner">${this.body}</div>` : nothing}
                ${this.actions?.length ? html`
                    <div class="md-card__footer">
                        ${this.actions.map(item => this.renderAction(item, this.renderButton))}
                    </div>
                ` : nothing}
            </div>
        ` : nothing;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");

        if (this.variant && this.variant.includes("interactive")) {
            this.ripple = new MDRippleController(this, {
                clipped: true,
            });
        }
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", event);
    }

    handleCardIconClick(event) {
        this.emit("onCardIconClick", event);
    }

    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }

    handleCardFabClick(event) {
        this.emit("onCardFabClick", event);
    }

    handleCardTextFieldNativeFocus(event) {
        this.emit("onCardTextFieldNativeFocus", event);
    }

    handleCardTextFieldNativeBlur(event) {
        this.emit("onCardTextFieldNativeBlur", event);
    }

    handleCardTextFieldNativeInput(event) {
        this.emit("onCardTextFieldNativeInput", event);
    }

    handleCardTextFieldNativeSearch(event) {
        this.emit("onCardTextFieldNativeSearch", event);
    }

    handleCardTextFieldNativeInvalid(event) {
        this.emit("onCardTextFieldNativeInvalid", event);
    }

    handleCardTextFieldNativeReset(event) {
        this.emit("onCardTextFieldNativeReset", event);
    }

    handleCardTextFieldIconButtonClick(event) {
        this.emit("onCardTextFieldIconButtonClick", event);
    }

    handleCardPaginationChange(event) {
        this.emit("onCardPaginationChange", event);
    }

    handleCardPaginationLimitChange(event) {
        this.emit("onCardPaginationLimitChange", event);
    }

    handleCardPaginationFirstClick(event) {
        this.emit("onCardPaginationFirstClick", event);
    }

    handleCardPaginationPrevClick(event) {
        this.emit("onCardPaginationPrevClick", event);
    }

    handleCardPaginationNextClick(event) {
        this.emit("onCardPaginationNextClick", event);
    }

    handleCardPaginationLastClick(event) {
        this.emit("onCardPaginationLastClick", event);
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
