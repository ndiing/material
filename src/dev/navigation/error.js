import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class ErrorComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Error</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('error-component',ErrorComponent)

export default document.createElement('error-component')