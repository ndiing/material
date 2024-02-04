import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";
const items=[
    { icon:'done_all', label: "badge", routerLink: "/badge", },
    { icon:'done_all', label: "bottom-app-bar", routerLink: "/bottom-app-bar", },
    { icon:'done', label: "bottom-sheet", routerLink: "/bottom-sheet", },
    { icon:'done_all', label: "button", routerLink: "/button", },
    { icon:'done_all', label: "card", routerLink: "/card", },
    { icon:'done', label: "carousel", routerLink: "/carousel", },
    { icon:'done_all', label: "checkbox", routerLink: "/checkbox", },
    { icon:'done_all', label: "chip", routerLink: "/chip", },
    { icon:'done', label: "date-picker", routerLink: "/date-picker", },
    { icon:'done_all', label: "dialog", routerLink: "/dialog", },
    { icon:'done_all', label: "divider", routerLink: "/divider", },
    { icon:'done_all', label: "emoji", routerLink: "/emoji", },
    { icon:'done_all', label: "fab", routerLink: "/fab", },
    { icon:'done_all', label: "icon", routerLink: "/icon", },
    { icon:'done_all', label: "icon-button", routerLink: "/icon-button", },
    { icon:'done_all', label: "image", routerLink: "/image", },
    { icon:'done_all', label: "list", routerLink: "/list", },
    { icon:'done_all', label: "menu", routerLink: "/menu", },
    { icon:'done_all', label: "navigation-bar", routerLink: "/navigation-bar", },
    { icon:'done_all', label: "navigation-drawer", routerLink: "/navigation-drawer", },
    { icon:'done_all', label: "navigation-rail", routerLink: "/navigation-rail", },
    { icon:'done', label: "progress-indicator", routerLink: "/progress-indicator", },
    { icon:'done_all', label: "radio-button", routerLink: "/radio-button", },
    { icon:'done', label: "search", routerLink: "/search", },
    { icon:'done_all', label: "segmented-button", routerLink: "/segmented-button", },
    { icon:'done_all', label: "sheet", routerLink: "/sheet", },
    { icon:'done', label: "side-sheet", routerLink: "/side-sheet", },
    { icon:'done', label: "slider", routerLink: "/slider", },
    { icon:'done', label: "snackbar", routerLink: "/snackbar", },
    { icon:'done_all', label: "switch", routerLink: "/switch", },
    { icon:'done', label: "tab", routerLink: "/tab", },
    { icon:'done_all', label: "text-field", routerLink: "/text-field", },
    { icon:'done', label: "time-picker", routerLink: "/time-picker", },
    { icon:'done_all', label: "tooltip", routerLink: "/tooltip", },
    { icon:'done_all', label: "top-app-bar", routerLink: "/top-app-bar", },
]

class MainComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div style="width:360px;padding:8px 0;" class="md-layout__item md-layout__item--west" open>
                    <md-navigation-drawer
                        .items="${items}"
                    ></md-navigation-drawer>
                </div>
                <div style="padding:24px;" class="md-layout__item md-layout__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }
}

customElements.define("main-component", MainComponent);

export default document.createElement("main-component");
