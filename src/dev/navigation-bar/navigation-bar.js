import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-navigation-bar
                        .items="${[
                            {icon:'image',label:'Label',activated:true},
                            {icon:'image',label:'Label'},
                            {icon:'image',label:'Label',badge:'1'},
                            {icon:'image',label:'Label',badge:''},
                        ]}"
                    ></md-navigation-bar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-navigation-bar
                        .items="${[
                            {icon:'image',activated:true},
                            {icon:'image',},
                            {icon:'image',badge:'1'},
                            {icon:'image',badge:''},
                        ]}"
                    ></md-navigation-bar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-bar-component", NavigationBarComponent);

export default document.createElement("navigation-bar-component");
