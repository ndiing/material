import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";
import { toTitleCase } from "../../material/functions/functions.js";
import jsdoc from "../../assets/jsdoc.json";

MDRouter.historyApiFallback = false;

class DevMainComponent extends MDComponent {
    get topAppBar() {
        return this.querySelector("#topAppBar");
    }

    get navigationDrawer() {
        return this.querySelector("#navigationDrawer");
    }

    constructor() {
        super();

        this.list = [
            //
            "functions",
            "localization",
            "color",
            "component",
            "router",
            "ripple",
            "popper",
            "progress",
            "gesture",
            "observer",
            "attribute-observer",
            "virtual",
            "store",
            "markdown",
            "icon",
            "emoji",
            "image",
            "badge",
            "button",
            "icon-button",
            "segmented-button",
            "fab",
            "card",
            "scrim",
            "sheet",
            "dialog",
            "top-app-bar",
            "side-sheet",
            "bottom-sheet",
            "snackbar",
            "tooltip",
            "bottom-app-bar",
            "datetime-picker",
            "date-picker",
            "month-picker",
            "time-picker",
            "week-picker",
            "color-picker",
            "emoji-picker",
            "form",
            "checkbox",
            "radio-button",
            "switch",
            "slider",
            "progress-indicator",
            // "list-item",
            "list",
            // "tree-item",
            "tree",
            "navigation-bar",
            "navigation-drawer",
            "navigation-rail",
            "menu",
            "tabs",
            "chip",
            "chips",
            "text-field",
            "datetime-field",
            "date-field",
            "month-field",
            "week-field",
            "time-field",
            "color-field",
            "number-field",
            "search-field",
            "password-field",
            "textarea-field",
            "select-field",
            "pagination",
            // "data-table-item",
            "data-table",
        ]
            .sort((a, b) => a.localeCompare(b))
            .map((name) => ({
                routerLink: "/" + name,
                label: toTitleCase(name),
                icon: "deployed_code",
                selected: "/" + name === MDRouter.path,
            }));
    }

    get doc() {
        const name = MDRouter.path.slice(1) + ".js";
        return jsdoc[name];
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar id="topAppBar" leadingActions='[{"icon":"menu"}]' @onCardIconButtonClick="${this.handleCardIconButtonClick}"></md-top-app-bar>
                <md-navigation-drawer id="navigationDrawer" open .list="${this.list}" @onTreeItemClick="${this.handleTreeItemClick}" @onTreeItemSelected="${this.handleTreeItemSelected}"></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>

                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown .text="${this.doc}"></md-markdown>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener("onRouterCurrentEntryChange", () => {
            this.requestUpdate();
        });
    }

    handleCardIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleTreeItemSelected(event) {
        if (!this.ready) {
            this.ready = 1;
            const treeItem = event.detail;
            treeItem.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "instant",
            });
        }
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
