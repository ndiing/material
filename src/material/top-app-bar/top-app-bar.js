import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDSheetComponent } from "../sheet/sheet";

/**
 * MDTopAppBarComponent represents a top app bar component.
 *
 * @extends MDSheetComponent
 * @fires MDTopAppBarComponent#onTopAppBarIconClick
 * @fires MDTopAppBarComponent#onTopAppBarIconButtonClick
 */
class MDTopAppBarComponent extends MDSheetComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} label - The label for the top app bar.
     * @property {String} supportingText - The supporting text for the top app bar.
     * @property {String} icon - The icon for the top app bar.
     * @property {String} trailingIcon - The trailing icon for the top app bar.
     * @property {String} iconButton - The icon button for the top app bar.
     * @property {String} trailingIconButton - The trailing icon button for the top app bar.
     */
    static properties = {
        ...MDSheetComponent.properties,
        label: { type: String },
        supportingText: { type: String },
        icon: { type: String },
        trailingIcon: { type: String },
        iconButton: { type: String },
        trailingIconButton: { type: String },
    };

    /**
     * Checks if the top app bar has content in the start section.
     *
     * @type {Boolean}
     */
    get hasTopAppBarStart() {
        return (
            this.icon ||
            this.iconButton
        );
    }

    /**
     * Checks if the top app bar has content in the center section.
     *
     * @type {Boolean}
     */
    get hasTopAppBarCenter() {
        return this.label || this.supportingText;
    }

    /**
     * Checks if the top app bar has content in the end section.
     *
     * @type {Boolean}
     */
    get hasTopAppBarEnd() {
        return (
            this.trailingIcon ||
            this.trailingIconButton
        );
    }

    /**
     * Constructor for MDTopAppBarComponent.
     */
    constructor() {
        super();
        this.region='north';
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-top-app-bar");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-top-app-bar");
    }

    // /**
    //  * Lifecycle callback when the element is first updated.
    //  *
    //  * @param {Map} changedProperties - A Map of changed properties.
    //  */
    // firstUpdated(changedProperties) {}

    // /**
    //  * Lifecycle callback when the element is updated.
    //  *
    //  * @param {Map} changedProperties - A Map of changed properties.
    //  */
    // updated(changedProperties) {}

    /**
     * Renders the top app bar component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            <div class="md-top-app-bar__container">
                ${this.hasTopAppBarStart ? html`
                    <div class="md-top-app-bar__start">
                        ${this.icon ? html`<md-icon class="md-top-app-bar__icon" @click="${this.handleTopAppBarIconClick}">${this.icon}</md-icon>` : nothing}
                        ${this.iconButton ? html`<md-icon-button class="md-top-app-bar__icon-button" .icon="${this.iconButton}" @click="${this.handleTopAppBarIconButtonClick}"></md-icon-button>` : nothing}
                    </div>
                ` : nothing}
                ${this.hasTopAppBarCenter ? html`
                    <div class="md-top-app-bar__center">
                        ${this.label ? html`<div class="md-top-app-bar__label">${this.label}</div>` : nothing}
                        ${this.supportingText ? html`<div class="md-top-app-bar__supporting-text">${this.supportingText}</div>` : nothing}
                    </div>
                ` : nothing}
                ${this.hasTopAppBarEnd ? html`
                    <div class="md-top-app-bar__end">
                        ${this.trailingIcon ? html`<md-icon class="md-top-app-bar__icon" @click="${this.handleTopAppBarIconClick}">${this.trailingIcon}</md-icon>` : nothing}
                        ${this.trailingIconButton ? html`<md-icon-button class="md-top-app-bar__icon-button" .icon="${this.trailingIconButton}" @click="${this.handleTopAppBarIconButtonClick}"></md-icon-button>` : nothing}
                    </div>
                ` : nothing}
            </div>
        `;
    }

    /**
     * Event handler for the icon click events in the top app bar.
     *
     * @param {Event} event - The click event.
     * @fires MDTopAppBarComponent#onTopAppBarIconClick
     */
    handleTopAppBarIconClick(event) {
        this.emit('onTopAppBarIconClick', { event });
    }

    /**
     * Event handler for the icon button click events in the top app bar.
     *
     * @param {Event} event - The click event.
     * @fires MDTopAppBarComponent#onTopAppBarIconButtonClick
     */
    handleTopAppBarIconButtonClick(event) {
        this.emit('onTopAppBarIconButtonClick', { event });
    }
}

customElements.define("md-top-app-bar", MDTopAppBarComponent);

export { MDTopAppBarComponent };
