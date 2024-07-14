import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * A custom element representing a card with various interactive elements and actions.
 * @element md-card
 * @extends MDComponent
 * @fires MDCardComponent#onCardIconButtonClick - Event fired when an icon button in the card is clicked.
 * @fires MDCardComponent#onCardIconClick - Event fired when an icon in the card is clicked.
 * @fires MDCardComponent#onCardButtonClick - Event fired when a button in the card is clicked.
 * @fires MDCardComponent#onCardFabClick - Event fired when a FAB (Floating Action Button) in the card is clicked.
 * @fires MDCardComponent#onCardTextFieldNativeFocus - Event fired when a native text field in the card receives focus.
 * @fires MDCardComponent#onCardTextFieldNativeBlur - Event fired when a native text field in the card loses focus.
 * @fires MDCardComponent#onCardTextFieldNativeInput - Event fired when input occurs in a native text field in the card.
 * @fires MDCardComponent#onCardTextFieldNativeSearch - Event fired when a search action occurs in a native text field in the card.
 * @fires MDCardComponent#onCardTextFieldNativeInvalid - Event fired when a native text field in the card is invalid.
 * @fires MDCardComponent#onCardTextFieldNativeReset - Event fired when a reset action occurs in a native text field in the card.
 * @fires MDCardComponent#onCardTextFieldIconButtonClick - Event fired when an icon button in a text field in the card is clicked.
 * @fires MDCardComponent#onCardPaginationChange - Event fired when pagination in the card changes.
 * @fires MDCardComponent#onCardPaginationLimitChange - Event fired when pagination limit in the card changes.
 * @fires MDCardComponent#onCardPaginationFirstClick - Event fired when the first page button in pagination in the card is clicked.
 * @fires MDCardComponent#onCardPaginationPrevClick - Event fired when the previous page button in pagination in the card is clicked.
 * @fires MDCardComponent#onCardPaginationNextClick - Event fired when the next page button in pagination in the card is clicked.
 * @fires MDCardComponent#onCardPaginationLastClick - Event fired when the last page button in pagination in the card is clicked.
 */
class MDCardComponent extends MDComponent {
    /**
     * Defines the properties of the card element.
     * @property {String} variant - The variant style of the card (e.g., "elevated", "filled", "outlined").
     * @property {Array} leadingActions - An array of leading actions (e.g., icon buttons) in the card.
     * @property {String} label - The primary label text of the card.
     * @property {String} subLabel - The secondary label text of the card.
     * @property {Array} trailingActions - An array of trailing actions (e.g., icon buttons) in the card.
     * @property {Array} actions - An array of general actions (e.g., buttons, FABs) in the card footer.
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

    /**
     * Constructs an instance of MDCardComponent.
     */
    constructor() {
        super();
        // this.leadingActions=[]
        // this.trailingActions=[]
        // this.actions=[]
        this.childNodes_ = Array.from(this.childNodes);
        this.renderIconButton = this.renderIconButton.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.renderFab = this.renderFab.bind(this);
        this.renderTextField = this.renderTextField.bind(this);
    }

    /**
     * Renders the pagination component.
     * @private
     */
    renderPagination(item) {
        /* prettier-ignore */
        return html`
            <md-pagination
                class="md-card__pagination"
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

    /**
     * Renders an icon button component.
     * @private
     */
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

    /**
     * Renders an icon component.
     * @private
     */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                class="md-card__icon"
                name="${ifDefined(item.name)}"
                @click="${this.handleCardIconClick}"
            >${item.icon}</md-icon>
        `;
    }

