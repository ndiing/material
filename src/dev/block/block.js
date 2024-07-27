import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBlock extends MDComponent {
    renderCenter() {
        return html`
            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]' actions='[{"label":"label"}]'> Lorem ipsum dolor sit amet. Doloribus aspernatur quibusdam reiciendis placeat. Corporis molestiae expedita eveniet officia. </md-pane>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="without labels" @click="${() => navigationRail0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="with text labels" @click="${() => navigationRail1.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Standard navigation drawer" @click="${() => navigationDrawer0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Modal navigation drawer" @click="${() => navigationDrawer1.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="4 destinations; label text" @click="${() => navigationBar0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="4 destinations; no label text" @click="${() => navigationBar1.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Standard bottom sheet" @click="${() => bottomSheet.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Modal bottom sheet" @click="${() => bottomSheet1.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Standard side sheet" @click="${() => sideSheet.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Modal side sheet" @click="${() => sideSheet1.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Icon buttons and FAB " @click="${() => bottomAppBar0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Icon buttons and no FAB" @click="${() => bottomAppBar1.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="picker0" class="md-datetime-picker" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;"></md-pane>
                    <md-button variant="tonal" label="Picker" @click="${() => picker0.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="menu0" class="md-menu" style="--md-comp-pane-width: 168px;--md-comp-pane-height:256px;"></md-pane>
                    <md-button variant="tonal" label="Menu" @click="${() => menu0.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane
                        id="tooltip0"
                        class="md-tooltip"
                        style="width:312px;"
                        headline="headline"
                        .actions="${[
                            { label: "label", onButtonClick: () => tooltip0.toggle() },
                            { label: "label", onButtonClick: () => tooltip0.toggle() },
                        ]}"
                    >
                        Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis?
                    </md-pane>
                    <md-button variant="tonal" label="Subhead, supporting text, and two buttons" @click="${() => tooltip0.toggle()}"></md-button>
                </md-layout-item>

                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="tooltip1" class="md-tooltip" style="width:312px;" headline="headline" .actions="${[{ label: "label", onButtonClick: () => tooltip1.toggle() }]}"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                    <md-button variant="tonal" label="Subhead, supporting text, and one button" @click="${() => tooltip1.toggle()}"></md-button>
                </md-layout-item>

                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="tooltip2" class="md-tooltip" style="width:312px;" headline="headline"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                    <md-button variant="tonal" label="Subhead and supporting text" @pointerenter="${() => tooltip2.show()}" @pointerleave="${() => tooltip2.close()}"></md-button>
                </md-layout-item>

                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="tooltip3" class="md-tooltip" style="width:312px;" .actions="${[{ label: "label", onButtonClick: () => tooltip3.toggle() }]}"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                    <md-button variant="tonal" label="Supporting text and one button" @click="${() => tooltip3.toggle()}"></md-button>
                </md-layout-item>

                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="tooltip4" class="md-tooltip md-pane--plain"> Lorem ipsum. </md-pane>
                    <md-button variant="tonal" label="Plain tooltip" @pointerenter="${() => tooltip4.show()}" @pointerleave="${() => tooltip4.close()}"></md-button>
                </md-layout-item>

                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="tooltip5" class="md-tooltip md-pane--plain" style="width:312px;"> Lorem ipsum dolor sit amet. Aspernatur placeat laboriosam porro explicabo. Esse saepe fugit sapiente veritatis? </md-pane>
                    <md-button variant="tonal" label="Plain tooltip" @pointerenter="${() => tooltip5.show()}" @pointerleave="${() => tooltip5.close()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="snackbar0" class="md-snackbar" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;">Lorem ipsum dolor sit.</md-pane>
                    <md-button variant="tonal" label="Single line" @click="${() => snackbar0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="snackbar1" class="md-snackbar" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;" actions='[{"label":"label"}]'>Lorem ipsum dolor sit.</md-pane>
                    <md-button variant="tonal" label="Single line with action" @click="${() => snackbar1.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="snackbar2" class="md-snackbar" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</md-pane>
                    <md-button variant="tonal" label="Two lines" @click="${() => snackbar2.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="snackbar3" class="md-snackbar" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;" actions='[{"label":"label"}]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</md-pane>
                    <md-button variant="tonal" label="Two lines with action" @click="${() => snackbar3.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="snackbar4" class="md-snackbar" style="--md-comp-pane-width: 360px;--md-comp-pane-height:456px;" actions='[{"label":"label label label"}]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</md-pane>
                    <md-button variant="tonal" label="Two lines with longer action" @click="${() => snackbar4.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Center-aligned" @click="${() => topAppBar0.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Small" @click="${() => topAppBar1.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Medium" @click="${() => topAppBar2.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="Large" @click="${() => topAppBar3.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="dialog0" class="md-dialog" style="width:280px;" headline="headline" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit. Quia ad in delectus! Quisquam doloribus id hic. </md-pane>
                    <md-button variant="tonal" label="Basic dialogs" @click="${() => dialog0.toggle(true)}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="dialog1" class="md-dialog" style="width:280px;" leadingActions='[{"icon":"arrow_back"}]' headline="headline" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit. Quia ad in delectus! Quisquam doloribus id hic. </md-pane>
                    <md-button variant="tonal" label="Dialog with hero icon" @click="${() => dialog1.toggle(true)}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-pane id="dialog2" class="md-dialog md-pane--full-screen" .leadingActions="${[{ icon: "arrow_back", onIconButtonClick: () => dialog2.toggle(true) }]}" headline="headline" .trailingActions="${[{ icon: "close", onIconButtonClick: () => dialog2.toggle(true) }]}" actions='[{"component":"spacer"},{"label":"label"}]'> Lorem ipsum dolor sit. Quia ad in delectus! Quisquam doloribus id hic. </md-pane>
                    <md-button variant="tonal" label="Full-screen dialogs" @click="${() => dialog2.toggle(true)}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="North" @click="${() => north.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="East" @click="${() => east.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="South" @click="${() => south.toggle()}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="West" @click="${() => west.toggle()}"></md-button>
                </md-layout-item>
            </md-layout>

            <md-layout variant="column">
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="North modal" @click="${() => north1.toggle(true)}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="East modal" @click="${() => east1.toggle(true)}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="South modal" @click="${() => south1.toggle(true)}"></md-button>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-button variant="tonal" label="West modal" @click="${() => west1.toggle(true)}"></md-button>
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
                    <md-block leadingActions='[{"icon":"image"}]' trailingActions='[{"icon":"image"}]' headline="headline"></md-block>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-block leadingActions='[{"icon":"image"}]' trailingActions='[{"icon":"image"}]' headline="headline" supportingText="supportingText"></md-block>
                </md-layout-item>
                <md-layout-item expanded="3" medium="8" compact="4">
                    <md-block leadingActions='[{"icon":"image"}]' trailingActions='[{"icon":"image"}]' headline="headline" supportingText="supporting Text supporting Text supporting Text"></md-block>
                </md-layout-item>
            </md-layout>
        `;
    }
    render() {
        return html`
            <md-layout variant="border">
                <md-pane id="north" style="--md-comp-pane-height:80px;" class="md-sheet md-pane--north" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="east" style="--md-comp-pane-width:256px;" class="md-sheet md-pane--east" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="south" style="--md-comp-pane-height:80px;" class="md-sheet md-pane--south" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="west" style="--md-comp-pane-width:256px;" class="md-sheet md-pane--west" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>

                <md-pane id="north1" style="--md-comp-pane-height:80px;" class="md-sheet md-pane--north md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="east1" style="--md-comp-pane-width:256px;" class="md-sheet md-pane--east md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="south1" style="--md-comp-pane-height:80px;" class="md-sheet md-pane--south md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>
                <md-pane id="west1" style="--md-comp-pane-width:256px;" class="md-sheet md-pane--west md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]'></md-pane>

                <md-layout-item region="center">
                    <md-layout variant="border">
                        <md-pane id="topAppBar0" class="md-top-app-bar md-pane--center-aligned" headline="Center-aligned" leadingActions='[{"icon":"arrow_back"}]' trailingActions='[{"icon":"close"}]'></md-pane>

                        <md-pane id="bottomAppBar0" class="md-bottom-app-bar" leadingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"},{"icon":"image"}]' trailingActions='[{"component":"fab","icon":"add","variant":"unelevated"}]'></md-pane>

                        <md-pane id="sideSheet" style="--md-comp-pane-width:256px;" class="md-side-sheet" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]' actions='[{"label":"label"},{"label":"label"}]'></md-pane>
                        <md-pane id="sideSheet1" style="--md-comp-pane-width:256px;" class="md-side-sheet md-pane--modal" !open leadingActions='[{"icon":"arrow_back"}]' headline="headline" trailingActions='[{"icon":"close"}]' actions='[{"label":"label"},{"label":"label"}]'></md-pane>

                        <md-pane id="bottomSheet" style="--md-comp-pane-width:256px;" class="md-bottom-sheet" !open>I am empty without you</md-pane>
                        <md-pane id="bottomSheet1" style="--md-comp-pane-width:256px;" class="md-bottom-sheet md-pane--modal" !open>I am empty without you</md-pane>

                        <md-pane id="navigationDrawer0" style="--md-comp-pane-width:360px;" class="md-navigation-drawer" !open></md-pane>
                        <md-pane id="navigationDrawer1" style="--md-comp-pane-width:360px;" class="md-navigation-drawer md-pane--modal" !open></md-pane>

                        <md-layout-item region="center">
                            <md-layout variant="border">
                                <md-pane id="topAppBar1" class="md-top-app-bar md-pane--small" headline="Small" leadingActions='[{"icon":"arrow_back"}]' trailingActions='[{"icon":"close"}]'></md-pane>

                                <md-pane id="bottomAppBar1" class="md-bottom-app-bar" leadingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"},{"icon":"image"}]'></md-pane>

                                <md-pane id="navigationRail0" style="--md-comp-pane-width:80px;" class="md-navigation-rail" !open></md-pane>

                                <md-layout-item region="center">
                                    <md-layout variant="border">
                                        <md-pane id="topAppBar2" class="md-top-app-bar md-pane--medium" headline="Medium" leadingActions='[{"icon":"arrow_back"}]' trailingActions='[{"icon":"close"}]'></md-pane>

                                        <md-pane id="navigationBar0" class="md-navigation-bar"></md-pane>

                                        <md-pane id="navigationRail1" style="--md-comp-pane-width:80px;" class="md-navigation-rail" !open></md-pane>
                                        <md-layout-item region="center">
                                            <md-layout variant="border">
                                                <md-pane id="topAppBar3" class="md-top-app-bar md-pane--large" headline="Large" leadingActions='[{"icon":"arrow_back"}]' trailingActions='[{"icon":"close"}]'></md-pane>

                                                <md-pane id="navigationBar1" class="md-navigation-bar"></md-pane>

                                                <md-layout-item region="center">${this.renderCenter()}</md-layout-item>
                                            </md-layout>
                                        </md-layout-item>
                                    </md-layout>
                                </md-layout-item>
                            </md-layout>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-block", DevBlock);

export default document.createElement("dev-block");
