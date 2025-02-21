import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
/**
 * MDBadgeComponent class responsible for displaying a badge with a label.
 * @extends MdComponent
 * @element md-badge
 */
class MDBadgeComponent extends MdComponent {
    /**
     * The properties of the component.
     * @property {number} [label] - The label to display in the badge.
     * @property {number} [max=999] - The maximum value to display.
     */
    static properties = {
        label: { type: Number },
        max: { type: Number },
    };

    /**
     * Creates an instance of the MDBadgeComponent class.
     */
    constructor() {
        super();

        this.max = 999;
    }

    // /**
    //  * Renders the badge with the label.
    //  * @returns {TemplateResult|string} The rendered template or nothing if no label is set.
    //  */
    render() {
        if (this.label) {
            if (this.label > this.max) {
                return `${this.max}+`;
            } else {
                return this.label;
            }
        }
    }

    // /**
    //  * Called when the element is connected to the DOM.
    //  * Adds the 'md-badge' class to the element.
    //  */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
