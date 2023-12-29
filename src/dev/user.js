import { LitElement, html } from "lit";

class AppUser extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-user',AppUser)

export default document.createElement('app-user')