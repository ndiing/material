import { MDComponent } from "../component/component.js";
import { renderChip } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-chips
 * @fires MDChipsComponent#onChipClick - {{desc}}
 */
class MDChipsComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} items - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     */
    static properties = {
        items: { type: Array },
        multiSelection: { type: Boolean },
    };

    /**
     * {{desc}}
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.items?.map(item => {
            item.onChipClick=this.handleChipClick.bind(this)
            item.onChipActionClick=this.handleChipActionClick.bind(this)
            return renderChip(item)
        });
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleChipActionClick(event) {
        const data = event.currentTarget.data;
        const index = this.items.indexOf(data);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.requestUpdate();
    }
}
customElements.define("md-chips", MDChipsComponent);
export { MDChipsComponent };
