import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";
/**
 * A container component for displaying a list of chips.
 * @element md-chips
 * @extends MDComponent
 * @fires MDChipsComponent#onChipClick - Event emitted when a chip is clicked.
 */
class MDChipsComponent extends MDComponent {
    /**
     * Defines the properties of the MDChipsComponent.
     * @property {Array} list - The list of chip data objects to render.
     * @property {Boolean} multiSelection - Indicates whether multiple chips can be selected.
     */
    static properties = {
        list: { type: Array },
        multiSelection: { type: Boolean },
    };
    /**
     * Renders the list of chips.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.list?.map(item => {
            item.component=item.component||'chip'
            item.onChipClick=this.handleChipClick
            item.onChipActionClick=this.handleChipActionClick
            return renderComponent(item)
        });
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    /**
     * Handles the click event on a chip.
     * @param {Event} event - The click event object.
     * @private
     */
    handleChipClick(event) {
        const data = event.currentTarget.data;
        if (this.multiSelection) {
            data.selected = !data.selected;
            this.requestUpdate();
        }

        this.emit("onChipClick", event);
    }
    /**
     * Handles the chip action click event.
     * @param {Event} event - The chip action click event object.
     * @private
     */
    handleChipActionClick(event) {
        const data = event.currentTarget.data;
        const index = this.list.indexOf(data);
        if (index > -1) {
            this.list.splice(index, 1);
        }

        this.requestUpdate();
    }
}
customElements.define("md-chips", MDChipsComponent);
export { MDChipsComponent };
