import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * Represents a segmented button component that allows single or multiple selection of its items.
 * @element md-segmented-button
 * @extends MDComponent
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - Triggered when a segmented button item is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {

    /**
     * @property {Array} buttons - Array of button items to render.
     * @property {Boolean} singleSelection - Indicates single selection mode.
     * @property {Boolean} multiSelection - Indicates multiple selection mode.
     */
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelection: { type: Boolean },
        multiSelection: { type: Boolean },
    };

    /**
     * Renders the segmented button component.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.buttons.map(item => {
            item.classMap={'md-segmented-button__item':true}
            item.component=item.component||'button'
            item.variant=item.variant||'outlined'
            item.icon=item.selected?'check':''
            item.onButtonClick=this.handleSegmentedButtonItemClick
            return renderComponent(item)
        });
    }

    /**
     * Enhances connectedCallback to add specific CSS classes for segmented button styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    /**
     * Handles the click event on segmented button items to toggle selection based on mode.
     * @private
     */
    handleSegmentedButtonItemClick(event) {
        if (this.multiSelection || this.singleSelection) {
            const data = event.currentTarget.data;
            if (this.multiSelection) {
                data.selected = !data.selected;
            } else if (this.singleSelection) {
                this.buttons.forEach((item) => {
                    item.selected = item === data;
                });
            }
            this.requestUpdate();
        }
        this.emit("onSegmentedButtonItemClick", event);
    }
}
customElements.define("md-segmented-button", MDSegmentedButtonComponent);
export { MDSegmentedButtonComponent };
