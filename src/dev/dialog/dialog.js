import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const actions0 = [
    //
    { component: "spacer" },
    {
        label: "label",
        onButtonClick: () => {
            dialog0.close();
        },
    },
    {
        label: "label",
        onButtonClick: () => {
            dialog0.close();
        },
    },
];
const actions1 = [
    //
    {
        icon: "close",
        onIconButtonClick: () => {
            dialog1.close();
        },
    },
];
const actions2 = [{ component: "button", label: "save" }];
const actions3 = [
    { component: "spacer" },
    {
        label: "label",
        onButtonClick: () => {
            dialog2.close();
        },
    },
    {
        label: "label",
        onButtonClick: () => {
            dialog2.close();
        },
    },
];

class DevDialog extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog id="dialog0" style="width:280px;" headline="Lorem ipsum dolor" .actions="${actions0}"> Lorem ipsum dolor sit amet. Beatae commodi eos eligendi est? Illo tempora a rerum ex. </md-dialog>
                            <md-button label="Basic dialog" variant="tonal" @click="${() => dialog0.show(true)}"></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog id="dialog1" variant="full-screen" headline="Lorem ipsum dolor" .leadingActions="${actions1}" .trailingActions="${actions2}"> Lorem ipsum dolor sit amet. Beatae commodi eos eligendi est? Illo tempora a rerum ex. </md-dialog>
                            <md-button label="Full-screen dialog" variant="tonal" @click="${() => dialog1.show(true)}"></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog id="dialog2" style="width:280px;" leadingIcon="image" headline="Lorem ipsum dolor" .actions="${actions3}"> Lorem ipsum dolor sit amet. Beatae commodi eos eligendi est? Illo tempora a rerum ex. </md-dialog>
                            <md-button label="Dialog with hero icon" variant="tonal" @click="${() => dialog2.show(true)}"></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
