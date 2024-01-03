import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevUserComponent extends MDComponent{
    render(){
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('dev-user',DevUserComponent)

export default document.createElement('dev-user')