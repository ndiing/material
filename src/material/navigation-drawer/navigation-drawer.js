import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { MdPanelComponent } from "../panel/panel";

class MdNavigationDrawerComponent extends MdPanelComponent {
    static get properties() {
        return Object.assign(MdPanelComponent.properties, {
            items: { type: String },
        });
    }

    constructor() {
        super();
        this.type = "drawer";
        this.position = "left";
        // this.open=true
    }

    render() {
        /*prettier-ignore*/
        return html`
            <md-panel-body>
                <md-list
                    class="md-navigation-drawer__list"
                    .activatable="${true}"
                    .items="${this.items}"
                ></md-list>
            </md-panel-body>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MdNavigationDrawerComponent);

export { MdNavigationDrawerComponent };
