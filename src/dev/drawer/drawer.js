import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class DrawerComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-drawer id="drawer_top" position="top">
                        <md-panel-header
                            label="Drawer top"
                            trailingIcon="close"
                            @onPanelIconClick="${() => drawer_top.toggle()}"
                        ></md-panel-header>
                    </md-drawer>
                    <md-button ui="filled-tonal" label="drawer top" @click="${() => drawer_top.toggle()}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-drawer id="drawer_right" position="right">
                        <md-panel-header
                            label="Drawer right"
                            trailingIcon="close"
                            @onPanelIconClick="${() => drawer_right.toggle()}"
                        ></md-panel-header>
                    </md-drawer>
                    <md-button ui="filled-tonal" label="drawer right" @click="${() => drawer_right.toggle()}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-drawer id="drawer_bottom" position="bottom">
                        <md-panel-header
                            label="Drawer bottom"
                            trailingIcon="close"
                            @onPanelIconClick="${() => drawer_bottom.toggle()}"
                        ></md-panel-header>
                    </md-drawer>
                    <md-button ui="filled-tonal" label="drawer bottom" @click="${() => drawer_bottom.toggle()}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-drawer id="drawer_left" position="left">
                        <md-panel-header
                            label="Drawer left"
                            trailingIcon="close"
                            @onPanelIconClick="${() => drawer_left.toggle()}"
                        ></md-panel-header>
                    </md-drawer>
                    <md-button ui="filled-tonal" label="drawer left" @click="${() => drawer_left.toggle()}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("drawer-component", DrawerComponent);

export default document.createElement("drawer-component");
