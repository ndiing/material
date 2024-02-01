import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";

/**
 * `MDDialogComponent` is a custom web component representing a dialog.
 * It extends the `MDPanelComponent` class.
 * @extends MDPanelComponent
 */
class MDDialogComponent extends MDPanelComponent {
    /**
     * Properties for MDDialogComponent.
     * Inherits properties from MDPanelComponent.
     * @static
     * @type {object}
     */
    static properties = Object.assign(MDPanelComponent.properties, {});

    /**
     * Constructs an instance of MDDialogComponent.
     */
    constructor() {
        super();

        // default
        this.ui = 'dialog';
        this.modal = true;
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Additional first update logic specific to MDDialogComponent
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        // Additional update logic specific to MDDialogComponent
    }

    /**
     * Renders the content of the MDDialogComponent.
     * This method should be implemented to define the appearance of the dialog.
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // Implementation specific to rendering the dialog
        // ...
    }
}

/**
 * Define the custom element "md-dialog" with MDDialogComponent.
 */
customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
