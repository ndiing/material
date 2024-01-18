import { LitElement, html } from "lit";

class LoginComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>Login</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('login-component',LoginComponent)

export default document.createElement('login-component')