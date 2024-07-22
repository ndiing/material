import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevChip extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chip variant="assist" icon="image" label="label" @onChipActionClick="${console.log}"></md-chip>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chip variant="filter" label="label" selected @onChipActionClick="${console.log}"></md-chip>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chip variant="input" avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby" label="label" action="image" @onChipActionClick="${console.log}"></md-chip>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chip variant="suggestion" label="label" @onChipActionClick="${console.log}"></md-chip>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chip", DevChip);

export default document.createElement("dev-chip");
