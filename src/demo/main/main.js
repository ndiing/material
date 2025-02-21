import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { LayoutObserver } from "../../material/layout-observer/layout-observer";
class DemoMain extends MdComponent {
    get demoMainTopAppBar() {
        return this.querySelector("#demoMainTopAppBar");
    }

    get demoMainNavigationDrawer() {
        return this.querySelector("#demoMainNavigationDrawer");
    }

    constructor() {
        super();
        this.items = [
            { label: "badge", children: [{ label: "badge", routerLink: "/demo/badge", group: "badge" }] },
            {
                label: "bottom-app-bar",
                children: [
                    { label: "bottom-app-bar-no-fab", routerLink: "/demo/bottom-app-bar-no-fab", group: "bottom-app-bar" },
                    { label: "bottom-app-bar", routerLink: "/demo/bottom-app-bar", group: "bottom-app-bar" },
                ],
            },
            {
                label: "bottom-sheet",
                children: [
                    { label: "bottom-sheet-modal", routerLink: "/demo/bottom-sheet-modal", group: "bottom-sheet" },
                    { label: "bottom-sheet", routerLink: "/demo/bottom-sheet", group: "bottom-sheet" },
                ],
            },
            {
                label: "button",
                children: [
                    { label: "button-elevated", routerLink: "/demo/button-elevated", group: "button" },
                    { label: "button-filled-tonal", routerLink: "/demo/button-filled-tonal", group: "button" },
                    { label: "button-filled", routerLink: "/demo/button-filled", group: "button" },
                    { label: "button-outlined", routerLink: "/demo/button-outlined", group: "button" },
                    { label: "button", routerLink: "/demo/button", group: "button" },
                ],
            },
            { label: "card", children: [{ label: "card", routerLink: "/demo/card", group: "card" }] },
            { label: "checkbox", children: [{ label: "checkbox", routerLink: "/demo/checkbox", group: "checkbox" }] },
            {
                label: "chips",
                children: [
                    { label: "chips-multi-select", routerLink: "/demo/chips-multi-select", group: "chips" },
                    { label: "chips-single-select", routerLink: "/demo/chips-single-select", group: "chips" },
                    { label: "chips", routerLink: "/demo/chips", group: "chips" },
                ],
            },
            {
                label: "data-table",
                children: [
                    { label: "data-table-cell", routerLink: "/demo/data-table-cell", group: "data-table" },
                    { label: "data-table-checkbox", routerLink: "/demo/data-table-checkbox", group: "data-table" },
                    { label: "data-table-resizable", routerLink: "/demo/data-table-resizable", group: "data-table" },
                    { label: "data-table-sortable", routerLink: "/demo/data-table-sortable", group: "data-table" },
                    { label: "data-table-virtualize", routerLink: "/demo/data-table-virtualize", group: "data-table" },
                    { label: "data-table", routerLink: "/demo/data-table", group: "data-table" },
                ],
            },
            { label: "date-field", children: [{ label: "date-field", routerLink: "/demo/date-field", group: "date-field" }] },
            {
                label: "date-picker",
                children: [
                    { label: "date-picker-modal", routerLink: "/demo/date-picker-modal", group: "date-picker" },
                    { label: "date-picker", routerLink: "/demo/date-picker", group: "date-picker" },
                ],
            },
            { label: "datetime-field", children: [{ label: "datetime-field", routerLink: "/demo/datetime-field", group: "datetime-field" }] },
            {
                label: "datetime-picker",
                children: [
                    { label: "datetime-picker-modal", routerLink: "/demo/datetime-picker-modal", group: "datetime-picker" },
                    { label: "datetime-picker", routerLink: "/demo/datetime-picker", group: "datetime-picker" },
                ],
            },
            { label: "dialog", children: [{ label: "dialog", routerLink: "/demo/dialog", group: "dialog" }] },
            { label: "divider", children: [{ label: "divider", routerLink: "/demo/divider", group: "divider" }] },
            { label: "error", children: [{ label: "error", routerLink: "/demo/error", group: "error" }] },
            {
                label: "fab",
                children: [
                    { label: "fab-extended", routerLink: "/demo/fab-extended", group: "fab" },
                    { label: "fab-large", routerLink: "/demo/fab-large", group: "fab" },
                    { label: "fab-small", routerLink: "/demo/fab-small", group: "fab" },
                    { label: "fab-unelevated", routerLink: "/demo/fab-unelevated", group: "fab" },
                    { label: "fab", routerLink: "/demo/fab", group: "fab" },
                ],
            },
            { label: "form", children: [{ label: "form", routerLink: "/demo/form", group: "form" }] },
            { label: "icon", children: [{ label: "icon", routerLink: "/demo/icon", group: "icon" }] },
            {
                label: "icon-button",
                children: [
                    { label: "icon-button-filled-tonal", routerLink: "/demo/icon-button-filled-tonal", group: "icon-button" },
                    { label: "icon-button-filled", routerLink: "/demo/icon-button-filled", group: "icon-button" },
                    { label: "icon-button-outlined", routerLink: "/demo/icon-button-outlined", group: "icon-button" },
                    { label: "icon-button", routerLink: "/demo/icon-button", group: "icon-button" },
                ],
            },
            { label: "image", children: [{ label: "image", routerLink: "/demo/image", group: "image" }] },
            {
                label: "list",
                children: [
                    { label: "list-avatar", routerLink: "/demo/list-avatar", group: "list" },
                    { label: "list-checkbox", routerLink: "/demo/list-checkbox", group: "list" },
                    { label: "list-icon", routerLink: "/demo/list-icon", group: "list" },
                    { label: "list-image", routerLink: "/demo/list-image", group: "list" },
                    { label: "list-item", routerLink: "/demo/list-item", group: "list" },
                    { label: "list-multi-select", routerLink: "/demo/list-multi-select", group: "list" },
                    { label: "list-radio-button", routerLink: "/demo/list-radio-button", group: "list" },
                    { label: "list-row", routerLink: "/demo/list-row", group: "list" },
                    { label: "list-single-select", routerLink: "/demo/list-single-select", group: "list" },
                    { label: "list-switch", routerLink: "/demo/list-switch", group: "list" },
                    { label: "list-text", routerLink: "/demo/list-text", group: "list" },
                    { label: "list-video", routerLink: "/demo/list-video", group: "list" },
                    { label: "list-virtualize", routerLink: "/demo/list-virtualize", group: "list" },
                    { label: "list", routerLink: "/demo/list", group: "list" },
                ],
            },
            { label: "main", children: [{ label: "main", routerLink: "/demo/main", group: "main" }] },
            { label: "menu", children: [{ label: "menu", routerLink: "/demo/menu", group: "menu" }] },
            { label: "month-field", children: [{ label: "month-field", routerLink: "/demo/month-field", group: "month-field" }] },
            {
                label: "month-picker",
                children: [
                    { label: "month-picker-modal", routerLink: "/demo/month-picker-modal", group: "month-picker" },
                    { label: "month-picker", routerLink: "/demo/month-picker", group: "month-picker" },
                ],
            },
            {
                label: "navigation-bar",
                children: [
                    { label: "navigation-bar-no-label", routerLink: "/demo/navigation-bar-no-label", group: "navigation-bar" },
                    { label: "navigation-bar", routerLink: "/demo/navigation-bar", group: "navigation-bar" },
                ],
            },
            {
                label: "navigation-drawer",
                children: [
                    { label: "navigation-drawer-modal", routerLink: "/demo/navigation-drawer-modal", group: "navigation-drawer" },
                    { label: "navigation-drawer", routerLink: "/demo/navigation-drawer", group: "navigation-drawer" },
                ],
            },
            {
                label: "navigation-list",
                children: [
                    { label: "navigation-list-item", routerLink: "/demo/navigation-list-item", group: "navigation-list" },
                    { label: "navigation-list-row", routerLink: "/demo/navigation-list-row", group: "navigation-list" },
                    { label: "navigation-list", routerLink: "/demo/navigation-list", group: "navigation-list" },
                ],
            },
            {
                label: "navigation-rail",
                children: [
                    { label: "navigation-rail-no-label", routerLink: "/demo/navigation-rail-no-label", group: "navigation-rail" },
                    { label: "navigation-rail", routerLink: "/demo/navigation-rail", group: "navigation-rail" },
                ],
            },
            { label: "number-field", children: [{ label: "number-field", routerLink: "/demo/number-field", group: "number-field" }] },
            { label: "password-field", children: [{ label: "password-field", routerLink: "/demo/password-field", group: "password-field" }] },
            {
                label: "progress-indicator",
                children: [
                    { label: "progress-indicator-circular", routerLink: "/demo/progress-indicator-circular", group: "progress-indicator" },
                    { label: "progress-indicator", routerLink: "/demo/progress-indicator", group: "progress-indicator" },
                ],
            },
            { label: "radio-button", children: [{ label: "radio-button", routerLink: "/demo/radio-button", group: "radio-button" }] },
            { label: "scrim", children: [{ label: "scrim", routerLink: "/demo/scrim", group: "scrim" }] },
            {
                label: "segmented-button",
                children: [
                    { label: "segmented-button-multi-select", routerLink: "/demo/segmented-button-multi-select", group: "segmented-button" },
                    { label: "segmented-button-single-select", routerLink: "/demo/segmented-button-single-select", group: "segmented-button" },
                    { label: "segmented-button", routerLink: "/demo/segmented-button", group: "segmented-button" },
                ],
            },
            {
                label: "sheet",
                children: [
                    { label: "sheet-center", routerLink: "/demo/sheet-center", group: "sheet" },
                    { label: "sheet-east-modal", routerLink: "/demo/sheet-east-modal", group: "sheet" },
                    { label: "sheet-east", routerLink: "/demo/sheet-east", group: "sheet" },
                    { label: "sheet-north-modal", routerLink: "/demo/sheet-north-modal", group: "sheet" },
                    { label: "sheet-north", routerLink: "/demo/sheet-north", group: "sheet" },
                    { label: "sheet-south-modal", routerLink: "/demo/sheet-south-modal", group: "sheet" },
                    { label: "sheet-south", routerLink: "/demo/sheet-south", group: "sheet" },
                    { label: "sheet-west-modal", routerLink: "/demo/sheet-west-modal", group: "sheet" },
                    { label: "sheet-west", routerLink: "/demo/sheet-west", group: "sheet" },
                    { label: "sheet", routerLink: "/demo/sheet", group: "sheet" },
                ],
            },
            {
                label: "side-sheet",
                children: [
                    { label: "side-sheet-modal", routerLink: "/demo/side-sheet-modal", group: "side-sheet" },
                    { label: "side-sheet", routerLink: "/demo/side-sheet", group: "side-sheet" },
                ],
            },
            {
                label: "slider",
                children: [
                    { label: "slider-centered", routerLink: "/demo/slider-centered", group: "slider" },
                    { label: "slider-continuous", routerLink: "/demo/slider-continuous", group: "slider" },
                    { label: "slider-discrete", routerLink: "/demo/slider-discrete", group: "slider" },
                    { label: "slider-range-selection", routerLink: "/demo/slider-range-selection", group: "slider" },
                    { label: "slider", routerLink: "/demo/slider", group: "slider" },
                ],
            },
            { label: "snackbar", children: [{ label: "snackbar", routerLink: "/demo/snackbar", group: "snackbar" }] },
            { label: "switch", children: [{ label: "switch", routerLink: "/demo/switch", group: "switch" }] },
            {
                label: "tabs",
                children: [
                    { label: "tab", routerLink: "/demo/tab", group: "tabs" },
                    { label: "tabs-primary", routerLink: "/demo/tabs-primary", group: "tabs" },
                    { label: "tabs-secondary", routerLink: "/demo/tabs-secondary", group: "tabs" },
                    { label: "tabs", routerLink: "/demo/tabs", group: "tabs" },
                ],
            },
            { label: "test", children: [{ label: "test", routerLink: "/demo/test", group: "test" }] },
            {
                label: "text-field",
                children: [
                    { label: "text-field-filled", routerLink: "/demo/text-field-filled", group: "text-field" },
                    { label: "text-field-outlined", routerLink: "/demo/text-field-outlined", group: "text-field" },
                    { label: "text-field", routerLink: "/demo/text-field", group: "text-field" },
                ],
            },
            { label: "time-field", children: [{ label: "time-field", routerLink: "/demo/time-field", group: "time-field" }] },
            {
                label: "time-picker",
                children: [
                    { label: "time-picker-modal", routerLink: "/demo/time-picker-modal", group: "time-picker" },
                    { label: "time-picker", routerLink: "/demo/time-picker", group: "time-picker" },
                ],
            },
            { label: "tooltip", children: [{ label: "tooltip", routerLink: "/demo/tooltip", group: "tooltip" }] },
            { label: "top-app-bar", children: [{ label: "top-app-bar", routerLink: "/demo/top-app-bar", group: "top-app-bar" }] },
            {
                label: "tree",
                children: [
                    { label: "tree-item", routerLink: "/demo/tree-item", group: "tree" },
                    { label: "tree-row", routerLink: "/demo/tree-row", group: "tree" },
                    { label: "tree", routerLink: "/demo/tree", group: "tree" },
                ],
            },
            { label: "week-field", children: [{ label: "week-field", routerLink: "/demo/week-field", group: "week-field" }] },
            {
                label: "week-picker",
                children: [
                    { label: "week-picker-modal", routerLink: "/demo/week-picker-modal", group: "week-picker" },
                    { label: "week-picker", routerLink: "/demo/week-picker", group: "week-picker" },
                ],
            },
        ];
        this.sortItems(this.items);
        this.demoMainTopAppBarLeadingActions = [{ icon: "menu" }];
    }

