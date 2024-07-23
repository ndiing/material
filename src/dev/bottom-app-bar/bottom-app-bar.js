import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const actions0 = [
    //
    { icon: "search", onIconButtonClick: (event) => console.log("icon button search click") },
    { icon: "delete", onIconButtonClick: (event) => console.log("icon button delete click") },
    { icon: "archive", onIconButtonClick: (event) => console.log("icon button archive click") },
    { icon: "reply", onIconButtonClick: (event) => console.log("icon button reply click") },
];
const actions1 = [
    //
    { component: "spacer" },
    { component: "fab", icon: "add", variant: "unelevated", onFabClick: (event) => console.log("fab add click") },
];
const actions2 = [
    //
    { icon: "search", onIconButtonClick: (event) => console.log("icon button search click") },
    { icon: "delete", onIconButtonClick: (event) => console.log("icon button delete click") },
    { icon: "archive", onIconButtonClick: (event) => console.log("icon button archive click") },
    { icon: "reply", onIconButtonClick: (event) => console.log("icon button reply click") },
];

class DevBottomAppBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <!-- bottomAppBar0 -->
                <md-bottom-app-bar id="bottomAppBar0" .leadingActions="${actions0}" .trailingActions="${actions1}"></md-bottom-app-bar>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <!-- bottomAppBar1 -->
                        <md-bottom-app-bar id="bottomAppBar1" .leadingActions="${actions2}"></md-bottom-app-bar>
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="show bottom app bar" variant="tonal" @click="${() => bottomAppBar0.toggle()}"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="show bottom app bar" variant="tonal" @click="${() => bottomAppBar1.toggle()}"></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
