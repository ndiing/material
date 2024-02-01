import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class PanelComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel>
                        <md-panel-header
                            label="Basic dialog title"
                            supportingText="Supporting text"
                            leadingIcon="arrow_back"
                            trailingIcon="close"
                        ></md-panel-header>
                        <md-panel-body>
                            A dialog is a type of modal window that
                            appears in front of app content to provide
                            critical information, or ask for decision.
                        </md-panel-body>
                        <md-panel-footer>
                            <md-button label="Enabled"></md-button>
                            <md-button label="Enabled"></md-button>
                        </md-panel-footer>
                    </md-panel>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel ui="dialog" id="panel0" modal @onPanelIconClick="${() => panel0.toggle()}">
                        <md-panel-header
                            label="Basic dialog title"
                            supportingText="Supporting text"
                            leadingIcon="arrow_back"
                            trailingIcon="close"
                        ></md-panel-header>
                        <md-panel-body>
                            A dialog is a type of modal window that
                            appears in front of app content to provide
                            critical information, or ask for decision.
                        </md-panel-body>
                        <md-panel-footer>
                            <md-button label="Enabled"></md-button>
                            <md-button label="Enabled"></md-button>
                        </md-panel-footer>
                    </md-panel>
                    <md-button ui="filled-tonal" label="panel0 modal" @click="${() => {panel0.modal=true;panel0.toggle();}}"></md-button>
                    <md-button ui="filled-tonal" label="panel0" @click="${() => {panel0.modal=false;panel0.toggle();}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel style="height:64px;" ui="drawer" position="top" id="panel1" modal @onPanelIconClick="${() => panel1.toggle()}">
                        <md-panel-header
                            label="Drawer top"
                        ></md-panel-header>
                        <md-panel-body></md-panel-body>
                    </md-panel>
                    <md-button ui="filled-tonal" label="panel1 modal" @click="${() => {panel1.modal=true;panel1.toggle();}}"></md-button>
                    <md-button ui="filled-tonal" label="panel1" @click="${() => {panel1.modal=false;panel1.toggle();}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel style="width:360px;" ui="drawer" position="right" id="panel2" modal @onPanelIconClick="${() => panel2.toggle()}">
                        <md-panel-header
                            label="Drawer right"
                        ></md-panel-header>
                        <md-panel-body></md-panel-body>
                    </md-panel>
                    <md-button ui="filled-tonal" label="panel2 modal" @click="${() => {panel2.modal=true;panel2.toggle();}}"></md-button>
                    <md-button ui="filled-tonal" label="panel2" @click="${() => {panel2.modal=false;panel2.toggle();}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel style="height:80px;" ui="drawer" position="bottom" id="panel3" modal @onPanelIconClick="${() => panel3.toggle()}">
                        <md-panel-header
                            label="Drawer bottom"
                        ></md-panel-header>
                        <md-panel-body></md-panel-body>
                    </md-panel>
                    <md-button ui="filled-tonal" label="panel3 modal" @click="${() => {panel3.modal=true;panel3.toggle();}}"></md-button>
                    <md-button ui="filled-tonal" label="panel3" @click="${() => {panel3.modal=false;panel3.toggle();}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-panel style="width:360px;" ui="drawer" position="left" id="panel4" modal @onPanelIconClick="${() => panel4.toggle()}">
                        <md-panel-header
                            label="Drawer left"
                        ></md-panel-header>
                        <md-panel-body></md-panel-body>
                    </md-panel>
                    <md-button ui="filled-tonal" label="panel4 modal" @click="${() => {panel4.modal=true;panel4.toggle();}}"></md-button>
                    <md-button ui="filled-tonal" label="panel4" @click="${() => {panel4.modal=false;panel4.toggle();}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("panel-component", PanelComponent);

export default document.createElement("panel-component");
