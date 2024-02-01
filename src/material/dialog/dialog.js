import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";

class MDDialogComponent extends MDPanelComponent {
    static properties = Object.assign(MDPanelComponent.properties,{
    });

    constructor() {
        super();

        // default
        // this.label = "Label";

        this.ui='dialog'
        this.modal=true
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog");
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties)
    }

    updated(changedProperties) {
        super.updated(changedProperties)
    }

    render() {
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
