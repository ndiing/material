import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class LoginComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Login</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('login-component',LoginComponent)

export default document.createElement('login-component')