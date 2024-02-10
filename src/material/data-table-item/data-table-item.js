import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

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
class MDDataTableItemComponent extends MDComponent {
    /**
     * Properties for the MDDataTableItemComponent.
     * @property {String} avatar - URL or source for the avatar image.
     * @property {String} image - URL or source for the main image.
     * @property {String} video - URL or source for the video.
     * @property {String} icon - Icon for the data-table item.
     * @property {String} label - Label for the data-table item.
     * @property {String} supportingText - Supporting text for the data-table item.
     * @property {String} checkbox - Checkbox for the data-table item.
     * @property {String} radioButton - Radio button for the data-table item.
     * @property {String} trailingSwitch - Switch at the end of the data-table item.
     * @property {String} trailingCheckbox - Checkbox at the end of the data-table item.
     * @property {String} trailingSupportingText - Supporting text at the end of the data-table item.
     * @property {String} trailingIcon - Icon at the end of the data-table item.
     * @property {String} badge - Badge for the data-table item.
     * @property {Boolean} activated - Flag indicating if the data-table item is activated.
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
     * Check if the data-table item has content in the start.
     * @returns {boolean} - True if there is content in the start, otherwise false.
     */
    get hasListStart() {
        return notNull(this.avatar) || notNull(this.image) || notNull(this.video) || notNull(this.icon) || notNull(this.checkbox) || notNull(this.radioButton);
    }

    /**
     * Check if the data-table item has content in the center.
     * @returns {boolean} - True if there is content in the center, otherwise false.
     */
    get hasListCenter() {
        return this.label || this.supportingText;
    }

    /**
     * Check if the data-table item has content at the end.
     * @returns {boolean} - True if there is content at the end, otherwise false.
     */
    get hasListEnd() {
        return notNull(this.trailingSwitch) || notNull(this.trailingCheckbox) || this.trailingSupportingText || notNull(this.trailingIcon) || notNull(this.badge);
    }

    /**
     * Constructor for MDDataTableItemComponent.
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

        this.classList.add("md-data-table__item");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
    }

    /**
     * Callback when the element is first updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
    }

    /**
     * Callback when the element is updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
    }

    /**
     * Render method for MDDataTableItemComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.hasListStart ? html`
                <div class="md-data-table__start">
                    ${notNull(this.avatar) ? html`<md-image class="md-data-table__avatar" .src="${this.avatar?.src ?? this.avatar}" .alt="${this.avatar?.alt}"></md-image>` : nothing}
                    ${notNull(this.image) ? html`<md-image class="md-data-table__image" .src="${this.image?.src ?? this.image}" .alt="${this.image?.alt}"></md-image>` : nothing}
                    ${notNull(this.video) ? html`<md-image class="md-data-table__video" .src="${this.video?.src ?? this.video}" .alt="${this.video?.alt}"></md-image>` : nothing}
                    ${notNull(this.icon) ? html`<md-icon class="md-data-table__icon">${this.icon}</md-icon>` : nothing}
                    ${notNull(this.checkbox) ? html`<md-checkbox class="md-data-table__checkbox" .checked="${this.checkbox?.checked ?? this.activated}"></md-checkbox>` : nothing}
                    ${notNull(this.radioButton) ? html`<md-radio-button class="md-data-table__radio-button" .checked="${this.radioButton?.checked ?? this.activated}"></md-radio-button>` : nothing}
                </div>
            ` : nothing}
            ${this.hasListCenter ? html`
                <div class="md-data-table__center">
                    ${this.label ? html`<div class="md-data-table__label">${this.label}</div>` : nothing}
                    ${this.supportingText ? html`<div class="md-data-table__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.hasListEnd ? html`
                <div class="md-data-table__end">
                    ${notNull(this.trailingSwitch) ? html`<md-switch class="md-data-table__switch" .checked="${this.trailingSwitch?.checked ?? this.activated}"></md-switch>` : nothing}
                    ${notNull(this.trailingCheckbox) ? html`<md-checkbox class="md-data-table__checkbox" .checked="${this.trailingCheckbox?.checked ?? this.activated}"></md-checkbox>` : nothing}
                    ${this.trailingSupportingText ? html`<div class="md-data-table__supporting-text">${this.trailingSupportingText}</div>` : nothing}
                    ${notNull(this.trailingIcon) ? html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>` : nothing}
                    ${notNull(this.badge) ? html`<md-badge class="md-data-table__badge" .label="${this.badge?.label ?? this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
        `;
    }
}

// Define the custom element.
customElements.define("md-data-table-item", MDDataTableItemComponent);

// Export the component.
export { MDDataTableItemComponent };
