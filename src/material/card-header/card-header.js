import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDCardHeaderComponent represents the header of a card component.
 *
 * @extends MDComponent
 */
class MDCardHeaderComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} label - The label text for the card header.
     * @property {String} supportingText - The supporting text for the card header.
     * @property {String} icon - The icon for the card header.
     * @property {String} trailingIcon - The trailing icon for the card header.
     * @property {String} iconButton - The icon button for the card header.
     * @property {String} trailingIconButton - The trailing icon button for the card header.
     */
    static properties = {
        label: { type: String },
        supportingText: { type: String },
        icon: { type: String },
        trailingIcon: { type: String },
        iconButton: { type: String },
        trailingIconButton: { type: String },
    };

    /**
     * Checks if the card has content at the start.
     *
     * @returns {Boolean} - True if there is content at the start, otherwise false.
     */
    get hasCardStart() {
        return (
            this.icon ||
            this.iconButton
        );
    }

    /**
     * Checks if the card has content in the center.
     *
     * @returns {Boolean} - True if there is content in the center, otherwise false.
     */
    get hasCardCenter() {
        return this.label || this.supportingText;
    }

    /**
     * Checks if the card has content at the end.
     *
     * @returns {Boolean} - True if there is content at the end, otherwise false.
     */
    get hasCardEnd() {
        return (
            this.trailingIcon ||
            this.trailingIconButton
        );
    }

    /**
     * Constructor for MDCardHeaderComponent.
     */
    constructor() {
        super();

        // this.label = "Label";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__header");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__header");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the card header.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.hasCardStart ? html`
                <div class="md-card__start">
                    ${this.icon ? html`<md-icon class="md-card__icon" @click="${this.handleCardIconClick}">${this.icon}</md-icon>` : nothing}
                    ${this.iconButton ? html`<md-icon-button class="md-card__icon-button" .icon="${this.iconButton}" @click="${this.handleCardIconButtonClick}"></md-icon-button>` : nothing}
                </div>
            ` : nothing}
            ${this.hasCardCenter ? html`
                <div class="md-card__center">
                    ${this.label ? html`<div class="md-card__label">${this.label}</div>` : nothing}
                    ${this.supportingText ? html`<div class="md-card__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.hasCardEnd ? html`
                <div class="md-card__end">
                    ${this.trailingIcon ? html`<md-icon class="md-card__icon" @click="${this.handleCardIconClick}">${this.trailingIcon}</md-icon>` : nothing}
                    ${this.trailingIconButton ? html`<md-icon-button class="md-card__icon-button" .icon="${this.trailingIconButton}" @click="${this.handleCardIconButtonClick}"></md-icon-button>` : nothing}
                </div>
            ` : nothing}
        `;
    }

    /**
     * Event handler for card icon click events.
     *
     * @param {Event} event - The click event.
     * @fires MDCardHeaderComponent#onCardIconClick
     */
    handleCardIconClick(event) {
        this.emit('onCardIconClick', { event });
    }

    /**
     * Event handler for card icon button click events.
     *
     * @param {Event} event - The click event.
     * @fires MDCardHeaderComponent#onCardIconButtonClick
     */
    handleCardIconButtonClick(event) {
        this.emit('onCardIconButtonClick', { event });
    }
}

customElements.define("md-card-header", MDCardHeaderComponent);

export { MDCardHeaderComponent };
