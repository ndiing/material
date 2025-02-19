import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationListRow extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-navigation-list-row></md-navigation-list-row>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-navigation-list-row", DemoNavigationListRow);

export default document.createElement("demo-navigation-list-row");
