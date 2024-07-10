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
            "attribute-observer",
            "badge",
            "bottom-app-bar",
            "bottom-sheet",
            "button",
            "card",
            "checkbox",
            "chip",
            "chips",
            "color",
            "color-field",
            "color-picker",
            "component",
            "data-table",
            "data-table-item",
            "data-table-native-column",
            "date-field",
            "date-picker",
            "datetime-field",
            "datetime-picker",
            "dialog",
            "emoji",
            "emoji-picker",
            "fab",
            "form",
            "functions",
            "gesture",
            "icon",
            "icon-button",
            "image",
            "list",
            "list-item",
            "localization",
            "markdown",
            "menu",
            "month-field",
            "month-picker",
            "navigation-bar",
            "navigation-drawer",
            "navigation-rail",
            "number-field",
            "observer",
            "pagination",
            "password-field",
            "popper",
            "progress",
            "progress-indicator",
            "radio-button",
            "ripple",
            "router",
            "scrim",
            "search-field",
            "segmented-button",
            "select-field",
            "sheet",
            "side-sheet",
            "slider",
            "snackbar",
            "store",
            "switch",
            "tabs",
            "text-field",
            "textarea-field",
            "time-field",
            "time-picker",
            "tooltip",
            "top-app-bar",
            "tree",
            "tree-item",
            "virtual",
            "week-field",
            "week-picker",
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
                <md-top-app-bar
                    id="topAppBar"
                    leadingActions='[{"icon":"menu"}]'
                    @onCardIconButtonClick="${this.handleCardIconButtonClick}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="navigationDrawer"
                    open
                    .list="${this.list}"
                    @onTreeItemClick="${this.handleTreeItemClick}"
                    @onTreeItemSelected="${this.handleTreeItemSelected}"
                ></md-navigation-drawer>
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
