import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevIconButton extends MDComponent{
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
                        <md-icon-button>image</md-icon-button>
                        <md-icon-button appearance="filled">image</md-icon-button>
                        <md-icon-button appearance="tonal">image</md-icon-button>
                        <md-icon-button appearance="outlined">image</md-icon-button>
                        <br><br>
                        <md-icon-button toggle>image</md-icon-button>
                        <md-icon-button appearance="filled" toggle>image</md-icon-button>
                        <md-icon-button appearance="tonal" toggle>image</md-icon-button>
                        <md-icon-button appearance="outlined" toggle>image</md-icon-button>
                        <br><br>
                        <md-icon-button toggle activated>image</md-icon-button>
                        <md-icon-button appearance="filled" toggle activated>image</md-icon-button>
                        <md-icon-button appearance="tonal" toggle activated>image</md-icon-button>
                        <md-icon-button appearance="outlined" toggle activated>image</md-icon-button>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                    </div>
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

customElements.define('dev-icon-button',DevIconButton)

export default document.createElement('dev-icon-button')