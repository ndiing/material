import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";
import { MDPoperController } from "../poper/poper";

class MDTooltipComponent extends MDPanelComponent {
    static properties = Object.assign(MDPanelComponent.properties, {
        type: { type: String },
        button: { type: String },
    });

    get tooltipButton() {
        return document.body.querySelector(`#${this.button}`);
    }

    constructor() {
        super();

        // default
        // this.label = "Label";
        this.type = "plain";
        // this.type='rich'
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip");
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.poper = new MDPoperController(this, {
            // container:this,
            button: this.tooltipButton,
            placement: "bottom",
            offset: 4,
        });
    }

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

    render() {
        // Implement your rendering logic if needed
    }

    show() {
        super.show();
        this.poper.setPlacement();
    }

    close() {
        super.close();
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };
