import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBlock extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-pane id="north" style="--md-comp-pane-height:80px;" class="md-pane--sheet md-pane--north" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="east" style="--md-comp-pane-width:256px;" class="md-pane--sheet md-pane--east" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="south" style="--md-comp-pane-height:80px;" class="md-pane--sheet md-pane--south" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="west" style="--md-comp-pane-width:256px;" class="md-pane--sheet md-pane--west" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>

                <md-pane id="north1" style="--md-comp-pane-height:80px;" class="md-pane--sheet md-pane--north md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="east1" style="--md-comp-pane-width:256px;" class="md-pane--sheet md-pane--east md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="south1" style="--md-comp-pane-height:80px;" class="md-pane--sheet md-pane--south md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="west1" style="--md-comp-pane-width:256px;" class="md-pane--sheet md-pane--west md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>

                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]' actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit amet. Doloribus aspernatur quibusdam reiciendis placeat. Corporis molestiae expedita eveniet officia. </md-pane>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane
                                id="tooltip0"
                                class="md-pane--tooltip"
                                style="width:312px;"
                                headline="headline"
                                .actions="${[
                                    { label: "label", onButtonClick: () => tooltip0.toggle() },
                                    { label: "label", onButtonClick: () => tooltip0.toggle() },
                                ]}"
                            >
                                Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis?
                            </md-pane>
                            <md-button variant="tonal" label="tooltip0" @click="${() => tooltip0.toggle()}"></md-button>
                        </md-layout-item>

                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="tooltip1" class="md-pane--tooltip" style="width:312px;" headline="headline" .actions="${[{ label: "label", onButtonClick: () => tooltip1.toggle() }]}"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                            <md-button variant="tonal" label="tooltip1" @click="${() => tooltip1.toggle()}"></md-button>
                        </md-layout-item>

                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="tooltip2" class="md-pane--tooltip" style="width:312px;" headline="headline"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                            <md-button variant="tonal" label="tooltip2" @pointerenter="${() => tooltip2.show()}" @pointerleave="${() => tooltip2.close()}"></md-button>
                        </md-layout-item>

                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="tooltip3" class="md-pane--tooltip" style="width:312px;" .actions="${[{ label: "label", onButtonClick: () => tooltip3.toggle() }]}"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                            <md-button variant="tonal" label="tooltip3" @click="${() => tooltip3.toggle()}"></md-button>
                        </md-layout-item>

                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="tooltip4" class="md-pane--tooltip md-pane--plain"> Lorem ipsum. </md-pane>
                            <md-button variant="tonal" label="tooltip4" @pointerenter="${() => tooltip4.show()}" @pointerleave="${() => tooltip4.close()}"></md-button>
                        </md-layout-item>

                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="tooltip5" class="md-pane--tooltip md-pane--plain" style="width:312px;"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                            <md-button variant="tonal" label="tooltip5" @pointerenter="${() => tooltip5.show()}" @pointerleave="${() => tooltip5.close()}"></md-button>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="picker0" class="md-pane--picker" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;"></md-pane>
                            <md-button variant="tonal" label="picker" @click="${() => picker0.toggle(true)}"></md-button>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="menu0" class="md-pane--menu" style="--md-comp-pane-width: 168px;--md-comp-pane-height:256px;"></md-pane>
                            <md-button variant="tonal" label="menu" @click="${() => menu0.toggle(true)}"></md-button>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="dialog0" class="md-pane--dialog" style="width:280px;" headline="headline" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit amet. Doloribus aspernatur quibusdam reiciendis placeat. Corporis molestiae expedita eveniet officia. </md-pane>
                            <md-button variant="tonal" label="dialog0" @click="${() => dialog0.toggle(true)}"></md-button>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="dialog1" class="md-pane--dialog" style="width:280px;" leadingActions='[{"icon":"arrow_back"}]' headline="headline" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit amet. Doloribus aspernatur quibusdam reiciendis placeat. Corporis molestiae expedita eveniet officia. </md-pane>
                            <md-button variant="tonal" label="dialog1" @click="${() => dialog1.toggle(true)}"></md-button>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-pane id="dialog2" class="md-pane--dialog md-pane--full-screen" .leadingActions="${[{ icon: "arrow_back", onIconButtonClick: () => dialog2.toggle(true) }]}" headline="headline" .trailingActions="${[{ icon: "close", onIconButtonClick: () => dialog2.toggle(true) }]}" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit amet. Doloribus aspernatur quibusdam reiciendis placeat. Corporis molestiae expedita eveniet officia. </md-pane>
                            <md-button variant="tonal" label="dialog2" @click="${() => dialog2.toggle(true)}"></md-button>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-button variant="tonal" label="north" @click="${() => north.toggle()}"></md-button>
                            <md-button variant="tonal" label="east" @click="${() => east.toggle()}"></md-button>
                            <md-button variant="tonal" label="south" @click="${() => south.toggle()}"></md-button>
                            <md-button variant="tonal" label="west" @click="${() => west.toggle()}"></md-button>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-button variant="tonal" label="north1" @click="${() => north1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="east1" @click="${() => east1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="south1" @click="${() => south1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="west1" @click="${() => west1.toggle(true)}"></md-button>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingActions='[{"icon":"favorite"}]'></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingCheckbox></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingRadioButton></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingSwitch></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingIcon="image"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" leadingSupportingText="leadingSupportingText"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingActions='[{"icon":"favorite"}]'></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingCheckbox></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingRadioButton></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingSwitch></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingIcon="image"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" trailingSupportingText="trailingSupportingText"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" supportingText="supportingText"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4">
                            <md-block headline="headline" supportingText="supporting Text supporting Text supporting Text"></md-block>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-block", DevBlock);

export default document.createElement("dev-block");
