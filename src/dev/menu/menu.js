import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
// import data from "../../assets/screener.json"

class DevMenuComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-menu
                        id="menu"
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                        @onCardIconButtonClick=${this.menuClick}
                        @onCardButtonClick=${this.menuClick}
                    ></md-menu>
                    <md-button
                        variant="tonal"
                        label="Menu icon"
                        @click="${this.handleButtonMenuClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-menu
                        id="menu2"
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                        @onCardIconButtonClick=${this.menu2Click}
                        @onCardButtonClick=${this.menu2Click}
                    ></md-menu>
                    <md-button
                        variant="tonal"
                        label="Menu no icon"
                        @click="${this.handleButtonMenu2Click}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-menu
                        id="menu3"
                        .list="${Array.from({ length: 100 }, (v, k) => ({
                            label: "Label " + (k + 1),
                            value: k + 1,
                            selected: k + 1 === 35,
                        }))}"
                        @onCardIconButtonClick=${this.menu3Click}
                        @onCardButtonClick=${this.menu3Click}
                    ></md-menu>
                    <md-button
                        id="button3"
                        variant="tonal"
                        label="Menu"
                        @click="${this.handleButtonMenu3Click}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get menu() {
        return this.querySelector("#menu");
    }
    handleButtonMenuClick(event) {
        this.menu.showModal(event.currentTarget);
    }
    menuClick() {
        this.menu.close();
    }

    get menu2() {
        return this.querySelector("#menu2");
    }
    handleButtonMenu2Click(event) {
        this.menu2.showModal(event.currentTarget);
    }
    menu2Click() {
        this.menu2.close();
    }

    get menu3() {
        return this.querySelector("#menu3");
    }
    handleButtonMenu3Click(event) {
        this.menu3.showModal(event.currentTarget);
    }
    menu3Click() {
        this.menu3.close();
    }
}

customElements.define("dev-menu", DevMenuComponent);

export default document.createElement("dev-menu");
