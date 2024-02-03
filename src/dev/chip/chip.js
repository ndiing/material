import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ChipComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-chip label="Label"></md-chip>
                    <md-chip label="Label" trailingIcon="close"></md-chip>
                    <md-chip avatar="https://api.dicebear.com/7.x/icons/svg?seed=Oliver" label="Label" trailingIcon="close"></md-chip>
                    <md-chip icon="image" label="Label"></md-chip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-chip activated label="Label"></md-chip>
                    <md-chip activated label="Label" trailingIcon="close"></md-chip>
                    <md-chip activated avatar="https://api.dicebear.com/7.x/icons/svg?seed=Oliver" label="Label" trailingIcon="close"></md-chip>
                    <md-chip activated icon="image" label="Label"></md-chip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-chip-set
                        .type="${'single-select'}"
                        .items="${[
                            {label:"Label",activated:true},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                        ]}"
                    ></md-chip-set>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-chip-set
                        .type="${'multi-select'}"
                        .items="${[
                            {label:"Label",activated:true},
                            {label:"Label",activated:true},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                        ]}"
                    ></md-chip-set>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("chip-component", ChipComponent);

export default document.createElement("chip-component");
