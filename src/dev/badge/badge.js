import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class BadgeComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-badge label=""></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="11"></md-badge>
                    <md-badge label="111"></md-badge>
                    <md-badge label="1111"></md-badge>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("badge-component", BadgeComponent);

export default document.createElement("badge-component");