    /**
     * Renders a button component.
     * @private
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                class="md-card__button"
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

    /**
     * Renders a FAB (Floating Action Button) component.
     * @private
     */
    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                class="md-card__fab"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                @click="${this.handleCardFabClick}"
            ></md-fab>
        `;
    }

    /**
     * Renders a text field component.
     * @private
     */
    renderTextField(item) {
        /* prettier-ignore */
        return html`
            <md-text-field
                class="md-card__text-field"
                .name="${ifDefined(item.name)}"
                .icon="${ifDefined(item.icon)}"
                .placeholder="${ifDefined(item.placeholder)}"
                @onTextFieldNativeInput="${this.handleCardTextFieldNativeInput}"
            ></md-text-field>
        `;
    }

    /**
     * Renders a search field component.
     * @private
     */
    renderSearchField(item) {
        /* prettier-ignore */
        return html`
            <md-search-field
                class="md-card__search-field"
                .name="${ifDefined(item.name)}"
                .icon="${ifDefined(item.icon)}"
                .placeholder="${ifDefined(item.placeholder)}"
                @onTextFieldNativeInput="${this.handleCardTextFieldNativeInput}"
                @onTextFieldNativeSearch="${this.handleCardTextFieldNativeSearch}"
            ></md-search-field>
        `;
    }

    /**
     * Renders an action component based on its type.
     * @private
     */
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

    /**
     * Renders the header section of the card.
     * @private
     */
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

    /**
     * Renders the body section of the card.
     * @private
     */
    renderBody() {
        /* prettier-ignore */
        return this.childNodes_?.length || this.actions?.length ? html`
            <div class="md-card__body">
                ${this.childNodes_?.length ? html`<div class="md-card__inner">${this.childNodes_}</div>` : nothing}
                ${this.actions?.length ? html`
                    <div class="md-card__footer">
                        ${this.actions.map(item => this.renderAction(item, this.renderButton))}
                    </div>
                ` : nothing}
            </div>
        ` : nothing;
    }

    /**
     * Renders the complete card element.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    /**
     * Handles the connected state of the card to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    /**
     * Handles updates to the card's properties.
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);

            this.variants.forEach((variant) => {
                this.classList.toggle(`md-card--${variant}`, variants.includes(variant));
            });
        }
    }

    /**
     * Handles click events on icon buttons within the card.
     * @private
     */
    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", event);
    }

    /**
     * Handles click events on icons within the card.
     * @private
     */
    handleCardIconClick(event) {
        this.emit("onCardIconClick", event);
    }

    /**
     * Handles click events on buttons within the card.
     * @private
     */
    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }

    /**
     * Handles click events on FABs within the card.
     * @private
     */
    handleCardFabClick(event) {
        this.emit("onCardFabClick", event);
    }

    /**
     * Handles focus events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeFocus(event) {
        this.emit("onCardTextFieldNativeFocus", event);
    }

    /**
     * Handles blur events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeBlur(event) {
        this.emit("onCardTextFieldNativeBlur", event);
    }

    /**
     * Handles input events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeInput(event) {
        this.emit("onCardTextFieldNativeInput", event);
    }

    /**
     * Handles search events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeSearch(event) {
        this.emit("onCardTextFieldNativeSearch", event);
    }

    /**
     * Handles invalid events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeInvalid(event) {
        this.emit("onCardTextFieldNativeInvalid", event);
    }

    /**
     * Handles reset events on native text fields within the card.
     * @private
     */
    handleCardTextFieldNativeReset(event) {
        this.emit("onCardTextFieldNativeReset", event);
    }

    /**
     * Handles click events on icon buttons within text fields in the card.
     * @private
     */
    handleCardTextFieldIconButtonClick(event) {
        this.emit("onCardTextFieldIconButtonClick", event);
    }

    /**
     * Handles pagination change events within the card.
     * @private
     */
    handleCardPaginationChange(event) {
        this.emit("onCardPaginationChange", event);
    }

    /**
     * Handles pagination limit change events within the card.
     * @private
     */
    handleCardPaginationLimitChange(event) {
        this.emit("onCardPaginationLimitChange", event);
    }

    /**
     * Handles first page click events within pagination in the card.
     * @private
     */
    handleCardPaginationFirstClick(event) {
        this.emit("onCardPaginationFirstClick", event);
    }

    /**
     * Handles previous page click events within pagination in the card.
     * @private
     */
    handleCardPaginationPrevClick(event) {
        this.emit("onCardPaginationPrevClick", event);
    }

    /**
     * Handles next page click events within pagination in the card.
     * @private
     */
    handleCardPaginationNextClick(event) {
        this.emit("onCardPaginationNextClick", event);
    }

    /**
     * Handles last page click events within pagination in the card.
     * @private
     */
    handleCardPaginationLastClick(event) {
        this.emit("onCardPaginationLastClick", event);
    }
}
customElements.define("md-card", MDCardComponent);
export { MDCardComponent };
