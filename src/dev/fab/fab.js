import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevFab extends MDComponent{
    render(){
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="
                        md-layout__column
                        md-layout__column--expanded12
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-fab icon="image"></md-fab>
                        <md-fab size="small" icon="image"></md-fab>
                        <md-fab size="large" icon="image"></md-fab>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded12
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-fab appearance="extended" icon="image" label="Label"></md-fab>
                        <md-fab appearance="extended" label="Label"></md-fab>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded12
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded12
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('dev-fab',DevFab)

export default document.createElement('dev-fab')