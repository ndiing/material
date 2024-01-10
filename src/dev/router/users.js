import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class UsersComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('users-component',UsersComponent)

export default document.createElement('users-component')