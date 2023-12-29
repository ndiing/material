import { LitElement, html } from "lit";

class AppUsers extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-users',AppUsers)

export default document.createElement('app-users')