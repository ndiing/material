import { LitElement, html } from "lit";

class AppMain extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <div>
                <div routerLink="/">/</div>
                <div routerLink="/users">/users</div>
                <div routerLink="/users/ndiing">/users/ndiing</div>
                <div routerLink="/blogs">/blogs</div>
                <div routerLink="/blogs/welcome">/blogs/welcome</div>
                <div routerLink="/error">/error</div>
            </div>
            <h1>Main</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-main',AppMain)

export default document.createElement('app-main')