import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * Utility function to check if a value is not null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is not null or undefined, otherwise false.
 */
function notNull(value) {
    return value !== undefined && value !== null;
}

/**
 * Material Design List Item Component.
 * @extends MDComponent
 */
class MDListItemComponent extends MDComponent {
    /**
     * Properties for the MDListItemComponent.
     * @property {String} avatar - URL or source for the avatar image.
     * @property {String} image - URL or source for the main image.
     * @property {String} video - URL or source for the video.
     * @property {String} icon - Icon for the list item.
     * @property {String} label - Label for the list item.
     * @property {String} supportingText - Supporting text for the list item.
     * @property {String} checkbox - Checkbox for the list item.
     * @property {String} radioButton - Radio button for the list item.
     * @property {String} trailingSwitch - Switch at the end of the list item.
     * @property {String} trailingCheckbox - Checkbox at the end of the list item.
     * @property {String} trailingSupportingText - Supporting text at the end of the list item.
     * @property {String} trailingIcon - Icon at the end of the list item.
     * @property {String} badge - Badge for the list item.
     * @property {Boolean} activated - Flag indicating if the list item is activated.
     * @property {String} routerLink - URL for the router link.
     */
    static properties = {
        avatar: { type: String },
        image: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        supportingText: { type: String },
        checkbox: { type: String },
        radioButton: { type: String },
        trailingSwitch: { type: String },
        trailingCheckbox: { type: String },
        trailingSupportingText: { type: String },
        trailingIcon: { type: String },
        badge: { type: String },
        activated: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
    };

    /**
     * Check if the list item has content in the start.
     * @returns {boolean} - True if there is content in the start, otherwise false.
     */
    get hasListStart() {
        return notNull(this.avatar) || notNull(this.image) || notNull(this.video) || notNull(this.icon) || notNull(this.checkbox) || notNull(this.radioButton);
    }

    /**
     * Check if the list item has content in the center.
     * @returns {boolean} - True if there is content in the center, otherwise false.
     */
    get hasListCenter() {
        return this.label || this.supportingText;
    }

    /**
     * Check if the list item has content at the end.
     * @returns {boolean} - True if there is content at the end, otherwise false.
     */
    get hasListEnd() {
        return notNull(this.trailingSwitch) || notNull(this.trailingCheckbox) || this.trailingSupportingText || notNull(this.trailingIcon) || notNull(this.badge);
    }

    /**
     * Constructor for MDListItemComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");
    }

    /**
     * Callback when the element is first updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            fadeout: true,
        });
    }

    /**
     * Callback when the element is updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
    }

    /**
     * Render method for MDListItemComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.hasListStart ? html`
                <div class="md-list__start">
                    ${notNull(this.avatar) ? html`<md-image class="md-list__avatar" .src="${this.avatar?.src ?? this.avatar}" .alt="${this.avatar?.alt}"></md-image>` : nothing}
                    ${notNull(this.image) ? html`<md-image class="md-list__image" .src="${this.image?.src ?? this.image}" .alt="${this.image?.alt}"></md-image>` : nothing}
                    ${notNull(this.video) ? html`<md-image class="md-list__video" .src="${this.video?.src ?? this.video}" .alt="${this.video?.alt}"></md-image>` : nothing}
                    ${notNull(this.icon) ? html`<md-icon class="md-list__icon">${this.icon}</md-icon>` : nothing}
                    ${notNull(this.checkbox) ? html`<md-checkbox class="md-list__checkbox" .checked="${this.checkbox?.checked ?? this.activated}"></md-checkbox>` : nothing}
                    ${notNull(this.radioButton) ? html`<md-radio-button class="md-list__radio-button" .checked="${this.radioButton?.checked ?? this.activated}"></md-radio-button>` : nothing}
                </div>
            ` : nothing}
            ${this.hasListCenter ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing}
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.hasListEnd ? html`
                <div class="md-list__end">
                    ${notNull(this.trailingSwitch) ? html`<md-switch class="md-list__switch" .checked="${this.trailingSwitch?.checked ?? this.activated}"></md-switch>` : nothing}
                    ${notNull(this.trailingCheckbox) ? html`<md-checkbox class="md-list__checkbox" .checked="${this.trailingCheckbox?.checked ?? this.activated}"></md-checkbox>` : nothing}
                    ${this.trailingSupportingText ? html`<div class="md-list__supporting-text">${this.trailingSupportingText}</div>` : nothing}
                    ${notNull(this.trailingIcon) ? html`<md-icon class="md-list__icon">${this.trailingIcon}</md-icon>` : nothing}
                    ${notNull(this.badge) ? html`<md-badge class="md-list__badge" .label="${this.badge?.label ?? this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
        `;
    }
}

// Define the custom element.
customElements.define("md-list-item", MDListItemComponent);

// Export the component.
export { MDListItemComponent };
