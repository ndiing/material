import { LitElement, html } from "lit";

class ErrorComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>Error</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('error-component',ErrorComponent)

export default document.createElement('error-component')