import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevPopperComponent extends MDComponent {
    get tooltip() {
        return this.querySelector("#tooltip");
    }

    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip"
                        variant="plain"
                        >tooltip</md-tooltip
                    >
                    <md-button
                        label="button"
                        @click="${this.handleButtonClick}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    handleButtonClick(event) {
        this.tooltip.toggle(event.currentTarget);
    }
}

customElements.define("dev-popper", DevPopperComponent);

export default document.createElement("dev-popper");
