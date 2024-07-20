import { MDComponent } from "../component/component.js";

class MDLayoutComponent extends MDComponent {
    static properties = {
        variant: { type: String },
    };

    connectedCallback() {
        super.connectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const classMap = {
                "md-layout-border": this.variant === "border",
                "md-layout-column": this.variant === "column",
            };
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
    }
}
customElements.define("md-layout", MDLayoutComponent);
export { MDLayoutComponent };
