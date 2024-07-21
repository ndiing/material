import { MDComponent } from "../component/component.js";
class MDLayoutItemComponent extends MDComponent {
    static properties = {
        expanded: { type: Number },
        medium: { type: Number },
        compact: { type: Number },
        region: { type: String },
    };

    connectedCallback() {
        super.connectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("region")) {
            const classMap = {
                "md-layout-border__item": true,
                "md-layout-border__item--north": this.region === "north",
                "md-layout-border__item--east": this.region === "east",
                "md-layout-border__item--south": this.region === "south",
                "md-layout-border__item--west": this.region === "west",
                "md-layout-border__item--center": this.region === "center",
            };
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
        if (changedProperties.has("expanded")) {
            const classMap = {
                "md-layout-column__item": true,
            };
            for (let i = 1; i <= 12; i++) {
                classMap[`md-layout-column__item--expanded${i}`] = this.expanded === i;
            }
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
        if (changedProperties.has("medium")) {
            const classMap = {
                "md-layout-column__item": true,
            };
            for (let i = 1; i <= 8; i++) {
                classMap[`md-layout-column__item--medium${i}`] = this.medium === i;
            }
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
        if (changedProperties.has("compact")) {
            const classMap = {
                "md-layout-column__item": true,
            };
            for (let i = 1; i <= 4; i++) {
                classMap[`md-layout-column__item--compact${i}`] = this.compact === i;
            }
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
    }
}
customElements.define("md-layout-item", MDLayoutItemComponent);
export { MDLayoutItemComponent };
