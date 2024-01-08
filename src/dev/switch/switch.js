import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

const icons=[
    'close',
    'check',
]

class DevSwitch extends MDComponent{
    render(){
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-switch></md-switch>
                        <md-switch .icons="${['','check']}" checked></md-switch>
                        <!-- <br><br>
                        <md-switch .icons="${icons}"></md-switch>
                        <md-switch .icons="${icons}" checked></md-switch> -->
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('dev-switch',DevSwitch)

export default document.createElement('dev-switch')