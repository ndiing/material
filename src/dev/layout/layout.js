import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class LayoutComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <!-- <md-layout-grid>
                    <md-layout-grid-item expanded="4" medium="4" compact="4">
                        4
                    </md-layout-grid-item>
                    <md-layout-grid-item expanded="4" medium="4" compact="4">
                        4
                    </md-layout-grid-item>
                    <md-layout-grid-item expanded="4" medium="4" compact="4">
                        4
                    </md-layout-grid-item>
                </md-layout-grid> -->
            <!-- </div> -->

            <!-- <div class="md-layout"> -->
                <md-layout-border >
                    <md-layout-border-item region="west" id="west" open>
                        <div>west</div>
                    </md-layout-border-item>
                    <md-layout-border-item region="north" id="north" open>
                        <div>north</div>
                    </md-layout-border-item>
                    <md-layout-border-item region="center" id="center" open>
                        <md-button label="west" ui="filled-tonal" @click="${() => west.toggle()}"></md-button>
                        <md-button label="north" ui="filled-tonal" @click="${() => north.toggle()}"></md-button>
                        <md-button label="east" ui="filled-tonal" @click="${() => east.toggle()}"></md-button>
                        <md-button label="south" ui="filled-tonal" @click="${() => south.toggle()}"></md-button>
                    </md-layout-border-item>
                    <md-layout-border-item region="east" id="east" open>
                        <div>east</div>
                    </md-layout-border-item>
                    <md-layout-border-item region="south" id="south" open>
                        <div>south</div>
                    </md-layout-border-item>
                </md-layout-border>
            <!-- </div> -->

        `;
    }

    firstUpdated() {}
}

customElements.define("layout-component", LayoutComponent);

export default document.createElement("layout-component");

// <md-layout></md-layout>
// <md-layout-grid></md-layout-grid>
// <md-layout-grid-item></md-layout-grid-item>
// <md-layout-border></md-layout-border>
// <md-layout-border-item></md-layout-border-item>
