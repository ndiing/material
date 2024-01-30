import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SegmentedButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-segmented-button type="single-select" .items="${[
                        { label:"Label 1", activated:true },
                        { label:"Label 2" },
                        { label:"Label 3" },
                    ]}"></md-segmented-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-segmented-button type="multi-select" .items="${[
                        { label:"Label 1", activated:true },
                        { label:"Label 2", activated:true },
                        { label:"Label 3" },
                    ]}"></md-segmented-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("segmented-button-component", SegmentedButtonComponent);

export default document.createElement('segmented-button-component')
