import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * List item component for displaying items in a list with optional selection and actions.
 * @element md-list-item
 * @extends MDComponent
 * @fires MDListItemComponent#onListItemSelected - Triggered when the list item is selected.
 */
class MDListItemComponent extends MDComponent {
    /**
     * Properties defining the structure and behavior of the list item.
     * @property {String} avatar - URL of the avatar image.
     * @property {String} thumbnail - URL of the thumbnail image.
     * @property {String} video - URL of the video.
     * @property {String} icon - Name or URL of the icon.
     * @property {String} label - Primary label text.
     * @property {String} subLabel - Secondary label text.
     * @property {Number} badge - Numeric badge value.
     * @property {String} text - Additional text content.
     * @property {Boolean} leadingCheckbox - Indicates presence of a leading checkbox.
     * @property {Boolean} leadingRadioButton - Indicates presence of a leading radio button.
     * @property {Boolean} leadingSwitch - Indicates presence of a leading switch.
     * @property {Boolean} trailingCheckbox - Indicates presence of a trailing checkbox.
     * @property {Boolean} trailingRadioButton - Indicates presence of a trailing radio button.
     * @property {Boolean} trailingSwitch - Indicates presence of a trailing switch.
     * @property {Boolean} selected - Indicates if the list item is selected.
     * @property {String} routerLink - URL link for routing.
     * @property {Boolean} activated - Reflects if the list item is activated.
     */
    static properties = {
        avatar: { type: String },
        thumbnail: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        subLabel: { type: String },
        badge: { type: Number },
        text: { type: String },
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        activated: { type: Boolean, reflect: true },
    };

    /**
     * Initializes MDListItemComponent with ripple and gesture controllers.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    /**
     * Renders the checkbox element based on the `selected` property.
     * @private
     * @returns {TemplateResult} The rendered checkbox template.
     */
    renderCheckbox() {
        /* prettier-ignore */
        return html`<md-checkbox 
            class="md-list__checkbox"
            .checked="${this.selected}"
        ></md-checkbox>`;
    }

    /**
     * Renders the radio button element based on the `selected` property.
     * @private
     * @returns {TemplateResult} The rendered radio button template.
     */
    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`;
    }

    /**
     * Renders the switch element based on the `selected` property.
     * @private
     * @returns {TemplateResult} The rendered switch template.
     */
    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
        ></md-switch>`;
    }

    /**
     * Renders the HTML template for the list item.
     * @private
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingCheckbox ? this.renderCheckbox() : nothing}
            ${this.leadingRadioButton ? this.renderRadioButton() : nothing}
            ${this.leadingSwitch ? this.renderSwitch() : nothing}
            ${this.avatar ? html`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${this.thumbnail ? html`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>` : nothing}
            ${this.video ? html`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>` : nothing}
            ${this.icon ? html`<md-icon class="md-list__icon" .icon="${this.icon}"></md-icon>` : nothing}
            ${this.label || this.subLabel || this.badge ? html`
                <div class="md-list__inner">
                    ${this.label || this.subLabel ? html`
                        <div class="md-list__label">
                            ${this.label ? html`<div class="md-list__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-list__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.badge ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.text ? html`<div class="md-list__text">${this.text}</div>` : nothing}
            ${this.trailingCheckbox ? this.renderCheckbox() : nothing}
            ${this.trailingRadioButton ? this.renderRadioButton() : nothing}
            ${this.trailingSwitch ? this.renderSwitch() : nothing}
        `;
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
    }

    /**
     * Updates the component when certain properties change.
     * Triggers event when `selected` property changes to true.
     * @private
     * @param {Map} changedProperties - Map of changed properties.
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("subLabel")) {
            await this.updateComplete;
            const secondary = this.querySelector(".md-list__label-secondary");
            const style = window.getComputedStyle(secondary);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (secondary.scrollHeight > lineHeight) {
                this.classList.add("md-list__item--three");
            } else {
                this.classList.add("md-list__item--two");
            }
        }
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListItemSelected", this);
            }
        }
    }
}
customElements.define("md-list-item", MDListItemComponent);
export { MDListItemComponent };
