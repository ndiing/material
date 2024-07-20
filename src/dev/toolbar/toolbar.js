import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevToolbar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-toolbar .items="${[{ component: "button", disabled: true, icon: "add_circle", label: "New" }, { component: "divider", variant: "vertical" }, { component: "icon-button", disabled: true, icon: "content_cut" }, { component: "icon-button", disabled: true, icon: "content_copy" }, { component: "icon-button", disabled: true, icon: "content_paste" }, { component: "icon-button", disabled: true, icon: "edit" }, { component: "icon-button", disabled: true, icon: "share" }, { component: "icon-button", disabled: true, icon: "delete" }, { component: "divider", variant: "vertical" }, { component: "button", icon: "swap_vert", label: "Sort" }, { component: "button", icon: "view_list", label: "View" }, { component: "divider", variant: "vertical" }, { component: "icon-button", icon: "more_vert" }, { component: "spacer" }, { component: "button", icon: "side_navigation", label: "Details" }]}"></md-toolbar>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tool badge="" headline="headline" leadingActions='[{"icon":"favorite"}]'></md-tool>
                            <md-tool badge="" headline="headline" leadingCheckbox></md-tool>
                            <md-tool badge="" headline="headline" leadingRadioButton></md-tool>
                            <md-tool badge="" headline="headline" leadingSwitch></md-tool>
                            <md-tool badge="" headline="headline" leadingAvatar="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" leadingImage="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" leadingVideo="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" leadingSupportingText="leadingSupportingText"></md-tool>
                            <md-tool badge="" headline="headline" leadingIcon="image"></md-tool>
                            <md-tool badge="" headline="headline"></md-tool>
                            <md-tool badge="" headline="headline" supportingText="supportingText"></md-tool>
                            <md-tool badge="" headline="headline" trailingIcon="image"></md-tool>
                            <md-tool badge="" headline="headline" trailingSupportingText="trailingSupportingText"></md-tool>
                            <md-tool badge="" headline="headline" trailingVideo="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" trailingImage="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" trailingAvatar="https://api.dicebear.com/9.x/micah/svg?seed=Cleo"></md-tool>
                            <md-tool badge="" headline="headline" trailingSwitch></md-tool>
                            <md-tool badge="" headline="headline" trailingRadioButton></md-tool>
                            <md-tool badge="" headline="headline" trailingCheckbox></md-tool>
                            <md-tool badge="" headline="headline" trailingActions='[{"icon":"favorite"}]'></md-tool>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tool class="md-tool--vertical" headline="headline" leadingIcon="image"></md-tool>
                            <md-tool class="md-tool--vertical" headline="headline"></md-tool>
                            <md-tool class="md-tool--vertical" headline="headline" trailingIcon="image"></md-tool>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-toolbar", DevToolbar);

export default document.createElement("dev-toolbar");
