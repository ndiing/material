import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationRailComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
            <div class="md-layout__item md-layout__item--west" open>
                    <md-navigation-rail
                        style="height:100%;"
                        .items="${[
                            {icon:'image',label:'Label',activated:true},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label',badge:'1'},
                            {icon:'image',label:'Label',badge:''},
                        ]}"
                    ></md-navigation-rail>
                    <!-- <md-navigation-rail
                        .items="${[
                            {icon:'image',activated:true},
                            {icon:'image',},
                            {icon:'image',badge:'1'},
                            {icon:'image',badge:''},
                        ]}"
                    ></md-navigation-rail> -->
                </div>
                <div class="md-layout__item md-layout__item--center">
                    lorem*100
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-rail-component", NavigationRailComponent);

export default document.createElement("navigation-rail-component");
