import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRouter } from "../../material/foundation/router";

class DevMainComponent extends MDComponent{
    static get properties(){
        return {
            isAuthenticated:{type:Boolean}
        }
    }
    
    render(){
        return html`
            <h1>Main</h1>
            <div>
                <div routerLink="/">/</div>
                <div routerLink="/users">/users</div>
                <div routerLink="/users/ndiing">/users/ndiing</div>
                <div routerLink="/blogs">/blogs</div>
                <div routerLink="/blogs/ndiing">/blogs/ndiing</div>
                <div routerLink="/error">/error</div>
                ${localStorage.isAuthenticated==='1'?html`<div @click="${this.handleLogout}">/logout</div>`:``}
            </div>
            <md-outlet></md-outlet>
        `
    }

    connectedCallback(){
        super.connectedCallback()
        this.isAuthenticated=localStorage.isAuthenticated
    }

    handleLogout(){
        localStorage.isAuthenticated=0
        MDRouter.navigate('/login')
    }
}

customElements.define('dev-main',DevMainComponent)

export default document.createElement('dev-main')