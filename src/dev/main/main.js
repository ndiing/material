import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class MainComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__border">
                    <div class="md-layout__border-item md-layout__border-item--west">
                        <md-navigation-drawer style="width:360px;" ui="drawer" position="left" open .items="${[
                            {label:'icon',routerLink:'/icon'},
                            {label:'emoji',routerLink:'/emoji'},
                            {label:'image',routerLink:'/image'},
                            {label:'button',routerLink:'/button'},
                            {label:'fab',routerLink:'/fab'},
                            {label:'icon-button',routerLink:'/icon-button'},
                            {label:'segmented-button',routerLink:'/segmented-button'},
                            {label:'chip',routerLink:'/chip'},
                            {label:'chip-set',routerLink:'/chip-set'},
                            {label:'checkbox',routerLink:'/checkbox'},
                            {label:'radio-button',routerLink:'/radio-button'},
                            {label:'switch',routerLink:'/switch'},
                            {label:'badge',routerLink:'/badge'},
                            {label:'list',routerLink:'/list'},
                            {label:'panel',routerLink:'/panel'},
                            {label:'navigation-bar',routerLink:'/navigation-bar'},
                            {label:'navigation-drawer',routerLink:'/navigation-drawer'},
                            {label:'navigation-rail',routerLink:'/navigation-rail'},
                            {label:'tooltip',routerLink:'/tooltip'},
                        ]}"></md-navigation-drawer>
                    </div>
                    <div class="md-layout__border-item md-layout__border-item--center">
                        <md-outlet></md-outlet>
                    </div>
                </div>
            <!-- </div> -->
        `;
    }
}

customElements.define("main-component", MainComponent);

export default document.createElement("main-component");
