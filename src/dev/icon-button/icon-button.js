import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class IconButtonComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button appearance="" icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="" icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle activated appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="" icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('icon-button-component',IconButtonComponent)

export default document.createElement('icon-button-component')