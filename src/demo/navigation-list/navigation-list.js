import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoNavigationList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-navigation-list
                            .items="${[
                                {label:'label 1'},
                                {label:'label 2'},
                                {label:'label 3'},
                                {label:'label 4'},
                            ]}"
                            @onNavigationListItemClick="${console.log}"
                        ></md-navigation-list>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-navigation-list", DemoNavigationList);
export default document.createElement("demo-navigation-list");
