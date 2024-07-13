import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevMenu extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-menu
                                id="menu"
                                rowHeight="48"
                                maxRows="5"
                                .list="${[
                                    { label: "Indonesia", value: "ID" },
                                    { label: "United States", value: "US" },
                                    { label: "Germany", value: "DE" },
                                    { label: "Japan", value: "JP" },
                                    { label: "Brazil", value: "BR" },
                                    { label: "Canada", value: "CA" },
                                    { label: "Australia", value: "AU" },
                                    { label: "United Kingdom", value: "GB" },
                                    { label: "France", value: "FR" },
                                    { label: "South Korea", value: "KR" },
                                    { label: "India", value: "IN" },
                                    { label: "Russia", value: "RU" },
                                    { label: "Mexico", value: "MX" },
                                    { label: "Italy", value: "IT" },
                                    { label: "Spain", value: "ES" },
                                    { label: "Netherlands", value: "NL" },
                                    { label: "Switzerland", value: "CH" },
                                    { label: "Sweden", value: "SE" },
                                    { label: "Norway", value: "NO" },
                                    { label: "Denmark", value: "DK" },
                                    { label: "Argentina", value: "AR" },
                                    { label: "South Africa", value: "ZA" },
                                    { label: "Saudi Arabia", value: "SA" },
                                    { label: "Turkey", value: "TR" },
                                    { label: "Singapore", value: "SG" },
                                    // Dan lain-lain
                                ]}"
                                @onMenuViewportVirtualScroll=""
                                @onMenuListItemClick=""
                                @onMenuListItemSelected="${() => menu.close()}"
                            ></md-menu>
                            <md-button label="toggle menu" @click="${(event) => menu.toggle(event.currentTarget)}"></md-button>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.handleContextmenu = this.handleContextmenu.bind(this);
        window.addEventListener("contextmenu", this.handleContextmenu);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("contextmenu", this.handleContextmenu);
    }
    handleContextmenu(event) {
        event.preventDefault();
        menu.show(event);
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
