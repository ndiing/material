import { LitElement, html } from "lit";

class AppLogin extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <div>
                <div routerLink="/">/</div>
            </div>
            <h1>Login</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-login',AppLogin)

export default document.createElement('app-login')