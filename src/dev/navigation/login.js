import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDNavigation } from "../../material/foundation/navigation";

class LoginComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Login</h1>
            <md-placeholder></md-placeholder>
        `
    }

    // 
    connectedCallback(){
        super.connectedCallback()

        if(window.localStorage.access_token)
        MDNavigation.navigate('/')
    }
}

customElements.define('login-component',LoginComponent)

export default document.createElement('login-component')