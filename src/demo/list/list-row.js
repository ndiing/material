import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoListRow extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list-row></md-list-row>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-row", DemoListRow);

export default document.createElement("demo-list-row");
