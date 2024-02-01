import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";
import { MDPoperController } from "../poper/poper";

/**
 * `MDTooltipComponent` is a custom web component representing a tooltip.
 * @extends MDPanelComponent
 */
class MDTooltipComponent extends MDPanelComponent {
    /**
     * Properties for MDTooltipComponent.
     * @static
     * @type {object}
     * @property {String} type - The type of the tooltip (e.g., "plain" or "rich").
     * @property {String} button - The ID of the button associated with the tooltip.
     */
    static properties = Object.assign(MDPanelComponent.properties, {
        type: { type: String },
        button: { type: String },
    });

    /**
     * Gets the tooltip button element.
     * @returns {HTMLElement} The tooltip button element.
     */
    get tooltipButton() {
        return document.body.querySelector(`#${this.button}`);
    }

    /**
     * Constructs an instance of MDTooltipComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
        this.type = "plain";
        // this.type='rich'
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.poper = new MDPoperController(this, {
            // container:this,
            button: this.tooltipButton,
            placement: "bottom",
            offset: 4,
        });
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("type")) {
            this.classList.remove(`md-tooltip--plain`);
            this.classList.remove(`md-tooltip--rich`);

            if (this.type) {
                this.classList.add(`md-tooltip--${this.type}`);
            }
        }
    }

    /**
     * Renders the content of the MDTooltipComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // Implement your rendering logic if needed
    }

    /**
     * Shows the tooltip and updates its placement.
     */
    show() {
        super.show();
        this.poper.setPlacement();
    }

    /**
     * Closes the tooltip.
     */
    close() {
        super.close();
    }
}

/**
 * Define the custom element "md-tooltip" with MDTooltipComponent.
 */
customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
