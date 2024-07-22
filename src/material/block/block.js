import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * MDBlockComponent represents a complex component with multiple properties for leading and trailing actions, icons, and various other elements.
 * @extends MDComponent
 * @element md-block
 */
class MDBlockComponent extends MDComponent {
    /**
     * Defines properties for MDBlockComponent.
     * @property {String} tooltip - Tooltip text for the component.
     * @property {Array} leadingActions - Array of leading actions.
     * @property {Boolean} leadingCheckbox - Display leading checkblock.
     * @property {Boolean} leadingRadio - Display leading radio button.
     * @property {Boolean} leadingSwitch - Display leading switch.
     * @property {String} leadingAvatar - URL for leading avatar image.
     * @property {String} leadingImage - URL for leading image.
     * @property {String} leadingVideo - URL for leading video.
     * @property {String} leadingIcon - Leading icon name.
     * @property {String} leadingSupportingText - Supporting text for the leading section.
     * @property {String} headline - Headline text.
     * @property {String} supportingText - Supporting text.
     * @property {String} trailingSupportingText - Supporting text for the trailing section.
     * @property {String} trailingIcon - Trailing icon name.
     * @property {String} trailingVideo - URL for trailing video.
     * @property {String} trailingImage - URL for trailing image.
     * @property {String} trailingAvatar - URL for trailing avatar image.
     * @property {Boolean} trailingSwitch - Display trailing switch.
     * @property {Boolean} trailingRadio - Display trailing radio button.
     * @property {Boolean} trailingCheckbox - Display trailing checkblock.
     * @property {Array} trailingActions - Array of trailing actions.
     * @property {Number} badge - Badge number.
     * @property {Boolean} activated - Activated state.
     * @property {Boolean} indeterminate - Indeterminate state for checkblockes or switches.
     * @property {Boolean} selected - Selected state.
     * @property {Boolean} disabled - Disabled state.
     * @property {Object} map - Mapping of component properties.
     */
    static properties = {
        leadingActions: { type: Array },
        leadingCheckbox: { type: Boolean },
        leadingRadio: { type: Boolean },
        leadingSwitch: { type: Boolean },
        leadingAvatar: { type: String },
        leadingImage: { type: String },
        leadingVideo: { type: String },
        leadingIcon: { type: String },
        leadingSupportingText: { type: String },
        headline: { type: String },
        supportingText: { type: String },
        trailingSupportingText: { type: String },
        trailingIcon: { type: String },
        trailingVideo: { type: String },
        trailingImage: { type: String },
        trailingAvatar: { type: String },
        trailingSwitch: { type: Boolean },
        trailingRadio: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingActions: { type: Array },
        badge: { type: Number },
        activated: { type: Boolean, reflect: true },
        indeterminate: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        
    };

    /**
     * Initializes the MDBlockComponent and sets up the property mapping.
     */
    constructor() {
        super();
        
    }

    /**
     * Renders the component using Lit's html template literal.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length ? this.leadingActions.map(item => {
                item.component = item.component || 'icon-button';
                return renderComponent(item);
            }) : nothing}
            ${this.leadingCheckbox ? html`<md-checkblock class="md-block__checkblock" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkblock>` : nothing}
            ${this.leadingRadio ? html`<md-radio-button class="md-block__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>` : nothing}
            ${this.leadingSwitch ? html`<md-switch class="md-block__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>` : nothing}
            ${this.leadingAvatar ? html`<md-image class="md-block__avatar" .variant="${"rounded"}" .src="${this.leadingAvatar}"></md-image>` : nothing}
            ${this.leadingImage ? html`<md-image class="md-block__image" .src="${this.leadingImage}"></md-image>` : nothing}
            ${this.leadingVideo ? html`<md-image class="md-block__video" .ratio="${"3/2"}" .src="${this.leadingVideo}"></md-image>` : nothing}
            ${this.leadingIcon ? html`<md-icon class="md-block__icon" .icon="${this.leadingIcon}"></md-icon>` : nothing}
            ${this.leadingSupportingText ? html`<div class="md-block__supporting-text">${this.leadingSupportingText}</div>` : nothing}
            ${this.headline || this.supportingText ? html`
                <div class="md-block__wrapper">
                    ${this.headline ? html`<div class="md-block__headline">${this.headline}</div>` : nothing}
                    ${this.supportingText ? html`<div class="md-block__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.trailingSupportingText ? html`<div class="md-block__supporting-text">${this.trailingSupportingText}</div>` : nothing}
            ${this.trailingIcon ? html`<md-icon class="md-block__icon" .icon="${this.trailingIcon}"></md-icon>` : nothing}
            ${this.trailingVideo ? html`<md-image class="md-block__video" .ratio="${"3/2"}" .src="${this.trailingVideo}"></md-image>` : nothing}
            ${this.trailingImage ? html`<md-image class="md-block__image" .src="${this.trailingImage}"></md-image>` : nothing}
            ${this.trailingAvatar ? html`<md-image class="md-block__avatar" .variant="${"rounded"}" .src="${this.trailingAvatar}"></md-image>` : nothing}
            ${this.trailingSwitch ? html`<md-switch class="md-block__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>` : nothing}
            ${this.trailingRadio ? html`<md-radio-button class="md-block__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>` : nothing}
            ${this.trailingCheckbox ? html`<md-checkblock class="md-block__checkblock" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkblock>` : nothing}
            ${this.trailingActions?.length ? this.trailingActions.map(item => {
                item.component = item.component || 'icon-button';
                return renderComponent(item);
            }) : nothing}
            
            ${this.badge !== undefined ? html`<md-badge class="md-block__badge" .label="${this.badge}"></md-badge>` : nothing}
        `;
    }

    /**
     * Lifecycle method called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-block");
    }

    /**
     * Called whenever the element's properties are updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has.supportingText) {
            await this.updateComplete;
            const supportingTextElement = this.querySelector(".md-block__wrapper .md-block__supporting-text");
            const style = window.getComputedStyle(supportingTextElement);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (supportingTextElement.scrollHeight > lineHeight) {
                this.classList.add("md-block--three-line");
            } else {
                this.classList.add("md-block--two-line");
            }
        }
    }
}

customElements.define("md-block", MDBlockComponent);
export { MDBlockComponent };
