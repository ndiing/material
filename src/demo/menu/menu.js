import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoMenu extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Menu"
                            @click="${(event) => menu.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-menu
                            id="menu"
                            .items="${[
                                { label: "Label" }, 
                                { label: "Label" }, 
                                { label: "Label" }, 
                                { label: "Label" }
                            ]}"
                            @onNavigationListKeydownEnter="${console.log}"
                            @onNavigationListItemClick="${event=>console.log(event.detail.event.currentTarget.data)}"
                            @onMenuShow="${console.log}"
                            @onMenuClose="${console.log}"
                            @onMenuShown="${console.log}"
                            @onMenuClosed="${console.log}"
                        ></md-menu>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Menu"
                            @click="${(event) => menu2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-menu
                            id="menu2"
                            .items="${[
                                { label: "Label" }, 
                                { label: "Label" }, 
                                { label: "Label" }, 
                                { label: "Label", selected: true }
                            ]}"
                            @onNavigationListKeydownEnter="${console.log}"
                            @onNavigationListItemClick="${event=>console.log(event.detail.event.currentTarget.data)}"
                            @onMenuShow="${console.log}"
                            @onMenuClose="${console.log}"
                            @onMenuShown="${console.log}"
                            @onMenuClosed="${console.log}"
                        ></md-menu>
                    </div>

                    <div style="height:100vh"></div>

                </div>
            </div>
        `;
    }
}
customElements.define("demo-menu", DemoMenu);
export default document.createElement("demo-menu");
