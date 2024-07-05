import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevMenuComponent extends MDComponent {
    get menu() {
        return this.querySelector("#menu");
    }
    get menu2() {
        return this.querySelector("#menu2");
    }

    render() {
        return html`
            <div class="md-layout-border">
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

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
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

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu icon"
                                        @click="${this.handleButtonMenuClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu no icon"
                                        @click="${this.handleButtonMenu2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonMenuClick(event) {
        this.menu.showModal(event.currentTarget);
    }
    handleButtonMenu2Click(event) {
        this.menu2.showModal(event.currentTarget);
    }

    menuClick() {
        this.menu.close();
    }
    menu2Click() {
        this.menu2.close();
    }
}

customElements.define("dev-menu", DevMenuComponent);

export default document.createElement("dev-menu");
