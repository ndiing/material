import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";
import { toTitleCase } from "../../material/functions/functions.js";

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

        this.list = ["attribute-observer", "badge", "bottom-app-bar", "bottom-sheet", "button", "card", "checkbox", "chip", "chips", "color-field", "color-picker", "color", "component", "data-table-column-cell", "data-table-item", "data-table-row-cell", "data-table", "date-field", "date-picker", "datetime-field", "datetime-picker", "dialog", "divider", "emoji-picker", "emoji", "fab", "form", "functions", "gesture", "icon-button", "icon", "image", "layout", "list-item", "list", "localization", "markdown", "media-observer", "menu", "month-field", "month-picker", "navigation-bar", "navigation-drawer", "navigation-rail", "number-field", "observer", "pagination", "password-field", "popper", "progress-indicator", "progress", "radio-button", "ripple", "router", "scrim", "search-field", "segmented-button", "select-field", "sheet", "side-sheet", "slider", "snackbar", "spacer", "store", "switch", "tabs", "template", "text-field", "textarea-field", "time-field", "time-picker", "toolbar", "tooltip", "top-app-bar", "tree-item", "tree", "virtual", "week-field", "week-picker"];

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

    render() {
        return html`
            <md-layout variant="border">
                <!-- <md-top-app-bar
                    id="topAppBar"
                    .leadingActions="${[{ icon: "menu", onIconButtonClick: this.handleIconButtonClick.bind(this) }]}"
                    open
                ></md-top-app-bar> -->
                <md-navigation-drawer
                    id="navigationDrawer"
                    .list="${this.list}"
                    variant="tree"
                    open
                ></md-navigation-drawer>
                <md-layout-item region="center"><md-outlet></md-outlet></md-layout-item>
            </md-layout>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    handleIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
