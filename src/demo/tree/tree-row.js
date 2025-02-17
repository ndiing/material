import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTreeRow extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tree-row></md-tree-row>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tree-row", DemoTreeRow);

export default document.createElement("demo-tree-row");
