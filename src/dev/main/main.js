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
        this.items = [
            {
                label: "cdk",
                items: [
                    { label: "observer", routerLink: "/observer" },
                    { label: "media-observer", routerLink: "/media-observer" },
                    { label: "attribute-observer", routerLink: "/attribute-observer" },
                    { label: "store", routerLink: "/store" },
                    { label: "router", routerLink: "/router" },
                    { label: "localization", routerLink: "/localization" },
                    { label: "color", routerLink: "/color" },
                    { label: "progress", routerLink: "/progress" },
                    { label: "functions", routerLink: "/functions" },
                    { label: "ripple", routerLink: "/ripple" },
                    { label: "popper", routerLink: "/popper" },
                    { label: "gesture", routerLink: "/gesture" },
                    { label: "virtual", routerLink: "/virtual" },
                    { label: "component", routerLink: "/component" },
                    { label: "template", routerLink: "/template" },
                ],
            },
            {
                label: "base",
                items: [
                    // { label: "layout-item", routerLink: "/layout-item" },
                    { label: "layout", routerLink: "/layout" },
                    { label: "markdown", routerLink: "/markdown" },
                    { label: "divider", routerLink: "/divider" },
                    { label: "spacer", routerLink: "/spacer" },
                    { label: "icon", routerLink: "/icon" },
                    { label: "emoji", routerLink: "/emoji" },
                    { label: "image", routerLink: "/image" },
                    { label: "badge", routerLink: "/badge" },
                ],
            },
            {
                label: "button",
                items: [
                    { label: "button", routerLink: "/button" },
                    { label: "icon-button", routerLink: "/icon-button" },
                    { label: "segmented-button", routerLink: "/segmented-button" },
                    { label: "fab", routerLink: "/fab" },
                ],
            },
            {
                label: "form",
                items: [
                    { label: "form", routerLink: "/form" },
                    { label: "checkbox", routerLink: "/checkbox" },
                    { label: "radio-button", routerLink: "/radio-button" },
                    { label: "switch", routerLink: "/switch" },
                    { label: "slider", routerLink: "/slider" },
                    { label: "text-field", routerLink: "/text-field" },
                    { label: "datetime-field", routerLink: "/datetime-field" },
                    { label: "date-field", routerLink: "/date-field" },
                    { label: "month-field", routerLink: "/month-field" },
                    { label: "week-field", routerLink: "/week-field" },
                    { label: "time-field", routerLink: "/time-field" },
                    { label: "color-field", routerLink: "/color-field" },
                    { label: "number-field", routerLink: "/number-field" },
                    { label: "search-field", routerLink: "/search-field" },
                    { label: "password-field", routerLink: "/password-field" },
                    { label: "textarea-field", routerLink: "/textarea-field" },
                    { label: "select-field", routerLink: "/select-field" },
                    { label: "progress-indicator", routerLink: "/progress-indicator" },
                ],
            },
            {
                label: "card",
                items: [
                    // { label: "box", routerLink: "/box" },
                    { label: "toolbar", routerLink: "/toolbar" },
                    { label: "card", routerLink: "/card" },
                    { label: "scrim", routerLink: "/scrim" },
                    { label: "sheet", routerLink: "/sheet" },
                    { label: "dialog", routerLink: "/dialog" },
                    { label: "top-app-bar", routerLink: "/top-app-bar" },
                    { label: "side-sheet", routerLink: "/side-sheet" },
                    { label: "bottom-sheet", routerLink: "/bottom-sheet" },
                    { label: "snackbar", routerLink: "/snackbar" },
                    { label: "tooltip", routerLink: "/tooltip" },
                    { label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
                ],
            },
            {
                label: "picker",
                items: [
                    { label: "datetime-picker", routerLink: "/datetime-picker" },
                    { label: "date-picker", routerLink: "/date-picker" },
                    { label: "month-picker", routerLink: "/month-picker" },
                    { label: "time-picker", routerLink: "/time-picker" },
                    { label: "week-picker", routerLink: "/week-picker" },
                    { label: "color-picker", routerLink: "/color-picker" },
                    { label: "emoji-picker", routerLink: "/emoji-picker" },
                ],
            },
            {
                label: "list",
                items: [
                    // { label: "list-item", routerLink: "/list-item" },
                    { label: "list", items:[
                        { label: "list", routerLink: "/list" },
                        { label: "list2", routerLink: "/list2" },
                    ] },
                    // { label: "tree-item", routerLink: "/tree-item" },
                    { label: "tree", routerLink: "/tree" },
                    { label: "chip", routerLink: "/chip" },
                    { label: "chips", routerLink: "/chips" },
                    { label: "navigation-bar", routerLink: "/navigation-bar" },
                    { label: "navigation-drawer", routerLink: "/navigation-drawer" },
                    { label: "navigation-rail", routerLink: "/navigation-rail" },
                    { label: "menu", routerLink: "/menu" },
                    { label: "tabs", routerLink: "/tabs" },
                ],
            },
            {
                label: "table",
                items: [
                    { label: "pagination", routerLink: "/pagination" },
                    // { label: "data-table-item", routerLink: "/data-table-item" },
                    // { label: "data-table-column-cell", routerLink: "/data-table-column-cell" },
                    // { label: "data-table-row-cell", routerLink: "/data-table-row-cell" },
                    { label: "data-table", routerLink: "/data-table" },
                ],
            },
        ];

        this.select(this.items, MDRouter.path);
    }

    select(list, routerLink) {
        list.sort((a, b) => a.label.localeCompare(b.label));
        list.forEach((item) => {
            item.selected = item.routerLink === routerLink;
            if (item.items?.length) {
                this.select(item.items, routerLink);
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
                <md-navigation-drawer id="navigationDrawer" .items="${this.items}" variant="tree" open></md-navigation-drawer>
                <md-layout-item region="center">
                    <md-outlet></md-outlet>
                </md-layout-item>
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
