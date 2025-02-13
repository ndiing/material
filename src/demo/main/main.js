import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { Layout } from "../../material/layout/layout";

/**
 * @extends MdComponent
 */
class DemoMain extends MdComponent {
    /**
     */
    constructor() {
        super();
        this.items = [
            { label: "Badge", routerLink: "/badge" },
            {
                label: "Bottom App Bar",
                children: [
                    { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { label: "Bottom App Bar No FAB", routerLink: "/bottom-app-bar-no-fab" },
                ],
            },
            {
                label: "Bottom Sheet",
                children: [
                    { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    { label: "Bottom Sheet Modal", routerLink: "/bottom-sheet-modal" },
                ],
            },
            {
                label: "Button",
                children: [
                    { label: "Button", routerLink: "/button" },
                    { label: "Button Elevated", routerLink: "/button-elevated" },
                    { label: "Button Filled", routerLink: "/button-filled" },
                    { label: "Button Filled Tonal", routerLink: "/button-filled-tonal" },
                    { label: "Button Outlined", routerLink: "/button-outlined" },
                ],
            },
            { label: "Card", routerLink: "/card" },
            { label: "Checkbox", routerLink: "/checkbox" },
            {
                label: "Chips",
                children: [
                    { label: "Chips", routerLink: "/chips" },
                    // { label: "Chips Single Select", routerLink: "/chips-single-select" },
                    { label: "Chips Multi Select", routerLink: "/chips-multi-select" },
                ],
            },
            // { label: "Data Table Cell", routerLink: "/data-table-cell" },
            {
                label: "Data Table",
                children: [
                    { label: "Data Table", routerLink: "/data-table" },
                    { label: "Data Table Checkbox", routerLink: "/data-table-checkbox" },
                    { label: "Data Table Sortable", routerLink: "/data-table-sortable" },
                ],
            },

            { label: "Dialog", routerLink: "/dialog" },
            { label: "Divider", routerLink: "/divider" },
            {
                label: "FAB",
                children: [
                    { label: "FAB", routerLink: "/fab" },
                    { label: "FAB Unelevated", routerLink: "/fab-unelevated" },
                    { label: "FAB Extended", routerLink: "/fab-extended" },
                    { label: "FAB Small", routerLink: "/fab-small" },
                    { label: "FAB Large", routerLink: "/fab-large" },
                ],
            },
            { label: "Form", routerLink: "/form" },
            { label: "Icon", routerLink: "/icon" },
            {
                label: "Icon Button",
                children: [
                    { label: "Icon Button", routerLink: "/icon-button" },
                    { label: "Icon Button Filled", routerLink: "/icon-button-filled" },
                    { label: "Icon Button Filled Tonal", routerLink: "/icon-button-filled-tonal" },
                    { label: "Icon Button Outlined", routerLink: "/icon-button-outlined" },
                ],
            },
            { label: "Image", routerLink: "/image" },
            // { label: "List Item", routerLink: "/list-item" },
            // { label: "List Row", routerLink: "/list-row" },
            {
                label: "List",
                children: [
                    { label: "List", routerLink: "/list" },
                    // { label: "List Single Select", routerLink: "/list-single-select" },
                    // { label: "List Multi Select", routerLink: "/list-multi-select" },
                ],
            },
            { label: "Menu", routerLink: "/menu" },
            {
                label: "Navigation Bar",
                children: [
                    { label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { label: "Navigation Bar No Label", routerLink: "/navigation-bar-no-label" },
                ],
            },
            {
                label: "Navigation Drawer",
                children: [
                    { label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { label: "Navigation Drawer Modal", routerLink: "/navigation-drawer-modal" },
                ],
            },
            // { label: "Navigation List Item", routerLink: "/navigation-list-item" },
            // { label: "Navigation List Row", routerLink: "/navigation-list-row" },
            { label: "Navigation List", routerLink: "/navigation-list" },
            {
                label: "Navigation Rail",
                children: [
                    { label: "Navigation Rail", routerLink: "/navigation-rail" },
                    { label: "Navigation Rail No Label", routerLink: "/navigation-rail-no-label" },
                ],
            },
            {
                label: "Progress Indicator",
                children: [
                    { label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { label: "Progress Indicator Circular", routerLink: "/progress-indicator-circular" },
                ],
            },
            { label: "Radio Button", routerLink: "/radio-button" },
            // { label: "Scrim", routerLink: "/scrim" },
            {
                label: "Segmented Button",
                children: [
                    { label: "Segmented Button", routerLink: "/segmented-button" },
                    // { label: "Segmented Button Single Select", routerLink: "/segmented-button-single-select" },
                    { label: "Segmented Button Multi Select", routerLink: "/segmented-button-multi-select" },
                ],
            },
            {
                label: "Sheet",
                children: [
                    // { label: "Sheet", routerLink: "/sheet" },
                    { label: "Sheet North", routerLink: "/sheet-north" },
                    { label: "Sheet East", routerLink: "/sheet-east" },
                    { label: "Sheet South", routerLink: "/sheet-south" },
                    { label: "Sheet West", routerLink: "/sheet-west" },
                    { label: "Sheet North Modal", routerLink: "/sheet-north-modal" },
                    { label: "Sheet East Modal", routerLink: "/sheet-east-modal" },
                    { label: "Sheet South Modal", routerLink: "/sheet-south-modal" },
                    { label: "Sheet West Modal", routerLink: "/sheet-west-modal" },
                    // { label: "Sheet Center", routerLink: "/sheet-center" },
                ],
            },
            {
                label: "Side Sheet",
                children: [
                    { label: "Side Sheet", routerLink: "/side-sheet" },
                    { label: "Side Sheet Modal", routerLink: "/side-sheet-modal" },
                ],
            },
            {
                label: "Slider",
                children: [
                    // { label: "Slider", routerLink: "/slider" },
                    { label: "Slider Centered", routerLink: "/slider-centered" },
                    { label: "Slider Continuous", routerLink: "/slider-continuous" },
                    { label: "Slider Discrete", routerLink: "/slider-discrete" },
                    { label: "Slider Range Selection", routerLink: "/slider-range-selection" },
                ],
            },
            { label: "Snackbar", routerLink: "/snackbar" },
            { label: "Switch", routerLink: "/switch" },
            // { label: "Tab", routerLink: "/tab" },
            {
                label: "Tabs",
                children: [
                    // { label: "Tabs", routerLink: "/tabs" },
                    { label: "Tabs Primary", routerLink: "/tabs-primary" },
                    { label: "Tabs Secondary", routerLink: "/tabs-secondary" },
                ],
            },
            {
                label: "Text Field",
                children: [
                    { label: "Text Field", routerLink: "/text-field" },
                    { label: "Text Field Outlined", routerLink: "/text-field-outlined" },
                    { label: "Text Field Filled", routerLink: "/text-field-filled" },
                ],
            },
            { label: "Tooltip", routerLink: "/tooltip" },
            { label: "Top App Bar", routerLink: "/top-app-bar" },
            // { label: "Tree Item", routerLink: "/tree-item" },
            // { label: "Tree Row", routerLink: "/tree-row" },
            { label: "Tree", routerLink: "/tree" },
            {
                label: "Picker",
                children: [
                    // { label: "Datetime Picker", children:[
                    { label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { label: "Datetime Picker Modal", routerLink: "/datetime-picker-modal" },
                    // ] },
                    // { label: "Date Picker", children:[
                    { label: "Date Picker", routerLink: "/date-picker" },
                    { label: "Date Picker Modal", routerLink: "/date-picker-modal" },
                    // ] },
                    // { label: "Time Picker", children:[
                    { label: "Time Picker", routerLink: "/time-picker" },
                    { label: "Time Picker Modal", routerLink: "/time-picker-modal" },
                    // ] },
                    // { label: "Week Picker", children:[
                    { label: "Week Picker", routerLink: "/week-picker" },
                    { label: "Week Picker Modal", routerLink: "/week-picker-modal" },
                    // ] },
                    // { label: "Month Picker", children:[
                    { label: "Month Picker", routerLink: "/month-picker" },
                    { label: "Month Picker Modal", routerLink: "/month-picker-modal" },
                    // ] },
                ],
            },
        ];
        this.items.sort((a, b) => {
            if (a.children && !b.children) return -1;
            if (!a.children && b.children) return 1;
            return a.label.localeCompare(b.label);
        });
        function select(items) {
            items.forEach((item) => {
                item.selected = item.routerLink === Router.pathname;
                if (item.children?.length) {
                    select(item.children);
                }
            });
        }
        select(this.items);
        this.leadingActions = [{ icon: "menu" }];
    }

    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-top-app-bar
                    id="mainTopAppBar"
                    label="Material Design"
                    sublabel="Version 0.62.0"
                    .leadingActions="${this.leadingActions}"
                    @onTopAppBarIconButtonClick="${() => mainNavigationDrawer.toggle()}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="mainNavigationDrawer"
                    type="tree"
                    .items="${this.items}"
                    @onNavigationDrawerItemClick="${(event) => {
                        if (mainNavigationDrawer.modal && event.detail.event.currentTarget.data.routerLink) mainNavigationDrawer.toggle();
                    }}"
                ></md-navigation-drawer>
                <md-sheet region="center">
                    <md-outlet></md-outlet>
                </md-sheet>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.handleMainLayout = this.handleMainLayout.bind(this);
        this.layout = new Layout(this.handleMainLayout);
        this.layout.init();
    }

    handleMainLayout(item) {
        if (item.name === "expanded") {
            mainTopAppBar.open = false;
            mainNavigationDrawer.modal = false;
            mainNavigationDrawer.open = true;
            mainNavigationDrawer.navigationDrawerScrim.open = false;
        } else {
            mainTopAppBar.open = true;
            mainNavigationDrawer.modal = true;
            mainNavigationDrawer.open = false;
            mainNavigationDrawer.navigationDrawerScrim.open = false;
        }
    }
}
customElements.define("demo-main", DemoMain);
export default document.createElement("demo-main");
