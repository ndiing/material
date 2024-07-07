import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Card component for Material Design.
 * @extends MDComponent
 * @tagname md-card
 * @fires MDCardComponent#onCardIconButtonClick - Event fired when an icon button inside the card is clicked.
 * @fires MDCardComponent#onCardIconClick - Event fired when an icon inside the card is clicked.
 * @fires MDCardComponent#onCardButtonClick - Event fired when a button inside the card is clicked.
 * @fires MDCardComponent#onCardFabClick - Event fired when a FAB (floating action button) inside the card is clicked.
 * @fires MDCardComponent#onCardTextFieldNativeFocus - Event fired when a native input field inside the card gains focus.
 * @fires MDCardComponent#onCardTextFieldNativeBlur - Event fired when a native input field inside the card loses focus.
 * @fires MDCardComponent#onCardTextFieldNativeInput - Event fired when a native input field inside the card receives input.
 * @fires MDCardComponent#onCardTextFieldNativeSearch - Event fired when a native input field inside the card performs a search.
 * @fires MDCardComponent#onCardTextFieldNativeInvalid - Event fired when a native input field inside the card becomes invalid.
 * @fires MDCardComponent#onCardTextFieldNativeReset - Event fired when a native input field inside the card is reset.
 * @fires MDCardComponent#onCardTextFieldIconButtonClick - Event fired when an icon button inside a text field inside the card is clicked.
 * @fires MDCardComponent#onCardPaginationChange - Event fired when pagination changes inside the card.
 * @fires MDCardComponent#onCardPaginationLimitChange - Event fired when pagination limit changes inside the card.
 * @fires MDCardComponent#onCardPaginationFirstClick - Event fired when the first pagination button inside the card is clicked.
 * @fires MDCardComponent#onCardPaginationPrevClick - Event fired when the previous pagination button inside the card is clicked.
 * @fires MDCardComponent#onCardPaginationNextClick - Event fired when the next pagination button inside the card is clicked.
 * @fires MDCardComponent#onCardPaginationLastClick - Event fired when the last pagination button inside the card is clicked.
 */
class MDCardComponent extends MDComponent {
    /**
     * @property {String} variant - The variant style of the card (e.g., elevated, filled, outlined).
     * @property {Array} leadingActions - Actions displayed at the leading edge of the card.
     * @property {String} label - The primary label of the card.
     * @property {String} subLabel - The secondary label of the card.
     * @property {Array} trailingActions - Actions displayed at the trailing edge of the card.
     * @property {Array} actions - Actions displayed in the card body or footer.
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
                .name="${ifDefined(item.name)}"
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
                .name="${ifDefined(item.name)}"
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
