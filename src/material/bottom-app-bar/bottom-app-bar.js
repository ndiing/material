import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDBottomAppBarComponent represents a bottom app bar component.
 *
 * @extends MDComponent
 * @fires MDBottomAppBarComponent#onBottomAppBarIconClick
 * @fires MDBottomAppBarComponent#onBottomAppBarIconButtonClick
 * @fires MDBottomAppBarComponent#onBottomAppBarFabClick
 */
class MDBottomAppBarComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} icon - The icon for the bottom app bar.
     * @property {String} iconButton - The icon button for the bottom app bar.
     * @property {Array} icons - An array of icons for the bottom app bar.
     * @property {Array} iconButtons - An array of icon buttons for the bottom app bar.
     * @property {String} trailingFab - The trailing FAB (Floating Action Button) for the bottom app bar.
     */
    static properties = {
        icon: { type: String },
        iconButton: { type: String },
        icons: { type: Array },
        iconButtons: { type: Array },
        trailingFab: { type: String },
    };

    /**
     * Checks if the bottom app bar has content in the start section.
     *
     * @type {Boolean}
     */
    get hasBottomAppBarStart() {
        return (
            this.icon ||
            this.iconButton ||
            (this.icons && this.icons.length) ||
            (this.iconButtons && this.iconButtons.length)
        );
    }

    /**
     * Checks if the bottom app bar has content in the center section.
     *
     * @type {Boolean}
     */
    get hasBottomAppBarCenter() {
        return false;
    }

    /**
     * Checks if the bottom app bar has content in the end section.
     *
     * @type {Boolean}
     */
    get hasBottomAppBarEnd() {
        return this.trailingFab;
    }

    /**
     * Constructor for MDBottomAppBarComponent.
     */
    constructor() {
        super();
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-bottom-app-bar");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-bottom-app-bar");
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
     * Renders the bottom app bar component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.hasBottomAppBarStart ? html`
                <div class="md-bottom-app-bar__start">
                    ${this.icon ? html`<md-icon class="md-bottom-app-bar__icon" @click="${this.handleBottomAppBarIconClick}">${this.icon}</md-icon>` : nothing}
                    ${this.icons?.map(icon => html`
                        <md-icon class="md-bottom-app-bar__icon" @click="${this.handleBottomAppBarIconClick}">${icon}</md-icon>
                    `)}
                    ${this.iconButton ? html`<md-icon-button class="md-bottom-app-bar__icon-button" .icon="${this.iconButton}" @click="${this.handleBottomAppBarIconButtonClick}"></md-icon-button>` : nothing}
                    ${this.iconButtons?.map(iconButton => html`
                        <md-icon-button class="md-bottom-app-bar__icon-button" .icon="${iconButton}" @click="${this.handleBottomAppBarIconButtonClick}"></md-icon-button>
                    `)}
                </div>
            ` : nothing}
            <div class="md-bottom-app-bar__center">
                <!-- Placeholder for center content -->
            </div>
            ${this.hasBottomAppBarEnd ? html`
                <div class="md-bottom-app-bar__end">
                    ${this.trailingFab ? html`<md-fab class="md-bottom-app-bar__fab" @click="${this.handleBottomAppBarFabClick}" .icon="${this.trailingFab?.icon ?? this.trailingFab}" .ui="${this.trailingFab?.ui ?? 'unelevated'}"></md-fab>` : nothing}
                </div>
            ` : nothing}
        `;
    }

    /**
     * Event handler for the icon click events in the bottom app bar.
     *
     * @param {Event} event - The click event.
     * @fires MDBottomAppBarComponent#onBottomAppBarIconClick
     */
    handleBottomAppBarIconClick(event) {
        this.emit('onBottomAppBarIconClick', { event });
    }

    /**
     * Event handler for the icon button click events in the bottom app bar.
     *
     * @param {Event} event - The click event.
     * @fires MDBottomAppBarComponent#onBottomAppBarIconButtonClick
     */
    handleBottomAppBarIconButtonClick(event) {
        this.emit('onBottomAppBarIconButtonClick', { event });
    }

    /**
     * Event handler for the FAB (Floating Action Button) click events in the bottom app bar.
     *
     * @param {Event} event - The click event.
     * @fires MDBottomAppBarComponent#onBottomAppBarFabClick
     */
    handleBottomAppBarFabClick(event) {
        this.emit('onBottomAppBarFabClick', { event });
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
