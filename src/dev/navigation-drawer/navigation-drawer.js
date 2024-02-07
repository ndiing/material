import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationDrawerComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div class="md-layout__item md-layout__item--west" open>
                    <md-navigation-drawer
                        style="height:100%;width:360px;"
                        .items="${[
                            {icon:'image',label:'Label',trailingSupportingText:'24', activated:true},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label'},
                            {divider:true,},
                            {headline:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                        ]}"
                    ></md-navigation-drawer>
                    <!-- <md-navigation-drawer
                        .items="${[
                            {headline:'Label',},
                            {icon:'image',label:'Label',trailingSupportingText:'24', activated:true},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label'},
                            {divider:true,},
                            {headline:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                            {label:'Label',},
                        ]}"
                    ></md-navigation-drawer> -->
                </div>
                <div class="md-layout__item md-layout__item--center">
                    lorem*100
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-drawer-component", NavigationDrawerComponent);

export default document.createElement("navigation-drawer-component");
