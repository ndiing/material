import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardComponent } from "../card/card.js";
import { MDPoperController } from "../poper/poper.js";

/**
 * MDTooltipComponent represents a tooltip component.
 *
 * @extends MDCardComponent
 * @fires MDTooltipComponent#onTooltipScrimClick
 */
class MDTooltipComponent extends MDCardComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Boolean} open - Indicates whether the tooltip is open.
     * @property {String} type - The type of the tooltip (e.g., "plain" or "rich").
     */
    static properties = Object.assign(MDCardComponent.properties, {
        open: { type: Boolean, reflect: true },
        type: { type: String },
        button: { type: String },
    });

    /**
     * Constructor for MDTooltipComponent.
     */
    constructor() {
        super();

        // Default type is 'plain'
        this.type = 'plain';
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.poper=new MDPoperController(this,{
            button: document.querySelector(this.button),
            // container,
            placement:'bottom',
            offset:4,
        })
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("type")) {
            [
                'plain',
                'rich',
            ].forEach((type) => {
                this.classList.remove(`md-tooltip--${type}`);
            });
            if (this.type) {
                this.type.split(" ").forEach((type) => {
                    this.classList.add(`md-tooltip--${type}`);
                });
            }
        }
    }

    /**
     * Shows the tooltip.
     */
    show() {
        this.open = true;
        this.poper.setPlacement()
    }

    /**
     * Closes the tooltip.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the tooltip's visibility.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

// Define the component
customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
