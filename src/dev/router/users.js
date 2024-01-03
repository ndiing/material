import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRouter } from "../../material/foundation/router";

class DevUsersComponent extends MDComponent{
    render(){
        return html`
            <h1>Users</h1>
            <div>
                <div routerLink="/users?_sort=age&_order=desc">/users?_sort=age&_order=desc</div>
                <div routerLink="/users?_sort=age&_order=asc">/users?_sort=age&_order=asc</div>
            </div>
            <div>query logs: ${this.query}</div>
            <md-outlet></md-outlet>
        `
    }

    connectedCallback(){
        super.connectedCallback()
        this.handleNavigateSuccess=
        this.handleNavigateSuccess.bind(this)
        window.addEventListener('onNavigateSuccess',this.handleNavigateSuccess)
    }
    disconnectedCallback(){
        super.disconnectedCallback()
        window.removeEventListener('onNavigateSuccess',this.handleNavigateSuccess)
    }
    handleNavigateSuccess(event){
        this.query=JSON.stringify(event.detail.query)
        this.requestUpdate()
    }
}

customElements.define('dev-users',DevUsersComponent)

export default document.createElement('dev-users')