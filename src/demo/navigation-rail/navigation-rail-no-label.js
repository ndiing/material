import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationRailNoLabel extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button variant="filled-tonal" label="Toggle Navigation Rail" @click="${(event) => navigationRail.toggle()}"></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-navigation-rail id="navigationRail" .items="${[{ icon: "image", selected: true }, { icon: "image" }, { icon: "image" }, { icon: "image" }]}" open></md-navigation-rail>
            </div>
        `;
    }
}

customElements.define("demo-navigation-rail-no-label", DemoNavigationRailNoLabel);

export default document.createElement("demo-navigation-rail-no-label");
