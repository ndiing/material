import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class LayoutComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    </div>
                    <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    </div>
                    <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    </div>
                </div>
            </div> -->

            <!-- <div class="md-layout"> -->
                <div class="md-layout__border">
                    <div class="md-layout__border-item md-layout__border-item--west" >
                        west
                    </div>
                    <div class="md-layout__border-item md-layout__border-item--north" >
                        north
                    </div>
                    <div class="md-layout__border-item md-layout__border-item--center">
                        center
                    </div>
                    <div class="md-layout__border-item md-layout__border-item--east" >
                        east
                    </div>
                    <div class="md-layout__border-item md-layout__border-item--south" >
                        south
                    </div>
                </div>
            <!-- </div> -->

        `;
    }

    firstUpdated() {}
}

customElements.define("layout-component", LayoutComponent);

export default document.createElement("layout-component");
