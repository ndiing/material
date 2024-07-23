import { MDComponent } from "../component/component.js";
import { renderButton } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-segmented-button
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - {{desc}}
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} buttons - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     */
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelection: { type: Boolean },
        multiSelection: { type: Boolean },
    };

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return this.buttons.map(item => {
            item.classMap={'md-segmented-button__item':true}
            item.variant=item.variant||'outlined'
            item.icon=item.selected?'check':''
            item.onButtonClick=this.handleSegmentedButtonItemClick.bind(this)
            return renderButton(item)
        });
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
