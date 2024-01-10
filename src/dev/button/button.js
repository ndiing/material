import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class ButtonComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" label="Label"></md-button>
                        <md-button appearance="filled" label="Label"></md-button>
                        <md-button appearance="filled-tonal" label="Label"></md-button>
                        <md-button appearance="outlined" label="Label"></md-button>
                        <md-button label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" icon="image" label="Label"></md-button>
                        <md-button appearance="filled" icon="image" label="Label"></md-button>
                        <md-button appearance="filled-tonal" icon="image" label="Label"></md-button>
                        <md-button appearance="outlined" icon="image" label="Label"></md-button>
                        <md-button icon="image" label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('button-component',ButtonComponent)

export default document.createElement('button-component')