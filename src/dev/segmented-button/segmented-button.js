import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class SegmentedButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="single-select" .data="${[
                            {label:'Label',activated:true},
                            {label:'Label'},
                            {label:'Label'},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="multi-select" .data="${[
                            {label:'Label',activated:true},
                            {label:'Label',activated:true},
                            {label:'Label'},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define("segmented-button-component", SegmentedButtonComponent);

export default document.createElement("segmented-button-component");
