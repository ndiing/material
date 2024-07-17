import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDialog extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Basic dialog</md-markdown>
                            <md-dialog
                                id="dialog0"
                                @onCardButtonClick="${() => dialog0.close()}"
                                style="width:280px;"
                                label="Lorem ipsum dolor"
                                actions='[{"component":"spacer"},{"label":"label"},{"label":"label"}]'
                            >
                                Lorem ipsum dolor sit amet. Beatae commodi eos eligendi est? Illo tempora a rerum ex.
                            </md-dialog>
                            <md-button
                                label="show dialog"
                                variant="tonal"
                                @click="${() => dialog0.show(true)}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Full-screen dialog</md-markdown>
                            <md-dialog
                                id="dialog1"
                                @onCardIconButtonClick="${() => dialog1.close()}"
                                variant="full"
                                label="Lorem ipsum dolor"
                                leadingActions='[{"icon":"close"}]'
                                trailingActions='[{"component":"button","label":"save"}]'
                            >
                                Lorem ipsum dolor sit amet. Beatae commodi eos eligendi est? Illo tempora a rerum ex.
                            </md-dialog>
                            <md-button
                                label="show dialog"
                                variant="tonal"
                                @click="${() => dialog1.show(true)}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
