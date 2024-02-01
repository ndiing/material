import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SegmentedButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-segmented-button type="single-select" .items="${[
                        { label:"Label 1", activated:true },
                        { label:"Label 2" },
                        { label:"Label 3" },
                    ]}"></md-segmented-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-segmented-button type="multi-select" .items="${[
                        { label:"Label 1", activated:true },
                        { label:"Label 2", activated:true },
                        { label:"Label 3" },
                    ]}"></md-segmented-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("segmented-button-component", SegmentedButtonComponent);

export default document.createElement("segmented-button-component");
