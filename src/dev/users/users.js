import { LitElement, html } from "lit";

class UsersComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>Users</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('users-component',UsersComponent)

export default document.createElement('users-component')