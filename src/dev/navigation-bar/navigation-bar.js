import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationBarComponent extends MDComponent {
    get navigationBar() {
        return this.querySelector("#navigationBar");
    }
    get navigationBar2() {
        return this.querySelector("#navigationBar2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-bar
                    id="navigationBar"
                    .list="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1111 },
                    ]}"
                    @onCardIconButtonClick=${this.navigationBarClick}
                    @onCardButtonClick=${this.navigationBarClick}
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-bar
                            id="navigationBar2"
                            .list="${[
                                { icon: "image", selected: true },
                                { icon: "image", badge: 0 },
                                { icon: "image", badge: 1 },
                                { icon: "image", badge: 1111 },
                            ]}"
                            @onCardIconButtonClick=${this.navigationBar2Click}
                            @onCardButtonClick=${this.navigationBar2Click}
                        ></md-navigation-bar>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation bar label text"
                                        @click="${this.handleButtonNavigationBarClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation bar no label text"
                                        @click="${this.handleButtonNavigationBar2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonNavigationBarClick() {
        this.navigationBar.toggle();
    }
    handleButtonNavigationBar2Click() {
        this.navigationBar2.toggle();
    }

    navigationBarClick() {
        this.navigationBar.close();
    }
    navigationBar2Click() {
        this.navigationBar2.close();
    }
}

customElements.define("dev-navigation-bar", DevNavigationBarComponent);

export default document.createElement("dev-navigation-bar");
