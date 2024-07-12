import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTreeItem extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree-item
                                icon="image"
                                label="label"
                                badge=""
                                selected
                                routerLink=""
                                indent=""
                                isNode
                                expanded
                                activated
                                variant=""
                                isParent
                                nodeActions=""
                                nodeIcons=""
                                leafIcons=""
                                @onTreeItemSelected="${console.log}"
                            ></md-tree-item>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tree-item", DevTreeItem);

export default document.createElement("dev-tree-item");