    render() {
        return html`
            <md-layout-border>
                <md-top-app-bar
                    id="demoMainTopAppBar"
                    label="Demo"
                    .leadingActions="${this.demoMainTopAppBarLeadingActions}"
                    @onTopAppBarIconButtonClick="${this.handleDemoMainTopAppBarIconButtonClick}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="demoMainNavigationDrawer"
                    type="tree"
                    .items="${this.items}"
                    @onTreeItemClick="${this.handleDemoMainNavigationDrawerTreeItemClick}"
                    @onTreeKeydownEnter="${this.handleDemoMainNavigationDrawerTreeKeydownEnter}"
                ></md-navigation-drawer>
                <md-layout-border-item region="center">
                    <md-outlet></md-outlet>
                </md-layout-border-item>
            </md-layout-border>
        `;
    }

    sortItems(items) {
        items.sort((a, b) => {
            if (a.children && !b.children) return -1;

            if (!a.children && b.children) return 1;
            return a.label.localeCompare(b.label);
        });

        items.forEach((item) => {
            if (item.children) {
                this.sortItems(item.children);
            }
        });
    }

    select(items) {
        items.forEach((item) => {
            item.selected = item.routerLink === Router.pathname;

            if (item.children?.length) {
                this.select(item.children);
            }
        });
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.select(this.items);
        this.handleMainLayoutCallback = this.handleMainLayoutCallback.bind(this);

        this.layout = new LayoutObserver(this.handleMainLayoutCallback);
        this.layout.init();
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.layout) {
            this.layout.destroy();
        }
    }

    handleMainLayoutCallback(item) {
        if (item.name === "expanded") {
            this.demoMainTopAppBar.open = false;
            this.demoMainNavigationDrawer.modal = false;
            this.demoMainNavigationDrawer.open = true;
            this.demoMainNavigationDrawer.scrim.open = false;
        } else {
            this.demoMainTopAppBar.open = true;
            this.demoMainNavigationDrawer.modal = true;
            this.demoMainNavigationDrawer.open = false;
            this.demoMainNavigationDrawer.scrim.open = false;
        }
    }

    handleDemoMainTopAppBarIconButtonClick(event) {
        this.demoMainNavigationDrawer.toggle();
    }

    handleDemoMainNavigationDrawerTreeItemClick(event) {
        if (this.demoMainNavigationDrawer.modal && event.detail.event.currentTarget.data.routerLink) {
            this.demoMainNavigationDrawer.toggle();
        }
    }

    handleDemoMainNavigationDrawerTreeKeydownEnter(event) {
        const treeItemSelected = this.demoMainNavigationDrawer.querySelector("md-tree-item[selected]");
        treeItemSelected.click();
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
