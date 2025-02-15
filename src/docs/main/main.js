import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { Layout } from "../../material/layout/layout";

function select(items) {
    items.forEach((item) => {
        item.selected = item.routerLink === Router.pathname;

        if (item.children?.length) {
            select(item.children);
        }
    });
}

function sortItems(items) {
    items.sort((a, b) => {
        if (a.children && !b.children) return -1;
        if (!a.children && b.children) return 1;

        return a.label.localeCompare(b.label);
    });

    items.forEach((item) => {
        if (item.children) {
            sortItems(item.children);
        }
    });
}

class DocsMain extends MdComponent {
    constructor() {
        super();

        this.items = [
            {
                label: "Components",
                children: [
                    { label: "badge", routerLink: "/docs/badge" },
                    { label: "bottom-app-bar", routerLink: "/docs/bottom-app-bar" },
                    { label: "bottom-sheet", routerLink: "/docs/bottom-sheet" },
                    { label: "button", routerLink: "/docs/button" },
                    { label: "card", routerLink: "/docs/card" },
                    { label: "checkbox", routerLink: "/docs/checkbox" },
                    { label: "chip", routerLink: "/docs/chip" },
                    { label: "chips", routerLink: "/docs/chips" },
                    { label: "data-table-cell", routerLink: "/docs/data-table-cell" },
                    { label: "data-table", routerLink: "/docs/data-table" },
                    { label: "date-field", routerLink: "/docs/date-field" },
                    { label: "date-picker", routerLink: "/docs/date-picker" },
                    { label: "datetime-field", routerLink: "/docs/datetime-field" },
                    { label: "datetime-picker", routerLink: "/docs/datetime-picker" },
                    { label: "dialog", routerLink: "/docs/dialog" },
                    { label: "divider", routerLink: "/docs/divider" },
                    { label: "fab", routerLink: "/docs/fab" },
                    { label: "form", routerLink: "/docs/form" },
                    { label: "icon", routerLink: "/docs/icon" },
                    { label: "icon-button", routerLink: "/docs/icon-button" },
                    { label: "image", routerLink: "/docs/image" },
                    { label: "list-item", routerLink: "/docs/list-item" },
                    { label: "list-row", routerLink: "/docs/list-row" },
                    { label: "list", routerLink: "/docs/list" },
                    { label: "menu", routerLink: "/docs/menu" },
                    { label: "month-field", routerLink: "/docs/month-field" },
                    { label: "month-picker", routerLink: "/docs/month-picker" },
                    { label: "navigation-bar", routerLink: "/docs/navigation-bar" },
                    { label: "navigation-drawer", routerLink: "/docs/navigation-drawer" },
                    { label: "navigation-list-item", routerLink: "/docs/navigation-list-item" },
                    { label: "navigation-list-row", routerLink: "/docs/navigation-list-row" },
                    { label: "navigation-list", routerLink: "/docs/navigation-list" },
                    { label: "navigation-rail", routerLink: "/docs/navigation-rail" },
                    { label: "progress-indicator", routerLink: "/docs/progress-indicator" },
                    { label: "radio-button", routerLink: "/docs/radio-button" },
                    { label: "scrim", routerLink: "/docs/scrim" },
                    { label: "segmented-button", routerLink: "/docs/segmented-button" },
                    { label: "sheet", routerLink: "/docs/sheet" },
                    { label: "side-sheet", routerLink: "/docs/side-sheet" },
                    { label: "slider", routerLink: "/docs/slider" },
                    { label: "snackbar", routerLink: "/docs/snackbar" },
                    { label: "switch", routerLink: "/docs/switch" },
                    { label: "tab", routerLink: "/docs/tab" },
                    { label: "tabs", routerLink: "/docs/tabs" },
                    { label: "text-field", routerLink: "/docs/text-field" },
                    { label: "time-field", routerLink: "/docs/time-field" },
                    { label: "time-picker", routerLink: "/docs/time-picker" },
                    { label: "tooltip", routerLink: "/docs/tooltip" },
                    { label: "top-app-bar", routerLink: "/docs/top-app-bar" },
                    { label: "tree-item", routerLink: "/docs/tree-item" },
                    { label: "tree-row", routerLink: "/docs/tree-row" },
                    { label: "tree", routerLink: "/docs/tree" },
                    { label: "week-field", routerLink: "/docs/week-field" },
                    { label: "week-picker", routerLink: "/docs/week-picker" },
                ],
            },
            {
                label: "Modules",
                children: [
                    { label: "color", routerLink: "/docs/color" },
                    { label: "component", routerLink: "/docs/component" },
                    { label: "layout", routerLink: "/docs/layout" },
                    { label: "localization", routerLink: "/docs/localization" },
                    { label: "movable", routerLink: "/docs/movable" },
                    { label: "polyfill", routerLink: "/docs/polyfill" },
                    { label: "popper", routerLink: "/docs/popper" },
                    { label: "progress", routerLink: "/docs/progress" },
                    { label: "ripple", routerLink: "/docs/ripple" },
                    { label: "router", routerLink: "/docs/router" },
                    { label: "store", routerLink: "/docs/store" },
                    { label: "util", routerLink: "/docs/util" },
                    { label: "virtual-scroll", routerLink: "/docs/virtual-scroll" },
                ],
            },
        ];

        sortItems(this.items);
        select(this.items);
    }

    render() {
        return html`
            <div class="md-layout__border">
                <md-navigation-drawer
                    id="docsMainNavigationDrawer"
                    type="tree"
                    open
                    .items="${this.items}"
                    @onTreeKeydownEnter="${this.handleDemoMainNavigationDrawerTreeKeydownEnter}"
                ></md-navigation-drawer>

                <md-sheet region="center"><md-outlet></md-outlet></md-sheet>
            </div>
        `;
    }

    handleDemoMainNavigationDrawerTreeKeydownEnter(event) {
        const treeItemSelected = docsMainNavigationDrawer.querySelector("md-tree-item[selected]");
        treeItemSelected.click();
    }
}

customElements.define("docs-main", DocsMain);

export default document.createElement("docs-main");
