import { LitElement, html } from "lit";

class UserComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>User</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('user-component',UserComponent)

export default document.createElement('user-component')