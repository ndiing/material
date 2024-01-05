import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevButton extends MDComponent{
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
                        <md-button label="Label"></md-button>
                        <md-button icon="image" label="Label"></md-button>
                        <br>
                        <br>
                        <md-button elevated label="Label"></md-button>
                        <md-button elevated icon="image" label="Label"></md-button>
                        <br>
                        <br>
                        <md-button filled label="Label"></md-button>
                        <md-button filled icon="image" label="Label"></md-button>
                        <br>
                        <br>
                        <md-button tonal label="Label"></md-button>
                        <md-button tonal icon="image" label="Label"></md-button>
                        <br>
                        <br>
                        <md-button outlined label="Label"></md-button>
                        <md-button outlined icon="image" label="Label"></md-button>
                        <br>
                        <br>
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

customElements.define('dev-button',DevButton)

export default document.createElement('dev-button')