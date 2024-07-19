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
            "observer",
            "media-observer",
            "attribute-observer",
            "store",
            "router",
            "localization",
            "color",
            "progress",
            "functions",
            "ripple",
            "popper",
            "gesture",
            "virtual",
            "component",
            "template",
            "markdown",
            "divider",
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
            "list-item",
            "list",
            "tree-item",
            "tree",
            "chip",
            "chips",
            "navigation-bar",
            "navigation-drawer",
            "navigation-rail",
            "menu",
            "tabs",
            "form",
            "checkbox",
            "radio-button",
            "switch",
            "slider",
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
            "progress-indicator",
            "pagination",
            "data-table-item",
            "data-table-column-cell",
            "data-table-row-cell",
            "data-table",
        ];

        this.list = this.list.map((item) => {
            let doc = {};
            doc.label = item;
            doc.routerLink = "/" + item;
            return doc;
        });

        this.select(this.list, MDRouter.path);
    }

    select(list, routerLink) {
        list.sort((a, b) => a.label.localeCompare(b.label));
        list.forEach((item) => {
            item.selected = item.routerLink === routerLink;
            if (item.children?.length) {
                this.select(item.children, routerLink);
            }
        });
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
                    variant="tree"
                    id="navigationDrawer"
                    open
                    .list="${this.list}"
                    @onTreeItemClick="${this.handleTreeItemClick}"
                    @onTreeItemSelected="${this.handleTreeItemSelected}"
                ></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                    <md-markdown
                        .text="${this.doc}"
                        style="margin:24px;"
                    ></md-markdown>
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
