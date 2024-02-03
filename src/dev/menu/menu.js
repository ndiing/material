import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class MenuComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-menu
                        .items="${[
                            {icon:'image',label:'Label',trailingSupportingText:'x'},
                            {icon:'image',label:'Label',trailingSupportingText:'c'},
                            {icon:'image',label:'Label',trailingSupportingText:'v'},
                            {divider:true},
                            {icon:'image',label:'Label',trailingIcon:'image'},
                        ]}"
                    ></md-menu>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("menu-component", MenuComponent);

export default document.createElement("menu-component");
