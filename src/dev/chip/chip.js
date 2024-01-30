import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ChipComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip label="Label"></md-chip>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip leadingIcon="image" label="Label"></md-chip>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip avatar="https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50" label="Label"></md-chip>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip trailingIcon="image" label="Label"></md-chip>
                </div>
            </div>
        `;
    }
}

customElements.define("chip-component", ChipComponent);

export default document.createElement('chip-component')
