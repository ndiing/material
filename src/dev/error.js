import { LitElement, html } from "lit";

class AppError extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <div>
                <div routerLink="/">/</div>
            </div>
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-error',AppError)

export default document.createElement('app-error')