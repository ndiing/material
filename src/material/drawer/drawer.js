import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";

class MDDrawerComponent extends MDPanelComponent {
    static properties = Object.assign(MDPanelComponent.properties,{
    });

    constructor() {
        super();

        // default
        // this.label = "Label";

        this.ui='drawer'
        this.modal=true
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-drawer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-drawer");
    }

    firstUpdated(changedProperties) {super.firstUpdated(changedProperties)}

    updated(changedProperties) {super.updated(changedProperties)}

    render() {
    }
}

customElements.define("md-drawer", MDDrawerComponent);

export { MDDrawerComponent };
