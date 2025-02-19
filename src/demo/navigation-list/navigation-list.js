import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-navigation-list
                            .items="${[{ label: "label 1" }, { label: "label 2" }, { label: "label 3" }, { label: "label 4" }, { label: "label 5" }, { label: "label 6" }, { label: "label 7" }, { label: "label 8" }, { label: "label 9" }, { label: "label 10" }, { label: "label 11" }, { label: "label 12" }, { label: "label 13" }, { label: "label 14" }, { label: "label 15" }, { label: "label 16" }, { label: "label 17" }, { label: "label 18" }, { label: "label 19" }, { label: "label 20" }, { label: "label 21" }, { label: "label 22" }, { label: "label 23" }, { label: "label 24" }, { label: "label 25" }, { label: "label 26" }, { label: "label 27" }, { label: "label 28" }, { label: "label 29" }, { label: "label 30" }, { label: "label 31" }, { label: "label 32" }, { label: "label 33" }, { label: "label 34" }, { label: "label 35" }, { label: "label 36" }, { label: "label 37" }, { label: "label 38" }, { label: "label 39" }, { label: "label 40" }, { label: "label 41" }, { label: "label 42" }, { label: "label 43" }, { label: "label 44" }, { label: "label 45" }, { label: "label 46" }, { label: "label 47" }, { label: "label 48" }, { label: "label 49" }, { label: "label 50" }, { label: "label 51" }, { label: "label 52" }, { label: "label 53" }, { label: "label 54" }, { label: "label 55" }, { label: "label 56" }, { label: "label 57" }, { label: "label 58" }, { label: "label 59" }, { label: "label 60" }, { label: "label 61" }, { label: "label 62" }, { label: "label 63" }, { label: "label 64" }]}"
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
