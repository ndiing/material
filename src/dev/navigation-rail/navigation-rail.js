import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationRailComponent extends MDComponent {
    get navigationRail() {
        return this.querySelector("#navigationRail");
    }
    get navigationRail2() {
        return this.querySelector("#navigationRail2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-rail
                    id="navigationRail"
                    .list="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1111 },
                    ]}"
                    @onCardIconButtonClick=${this.navigationRailClick}
                    @onCardButtonClick=${this.navigationRailClick}
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail
                            id="navigationRail2"
                            .list="${[
                                { icon: "image", selected: true },
                                { icon: "image", badge: 0 },
                                { icon: "image", badge: 1 },
                                { icon: "image", badge: 1111 },
                            ]}"
                            @onCardIconButtonClick=${this.navigationRail2Click}
                            @onCardButtonClick=${this.navigationRail2Click}
                        ></md-navigation-rail>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail label text"
                                        @click="${this.handleButtonNavigationRailClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail no label text"
                                        @click="${this.handleButtonNavigationRail2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonNavigationRailClick() {
        this.navigationRail.toggle();
    }
    handleButtonNavigationRail2Click() {
        this.navigationRail2.toggle();
    }

    navigationRailClick() {
        this.navigationRail.close();
    }
    navigationRail2Click() {
        this.navigationRail2.close();
    }
}

customElements.define("dev-navigation-rail", DevNavigationRailComponent);

export default document.createElement("dev-navigation-rail");
