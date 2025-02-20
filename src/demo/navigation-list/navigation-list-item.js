import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationListItem extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-navigation-list-item
                            icon=""
                            label=""
                            sublabel=""
                            selected=""
                            disabled=""
                            routerLink=""
                            rippleOptions=""
                            badge=""
                        ></md-navigation-list-item>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-navigation-list-item", DemoNavigationListItem);

export default document.createElement("demo-navigation-list-item");
