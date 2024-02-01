import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * `MDPanelHeaderComponent` is a custom web component representing the header of a panel.
 * @extends MDComponent
 */
class MDPanelHeaderComponent extends MDComponent {
    /**
     * Properties for MDPanelHeaderComponent.
     * @static
     * @type {object}
     * @property {String} leadingIcon - The leading icon for the panel header.
     * @property {String} trailingIcon - The trailing icon for the panel header.
     * @property {String} label - The label for the panel header.
     * @property {String} supportingText - The supporting text for the panel header.
     */
    static properties = {
        leadingIcon: { type: String },
        trailingIcon: { type: String },
        label: { type: String },
        supportingText: { type: String },
    };

    /**
     * Checks if there are leading items in the panel header.
     * @type {boolean}
     */
    get hasLeadingItems() {
        return this.leadingIcon;
    }
    
    /**
     * Checks if there are items in the panel header.
     * @type {boolean}
     */
    get hasItems() {
        return this.label || this.supportingText;
    }
    
    /**
     * Checks if there are trailing items in the panel header.
     * @type {boolean}
     */
    get hasTrailingItems() {
        return this.trailingIcon;
    }

    /**
     * Constructs an instance of MDPanelHeaderComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__header");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__header");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {}

    /**
     * Renders the content of the MDPanelHeaderComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.hasLeadingItems?html`
                <div class="md-panel__start">
                    ${this.leadingIcon?html`<md-icon-button class="md-panel__icon" .icon="${this.leadingIcon}" @click="${this.handlePanelIconClick}"></md-icon-button>`:nothing}
                </div>
            `:nothing}
            ${this.hasItems?html`
                <div class="md-panel__center">
                    ${this.label?html`<div class="md-panel__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-panel__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${this.hasTrailingItems?html`
                <div class="md-panel__end">
                    ${this.trailingIcon?html`<md-icon-button class="md-panel__icon" .icon="${this.trailingIcon}" @click="${this.handlePanelIconClick}"></md-icon-button>`:nothing}
                </div>
            `:nothing}
            `;
    }

    /**
     * Handles the click event on a panel icon.
     * @param {Event} event - The click event.
     */
    handlePanelIconClick(event) {
        this.emit("onPanelIconClick", { event });
    }
}

/**
 * Define the custom element "md-panel-header" with MDPanelHeaderComponent.
 */
customElements.define("md-panel-header", MDPanelHeaderComponent);

export { MDPanelHeaderComponent };

/**
 * `MDPanelBodyComponent` is a custom web component representing the body of a panel.
 * @extends MDComponent
 */
class MDPanelBodyComponent extends MDComponent {
    /**
     * Properties for MDPanelBodyComponent.
     * @static
     * @type {object}
     */
    static properties = {};

    /**
     * Constructs an instance of MDPanelBodyComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__body");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__body");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {}

    /**
     * Renders the content of the MDPanelBodyComponent.
     */
    render() {}
}

/**
 * Define the custom element "md-panel-body" with MDPanelBodyComponent.
 */
customElements.define("md-panel-body", MDPanelBodyComponent);

export { MDPanelBodyComponent };

/**
 * `MDPanelFooterComponent` is a custom web component representing the footer of a panel.
 * @extends MDComponent
 */
class MDPanelFooterComponent extends MDComponent {
    /**
     * Properties for MDPanelFooterComponent.
     * @static
     * @type {object}
     */
    static properties = {};

    /**
     * Constructs an instance of MDPanelFooterComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__footer");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__footer");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {}

    /**
     * Renders the content of the MDPanelFooterComponent.
     */
    render() {}
}

/**
 * Define the custom element "md-panel-footer" with MDPanelFooterComponent.
 */
customElements.define("md-panel-footer", MDPanelFooterComponent);

export { MDPanelFooterComponent };

/**
 * `MDPanelScrimComponent` is a custom web component representing the scrim of a panel.
 * @extends MDComponent
 */
class MDPanelScrimComponent extends MDComponent {
    /**
     * Properties for MDPanelScrimComponent.
     * @static
     * @type {object}
     */
    static properties = {};

    /**
     * Constructs an instance of MDPanelScrimComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__scrim");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__scrim");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {}

    /**
     * Renders the content of the MDPanelScrimComponent.
     */
    render() {}
}

/**
 * Define the custom element "md-panel-scrim" with MDPanelScrimComponent.
 */
customElements.define("md-panel-scrim", MDPanelScrimComponent);

export { MDPanelScrimComponent };

/**
 * `MDPanelComponent` is a custom web component representing a panel.
 * @extends MDComponent
 */
class MDPanelComponent extends MDComponent {
    /**
     * Properties for MDPanelComponent.
     * @static
     * @type {object}
     * @property {String} ui - The UI style for the panel.
     * @property {String} position - The position of the panel (e.g., "top", "right", "bottom", "left").
     * @property {Boolean} open - Indicates whether the panel is open.
     * @property {Boolean} modal - Indicates whether the panel is modal.
     */
    static properties = {
        ui: { type: String },
        position: { type: String }, // drawer position
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
    };

    /**
     * Constructs an instance of MDPanelComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove(`md-panel--dialog`);
            this.classList.remove(`md-panel--drawer`);

            if (this.ui) {
                this.classList.add(`md-panel--${this.ui}`);
            }
        }

        if (changedProperties.has("position")) {
            this.classList.remove(`md-panel--top`);
            this.classList.remove(`md-panel--right`);
            this.classList.remove(`md-panel--bottom`);
            this.classList.remove(`md-panel--left`);

            if (this.position) {
                this.classList.add(`md-panel--${this.position}`);
            }
        }

        if (changedProperties.has("open")) {
            this.removePanelScrim();
            this.createPanelScrim();

            this.style.setProperty("transition-property", "all");
        }
    }

    /**
     * Renders the content of the MDPanelComponent.
     */
    render() {}

    /**
     * Creates the panel scrim.
     */
    createPanelScrim() {
        if (!this.panelScrim && this.open && (this.ui === "dialog" || this.ui === "drawer")) {
            this.panelScrim = document.createElement("md-panel-scrim");

            this.handlePanelScrimClick = this.handlePanelScrimClick.bind(this);
            this.panelScrim.addEventListener("click", this.handlePanelScrimClick);

            document.body.append(this.panelScrim);
        }
    }

    /**
     * Removes the panel scrim.
     */
    removePanelScrim() {
        if (this.panelScrim) {
            this.panelScrim.removeEventListener("click", this.handlePanelScrimClick);

            this.panelScrim.remove();

            this.panelScrim = null;
        }
    }

    /**
     * Shows the panel.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the panel.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the panel's visibility.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     * Handles the click event on the panel scrim.
     * @param {Event} event - The click event.
     */
    handlePanelScrimClick(event) {
        this.close();

        this.emit("onPanelScrimClick", { event });
    }
}

/**
 * Define the custom element "md-panel" with MDPanelComponent.
 */
customElements.define("md-panel", MDPanelComponent);

export { MDPanelComponent };
