import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevUserComponent extends MDComponent {
    render() {
        return html` <md-outlet></md-outlet> `;
    }
}

customElements.define("dev-user", DevUserComponent);

export default document.createElement("dev-user");
