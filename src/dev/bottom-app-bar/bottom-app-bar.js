import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomAppBarComponent extends MDComponent {
    get bottomAppBar() {
        return this.querySelector("#bottomAppBar");
    }
    get bottomAppBar2() {
        return this.querySelector("#bottomAppBar2");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-app-bar
                    id="bottomAppBar"
                    leadingActions='[{"icon":"check_box"},{"icon":"brush"},{"icon":"mic"},{"icon":"image"}]'
                    trailingActions='[{"component":"fab","variant":"unelevated","icon":"add"}]'
                    @onCardIconButtonClick=${this.bottomAppBarClick}
                    @onCardButtonClick=${this.bottomAppBarClick}
                ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-bottom-app-bar
                            id="bottomAppBar2"
                            leadingActions='[{"icon":"check_box"},{"icon":"brush"},{"icon":"mic"},{"icon":"image"}]'
                            @onCardIconButtonClick=${this.bottomAppBar2Click}
                            @onCardButtonClick=${this.bottomAppBar2Click}
                        ></md-bottom-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                id="center"
                                class="md-layout-border__item md-layout-border__item--center"
                            >
                                <div class="md-layout-column">
                                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                        <md-button
                                            variant="tonal"
                                            label="Icon buttons and FAB "
                                            @click="${this.handleButtonBottomAppBarClick}"
                                        ></md-button>
                                    </div>
                                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                        <md-button
                                            variant="tonal"
                                            label="Icon buttons and no FAB"
                                            @click="${this.handleButtonBottomAppBar2Click}"
                                        ></md-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonBottomAppBarClick() {
        this.bottomAppBar.toggle();
    }
    handleButtonBottomAppBar2Click() {
        this.bottomAppBar2.toggle();
    }

    bottomAppBarClick() {
        this.bottomAppBar.close();
    }
    bottomAppBar2Click() {
        this.bottomAppBar2.close();
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBarComponent);

export default document.createElement("dev-bottom-app-bar");
