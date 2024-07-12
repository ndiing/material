import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const list=[
    {label:'label',icon:'image',selected:true},
    {label:'label',icon:'image'},
    {label:'label',icon:'image'},
    {label:'label',icon:'image'},
]

class DevNavigationRail extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <md-navigation-rail
                    open
                    .list="${list}"
                ></md-navigation-rail>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
