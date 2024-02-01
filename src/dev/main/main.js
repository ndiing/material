import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class MainComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <md-layout-border>
                    <md-layout-border-item region="west" open>
                        <md-navigation-drawer style="width:360px;" .items="${[
                            {label:'Icon',routerLink:'/icon'},
                            {label:'Emoji',routerLink:'/emoji'},
                            {label:'Image',routerLink:'/image'},
                            {label:'Button',routerLink:'/button'},
                            {label:'Fab',routerLink:'/fab'},
                            {label:'Icon Button',routerLink:'/icon-button'},
                            {label:'Segmented Button',routerLink:'/segmented-button'},
                            {label:'Chip',routerLink:'/chip'},
                            {label:'Chip Set',routerLink:'/chip-set'},
                            {label:'Checkbox',routerLink:'/checkbox'},
                            {label:'Radio Button',routerLink:'/radio-button'},
                            {label:'Switch',routerLink:'/switch'},
                            {label:'Badge',routerLink:'/badge'},
                            {label:'List',routerLink:'/list'},
                            {label:'Panel',routerLink:'/panel'},
                            {label:'Dialog',routerLink:'/dialog'},
                            {label:'Drawer',routerLink:'/drawer'},
                            {label:'Navigation Bar',routerLink:'/navigation-bar'},
                            {label:'Navigation Drawer',routerLink:'/navigation-drawer'},
                            {label:'Navigation Rail',routerLink:'/navigation-rail'},
                            {label:'Tooltip',routerLink:'/tooltip'},
                        ]}"></md-navigation-drawer>
                    </md-layout-border-item>
                    <md-layout-border-item region="center" style="padding:24px;">
                        <md-outlet></md-outlet>
                    </md-layout-border-item>
                </md-layout-border>
            <!-- </div> -->
        `;
    }
}

customElements.define("main-component", MainComponent);

export default document.createElement("main-component");
