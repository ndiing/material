import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevLoginComponent extends MDComponent{
    render(){
        return html`
            <h1>Login</h1>
            <div>
                <div routerLink="/">/</div>
            </div>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('dev-login',DevLoginComponent)

export default document.createElement('dev-login')