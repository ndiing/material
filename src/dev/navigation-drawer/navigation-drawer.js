import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationDrawerComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-navigation-drawer
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
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-navigation-drawer
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
                    ></md-navigation-drawer>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-drawer-component", NavigationDrawerComponent);

export default document.createElement("navigation-drawer-component");
