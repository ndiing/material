import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class LoginComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <h1>Login</h1>
                        <md-outlet></md-outlet>
                    </div>
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("login-component", LoginComponent);

export default document.createElement('login-component')
