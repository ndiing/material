import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [{ component: "button", disabled: true, icon: "add_circle", label: "New" }, { component: "divider", variant: "vertical" }, { component: "icon-button", disabled: true, icon: "content_cut" }, { component: "icon-button", disabled: true, icon: "content_copy" }, { component: "icon-button", disabled: true, icon: "content_paste" }, { component: "icon-button", disabled: true, icon: "edit" }, { component: "icon-button", disabled: true, icon: "share" }, { component: "icon-button", disabled: true, icon: "delete" }, { component: "divider", variant: "vertical" }, { component: "button", icon: "swap_vert", label: "Sort" }, { component: "button", icon: "view_list", label: "View" }, { component: "divider", variant: "vertical" }, { component: "icon-button", icon: "more_vert" }, { component: "spacer" }, { component: "button", icon: "side_navigation", label: "Details" }];

class DevToolbar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-toolbar .items="${items0}"></md-toolbar>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-toolbar", DevToolbar);

export default document.createElement("dev-toolbar");
