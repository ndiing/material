import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class UserComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('user-component',UserComponent)

export default document.createElement('user-component')