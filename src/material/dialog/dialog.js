import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";

class MDDialogComponent extends MDPanelComponent {
    static properties = Object.assign(MDPanelComponent.properties, {});

    constructor() {
        super();

        // default
        this.ui = "dialog";
        this.modal = true;
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
        super.firstUpdated(changedProperties);
        // Additional first update logic specific to MDDialogComponent
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        // Additional update logic specific to MDDialogComponent
    }

    render() {
        // Implementation specific to rendering the dialog
        // ...
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
