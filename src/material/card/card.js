import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";

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

        this.childNodes_ = Array.from(this.childNodes);

        this.renderButton = this.renderButton.bind(this);

        this.renderFab = this.renderFab.bind(this);

        this.renderIcon = this.renderIcon.bind(this);

        this.renderIconButton = this.renderIconButton.bind(this);

        this.renderPagination = this.renderPagination.bind(this);

        this.renderSearchField = this.renderSearchField.bind(this);
    }

    renderButton(item) {
        /* prettier-ignore */
        return html`
        <md-button
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            .variant="${ifDefined(item.variant)}"
            .type="${ifDefined(item.type)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.onButtonClick||this.handleCardButtonClick)}"
        ></md-button>
    `
    }

    renderFab(item) {
        /* prettier-ignore */
        return html`
        <md-fab
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.onFabClick||this.handleCardFabClick)}"
        ></md-fab>
    `
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html`
        <md-icon
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            @click="${ifDefined(item.onIconClick||this.handleCardIconClick)}"
        ></md-icon>
    `
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
        <md-icon-button
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onIconButtonClick="${ifDefined(item.onIconButtonClick)}"
            @click="${ifDefined(item.onIconButtonClick||this.handleCardIconButtonClick)}"
        ></md-icon-button>
    `
    }

    renderPagination(item) {
        /* prettier-ignore */
        return html`
        <md-pagination
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            .total="${ifDefined(item.total)}"
            .limit="${ifDefined(item.limit)}"
            .page="${ifDefined(item.page)}"
            .label="${ifDefined(item.label)}"
            .options="${ifDefined(item.options)}"
            .text="${ifDefined(item.text)}"
            .firstPage="${ifDefined(item.firstPage)}"
            .prevPage="${ifDefined(item.prevPage)}"
            .nextPage="${ifDefined(item.nextPage)}"
            .lastPage="${ifDefined(item.lastPage)}"
            @onPaginationChange="${ifDefined(item.onPaginationChange)}"
            @onPaginationLimitChange="${ifDefined(item.onPaginationLimitChange)}"
            @onPaginationFirstClick="${ifDefined(item.onPaginationFirstClick)}"
            @onPaginationPrevClick="${ifDefined(item.onPaginationPrevClick)}"
            @onPaginationNextClick="${ifDefined(item.onPaginationNextClick)}"
            @onPaginationLastClick="${ifDefined(item.onPaginationLastClick)}"
        ></md-pagination>
    `
    }

    renderSearchField(item) {
        /* prettier-ignore */
        return html`
        <md-search-field
            class="${classMap({...item.classMap})}"
            name="${ifDefined(item.name)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-search-field>
    `
    }

    /**
     * Renders an action component based on its type.
     * @private
     */
    renderAction(item, defaultAction = this.renderButton) {
        /* prettier-ignore */
        return choose(item.component, [
            ['button', () => this.renderButton(item)],
            ['fab', () => this.renderFab(item)],
            ['icon', () => this.renderIcon(item)],
            ['icon-button', () => this.renderIconButton(item)],
            ['pagination', () => this.renderPagination(item)],
            ['search-field', () => this.renderSearchField(item)],
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

    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }

    handleCardFabClick(event) {
        this.emit("onCardFabClick", event);
    }

    handleCardIconClick(event) {
        this.emit("onCardIconClick", event);
    }

    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", event);
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
