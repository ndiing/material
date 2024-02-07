import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div class="md-layout__item md-layout__item--south" open>
                    <md-navigation-bar
                        .items="${[
                            {icon:'image',label:'Label',activated:true},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label',badge:'1'},
                            {icon:'image',label:'Label',badge:''},
                        ]}"
                    ></md-navigation-bar>
                    <md-navigation-bar
                        .items="${[
                            {icon:'image',activated:true},
                            {icon:'image',},
                            {icon:'image',badge:'1'},
                            {icon:'image',badge:''},
                        ]}"
                    ></md-navigation-bar>
                </div>
                <div class="md-layout__item md-layout__item--center">
                    lorem*100
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-bar-component", NavigationBarComponent);

export default document.createElement("navigation-bar-component");
