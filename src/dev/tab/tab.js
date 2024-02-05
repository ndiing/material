import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TabComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'primary'}"
                        .items="${[
                            {label:'Label',badge:'3',activated:true},
                            {label:'Label',},
                            {label:'Label',},
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'primary'}"
                        .items="${[
                            {icon:'image',label:'Label',badge:'3',activated:true},
                            {icon:'image',label:'Label',},
                            {icon:'image',label:'Label',},
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'primary'}"
                        .items="${[
                            {icon:'image',badge:'3',activated:true},
                            {icon:'image',},
                            {icon:'image',},
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'secondary'}"
                        .items="${[
                            {label:'Label',badge:'3',activated:true},
                            {label:'Label',},
                            {label:'Label',},
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'secondary'}"
                        .items="${[
                            {icon:'image',label:'Label',badge:'3',activated:true},
                            {icon:'image',label:'Label',},
                            {icon:'image',label:'Label',},
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tabs
                        .type="${'secondary'}"
                        .items="${[
                            {icon:'image',badge:'3',activated:true},
                            {icon:'image',},
                            {icon:'image',},
                        ]}"
                    ></md-tabs>
                </div>
            </div>
        `;
    }
}

customElements.define("tab-component", TabComponent);

export default document.createElement("tab-component");
