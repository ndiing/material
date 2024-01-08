import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevButton extends MDComponent{
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
                        <md-button label="Label"></md-button>
                        <md-button appearance="elevated" label="Label"></md-button>
                        <md-button appearance="filled" label="Label"></md-button>
                        <md-button appearance="tonal" label="Label"></md-button>
                        <md-button appearance="outlined" label="Label"></md-button>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded12
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-button icon="image" label="Label"></md-button>
                        <md-button icon="image" appearance="elevated" label="Label"></md-button>
                        <md-button icon="image" appearance="filled" label="Label"></md-button>
                        <md-button icon="image" appearance="tonal" label="Label"></md-button>
                        <md-button icon="image" appearance="outlined" label="Label"></md-button>
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

customElements.define('dev-button',DevButton)

export default document.createElement('dev-button')