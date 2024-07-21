import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";
import { toTitleCase } from "../../material/functions/functions.js";
// import jsdoc from "../../assets/jsdoc.json";

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
            "color-field",
            "color-picker",
            "color",
            "component",
            "data-table-column-cell",
            "data-table-item",
            "data-table-row-cell",
            "data-table",
            "date-field",
            "date-picker",
            "datetime-field",
            "datetime-picker",
            "dialog",
            "divider",
            "emoji-picker",
            "emoji",
            "fab",
            "form",
            "functions",
            "gesture",
            "icon-button",
            "icon",
            "image",
            "layout",
            "list-item",
            "list",
            "localization",
            "markdown",
            "media-observer",
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
            "progress-indicator",
            "progress",
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
            "spacer",
            "store",
            "switch",
            "tabs",
            "template",
            "text-field",
            "textarea-field",
            "time-field",
            "time-picker",
            "toolbar",
            "tooltip",
            "top-app-bar",
            "tree-item",
            "tree",
            "virtual",
            "week-field",
            "week-picker",
        ];

        this.list = this.list.map((item) => {
            let doc = {};
            doc.label = toTitleCase(item);
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

    // get doc() {
    //     const name = MDRouter.path.slice(1) + ".js";
    //     return jsdoc[name];
    // }

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
                    <!-- <md-markdown
                        .text="${this.doc}"
                        style="margin:24px;"
                    ></md-markdown> -->
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        // window.addEventListener("onRouterCurrentEntryChange", () => {
        //     this.requestUpdate();
        // });
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
