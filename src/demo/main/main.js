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
            { label: "Badge", routerLink: "/demo/badge" },
            {
                label: "Bottom App Bar",
                children: [
                    { label: "Bottom App Bar", routerLink: "/demo/bottom-app-bar" },
                    { label: "Bottom App Bar No FAB", routerLink: "/demo/bottom-app-bar-no-fab" },
                ],
            },
            {
                label: "Bottom Sheet",
                children: [
                    { label: "Bottom Sheet", routerLink: "/demo/bottom-sheet" },
                    { label: "Bottom Sheet Modal", routerLink: "/demo/bottom-sheet-modal" },
                ],
            },
            {
                label: "Button",
                children: [
                    { label: "Button", routerLink: "/demo/button" },
                    { label: "Button Elevated", routerLink: "/demo/button-elevated" },
                    { label: "Button Filled", routerLink: "/demo/button-filled" },
                    { label: "Button Filled Tonal", routerLink: "/demo/button-filled-tonal" },
                    { label: "Button Outlined", routerLink: "/demo/button-outlined" },
                ],
            },
            { label: "Card", routerLink: "/demo/card" },
            { label: "Checkbox", routerLink: "/demo/checkbox" },
            {
                label: "Chips",
                children: [
                    { label: "Chips", routerLink: "/demo/chips" },
                    // { label: "Chips Single Select", routerLink: "/demo/chips-single-select" },
                    { label: "Chips Multi Select", routerLink: "/demo/chips-multi-select" },
                ],
            },
            // { label: "Data Table Cell", routerLink: "/demo/data-table-cell" },
            {
                label: "Data Table",
                children: [
                    { label: "Data Table", routerLink: "/demo/data-table" },
                    { label: "Data Table Checkbox", routerLink: "/demo/data-table-checkbox" },
                    { label: "Data Table Sortable", routerLink: "/demo/data-table-sortable" },
                    { label: "Data Table Resizable", routerLink: "/demo/data-table-resizable" },
                    { label: "Data Table Virtualize", routerLink: "/demo/data-table-virtualize" },
                ],
            },
            { label: "Dialog", routerLink: "/demo/dialog" },
            { label: "Divider", routerLink: "/demo/divider" },
            {
                label: "FAB",
                children: [
                    { label: "FAB", routerLink: "/demo/fab" },
                    { label: "FAB Unelevated", routerLink: "/demo/fab-unelevated" },
                    { label: "FAB Extended", routerLink: "/demo/fab-extended" },
                    { label: "FAB Small", routerLink: "/demo/fab-small" },
                    { label: "FAB Large", routerLink: "/demo/fab-large" },
                ],
            },
            { label: "Form", routerLink: "/demo/form" },
            { label: "Icon", routerLink: "/demo/icon" },
            {
                label: "Icon Button",
                children: [
                    { label: "Icon Button", routerLink: "/demo/icon-button" },
                    { label: "Icon Button Filled", routerLink: "/demo/icon-button-filled" },
                    { label: "Icon Button Filled Tonal", routerLink: "/demo/icon-button-filled-tonal" },
                    { label: "Icon Button Outlined", routerLink: "/demo/icon-button-outlined" },
                ],
            },
            { label: "Image", routerLink: "/demo/image" },
            // { label: "List Item", routerLink: "/demo/list-item" },
            // { label: "List Row", routerLink: "/demo/list-row" },
            {
                label: "List",
                children: [
                    { label: "List", routerLink: "/demo/list" },
                    // { label: "List Single Select", routerLink: "/demo/list-single-select" },
                    // { label: "List Multi Select", routerLink: "/demo/list-multi-select" },
                ],
            },
            { label: "Menu", routerLink: "/demo/menu" },
            {
                label: "Navigation Bar",
                children: [
                    { label: "Navigation Bar", routerLink: "/demo/navigation-bar" },
                    { label: "Navigation Bar No Label", routerLink: "/demo/navigation-bar-no-label" },
                ],
            },
            {
                label: "Navigation Drawer",
                children: [
                    { label: "Navigation Drawer", routerLink: "/demo/navigation-drawer" },
                    { label: "Navigation Drawer Modal", routerLink: "/demo/navigation-drawer-modal" },
                ],
            },
            {
                label: "Navigation Rail",
                children: [
                    { label: "Navigation Rail", routerLink: "/demo/navigation-rail" },
                    { label: "Navigation Rail No Label", routerLink: "/demo/navigation-rail-no-label" },
                ],
            },
            {
                label: "Progress Indicator",
                children: [
                    { label: "Progress Indicator", routerLink: "/demo/progress-indicator" },
                    { label: "Progress Indicator Circular", routerLink: "/demo/progress-indicator-circular" },
                ],
            },
            { label: "Radio Button", routerLink: "/demo/radio-button" },
            { label: "Scrim", routerLink: "/demo/scrim" },
            {
                label: "Segmented Button",
                children: [
                    { label: "Segmented Button", routerLink: "/demo/segmented-button" },
                    // { label: "Segmented Button Single Select", routerLink: "/demo/segmented-button-single-select" },
                    { label: "Segmented Button Multi Select", routerLink: "/demo/segmented-button-multi-select" },
                ],
            },
            {
                label: "Sheet",
                children: [
                    // { label: "Sheet", routerLink: "/demo/sheet" },
                    { label: "Sheet North", routerLink: "/demo/sheet-north" },
                    { label: "Sheet East", routerLink: "/demo/sheet-east" },
                    { label: "Sheet South", routerLink: "/demo/sheet-south" },
                    { label: "Sheet West", routerLink: "/demo/sheet-west" },
                    { label: "Sheet North Modal", routerLink: "/demo/sheet-north-modal" },
                    { label: "Sheet East Modal", routerLink: "/demo/sheet-east-modal" },
                    { label: "Sheet South Modal", routerLink: "/demo/sheet-south-modal" },
                    { label: "Sheet West Modal", routerLink: "/demo/sheet-west-modal" },
                    // { label: "Sheet Center", routerLink: "/demo/sheet-center" },
                ],
            },
            {
                label: "Side Sheet",
                children: [
                    { label: "Side Sheet", routerLink: "/demo/side-sheet" },
                    { label: "Side Sheet Modal", routerLink: "/demo/side-sheet-modal" },
                ],
            },
            {
                label: "Slider",
                children: [
                    // { label: "Slider", routerLink: "/demo/slider" },
                    { label: "Slider Centered", routerLink: "/demo/slider-centered" },
                    { label: "Slider Continuous", routerLink: "/demo/slider-continuous" },
                    { label: "Slider Discrete", routerLink: "/demo/slider-discrete" },
                    { label: "Slider Range Selection", routerLink: "/demo/slider-range-selection" },
                ],
            },
            { label: "Snackbar", routerLink: "/demo/snackbar" },
            { label: "Switch", routerLink: "/demo/switch" },
            // { label: "Tab", routerLink: "/demo/tab" },
            {
                label: "Tabs",
                children: [
                    // { label: "Tabs", routerLink: "/demo/tabs" },
                    { label: "Tabs Primary", routerLink: "/demo/tabs-primary" },
                    { label: "Tabs Secondary", routerLink: "/demo/tabs-secondary" },
                ],
            },
            {
                label: "Text Field",
                children: [
                    { label: "Text Field", routerLink: "/demo/text-field" },
                    { label: "Text Field Outlined", routerLink: "/demo/text-field-outlined" },
                    { label: "Text Field Filled", routerLink: "/demo/text-field-filled" },
                    { label: "Datetime Field", routerLink: "/demo/datetime-field" },
                    { label: "Date Field", routerLink: "/demo/date-field" },
                    { label: "Time Field", routerLink: "/demo/time-field" },
                    { label: "Month Field", routerLink: "/demo/month-field" },
                    { label: "Week Field", routerLink: "/demo/week-field" },
                    { label: "Password Field", routerLink: "/demo/password-field" },
                    { label: "Number Field", routerLink: "/demo/number-field" },
                ],
            },
            { label: "Tooltip", routerLink: "/demo/tooltip" },
            { label: "Top App Bar", routerLink: "/demo/top-app-bar" },
            // { label: "Tree Item", routerLink: "/demo/tree-item" },
            // { label: "Tree Row", routerLink: "/demo/tree-row" },
            { label: "Tree", routerLink: "/demo/tree" },
            {
                label: "Picker",
                children: [
                    // {
                    //     label: "Datetime Picker",
                    //     children: [
                    { label: "Datetime Picker", routerLink: "/demo/datetime-picker" },
                    { label: "Datetime Picker Modal", routerLink: "/demo/datetime-picker-modal" },
                    // ],
                    // },
                    // {
                    //     label: "Date Picker",
                    //     children: [
                    { label: "Date Picker", routerLink: "/demo/date-picker" },
                    { label: "Date Picker Modal", routerLink: "/demo/date-picker-modal" },
                    // ],
                    // },
                    // {
                    //     label: "Time Picker",
                    //     children: [
                    { label: "Time Picker", routerLink: "/demo/time-picker" },
                    { label: "Time Picker Modal", routerLink: "/demo/time-picker-modal" },
                    // ],
                    // },
                    // {
                    //     label: "Week Picker",
                    //     children: [
                    { label: "Week Picker", routerLink: "/demo/week-picker" },
                    { label: "Week Picker Modal", routerLink: "/demo/week-picker-modal" },
                    // ],
                    // },
                    // {
                    //     label: "Month Picker",
                    //     children: [
                    { label: "Month Picker", routerLink: "/demo/month-picker" },
                    { label: "Month Picker Modal", routerLink: "/demo/month-picker-modal" },
                    // ],
                    // },
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
            this.demoMainNavigationDrawer.navigationDrawerScrim.open = false;
        } else {
            this.demoMainTopAppBar.open = true;
            this.demoMainNavigationDrawer.modal = true;
            this.demoMainNavigationDrawer.open = false;
            this.demoMainNavigationDrawer.navigationDrawerScrim.open = false;
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
