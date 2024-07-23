import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevLayout extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item class="dev-layout__item" expanded="1" medium="8" compact="4">1/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="11" medium="8" compact="4">11/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="2" medium="8" compact="4">2/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="10" medium="8" compact="4">10/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="3" medium="8" compact="4">3/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="9" medium="8" compact="4">9/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="4" medium="8" compact="4">4/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="8" medium="8" compact="4">8/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="5" medium="8" compact="4">5/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="7" medium="8" compact="4">7/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="6" medium="8" compact="4">6/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="6" medium="8" compact="4">6/8/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="4">12/8/4</md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item class="dev-layout__item" expanded="12" medium="1" compact="4">12/1/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="7" compact="4">12/7/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="2" compact="4">12/2/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="6" compact="4">12/6/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="3" compact="4">12/3/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="5" compact="4">12/5/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="4" compact="4">12/4/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="4" compact="4">12/4/4</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="4">12/8/4</md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="1">12/8/1</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="3">12/8/3</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="2">12/8/2</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="2">12/8/2</md-layout-item>
                        <md-layout-item class="dev-layout__item" expanded="12" medium="8" compact="4">12/8/4</md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
