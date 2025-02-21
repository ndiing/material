import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTreeItem extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tree-item selected="" expanded="" indent="" actions="" nodeIcons="" leafIcons="" label="" routerLink=""></md-tree-item>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tree-item", DemoTreeItem);

export default document.createElement("demo-tree-item");
