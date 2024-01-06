import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevSegmentedButton extends MDComponent{
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
                        <md-segmented-button>
                            <md-button appearance="outlined" label="Label" activated></md-button>
                            <md-button appearance="outlined" label="Label"></md-button>
                            <md-button appearance="outlined" label="Label"></md-button>
                        </md-segmented-button>
                        <br>
                        <br>
                        <md-segmented-button type="multi-select">
                            <md-button appearance="outlined" label="Label" activated></md-button>
                            <md-button appearance="outlined" label="Label" activated></md-button>
                            <md-button appearance="outlined" label="Label"></md-button>
                        </md-segmented-button>
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

customElements.define('dev-segmented-button',DevSegmentedButton)

export default document.createElement('dev-segmented-button')