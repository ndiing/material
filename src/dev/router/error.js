import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class ErrorComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4 ">
                        <h1>Error</h1>
                        <md-outlet></md-outlet>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4 "></div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4 "></div>
                </div>
            </div>
        `
    }
}

customElements.define('error-component',ErrorComponent)

export default document.createElement('error-component')