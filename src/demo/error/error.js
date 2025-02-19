import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoError extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("demo-error", DemoError);

export default document.createElement("demo-error");
