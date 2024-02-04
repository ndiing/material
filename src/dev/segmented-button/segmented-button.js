import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SegmentedButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-segmented-button
                        .type="${'single-select'}"
                        .items="${[
                            {label:'Label',activated:true},
                            {label:'Label'},
                            {label:'Label'},
                        ]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-segmented-button
                        .type="${'multi-select'}"
                        .items="${[
                            {label:'Label',activated:true},
                            {label:'Label',activated:true},
                            {label:'Label'},
                        ]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("segmented-button-component", SegmentedButtonComponent);

export default document.createElement("segmented-button-component");
