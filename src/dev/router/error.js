import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevErrorComponent extends MDComponent{
    render(){
        return html`
            <h1>Error</h1>
            <div>
                <div routerLink="/">/</div>
            </div>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('dev-error',DevErrorComponent)

export default document.createElement('dev-error')