import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class AppMain extends MdComponent {
    render() {
        return html`
            <md-layout-border>
                <md-layout-border-item region="center">
                    <md-outlet></md-outlet>
                </md-layout-border-item>
            </md-layout-border>
        `;
    }
}

customElements.define("app-main", AppMain);

export default document.createElement("app-main");
