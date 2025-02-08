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
                            @click="${(event) => menu.toggle({trigger:event.currentTarget})}"
                        ></md-button>
                        <md-menu
                            id="menu"
                            .items="${[
                                {label:'Label',selected:true},
                                {label:'Label'},
                                {label:'Label'},
                                {label:'Label'},
                            ]}"
                            @onMenuShown="${console.log}"
                            @onMenuClosed="${console.log}"
                        ></md-menu>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-menu", DemoMenu);
export default document.createElement("demo-menu");
