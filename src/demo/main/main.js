import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";

/**
 * @extends MdComponent
 */
class DemoMain extends MdComponent {
    /**
     */
    constructor() {
        super();
        this.items = [
            {
                label: "Bottom App Bar",
                children: [
                    { label: "Icon buttons and FAB", routerLink: "/bottom-app-bar" },
                    { label: "Icon buttons and no FAB", routerLink: "/bottom-app-bar-no-fab" },
                ],
            },
            { label: "Top App Bar", children: [{ label: "Small top app bar", routerLink: "/top-app-bar" }] },
            {
                label: "Badge",
                children: [
                    { label: "Small badge", routerLink: "/badge" },
                    { label: "Large badge", routerLink: "/badge-large" },
                    { label: "Large badge with max characters", routerLink: "/badge-large-with-max" },
                ],
            },
            {
                label: "Layout",
                children: [
                    { label: "Grid", routerLink: "/layout-grid" },
                    { label: "Border", routerLink: "/layout-border" },
                ],
            },
            { label: "Icon", routerLink: "/icon" },
            { label: "Image", routerLink: "/image" },
            {
                label: "Button",
                children: [
                    { label: "Elevated button", routerLink: "/button-elevated" },
                    { label: "Filled button", routerLink: "/button-filled" },
                    { label: "Filled tonal button", routerLink: "/button-filled-tonal" },
                    { label: "Outlined button", routerLink: "/button-outlined" },
                    { label: "Text button", routerLink: "/button" },
                ],
            },
            {
                label: "FAB",
                children: [
                    { label: "FAB", routerLink: "/fab" },
                    { label: "Small FAB", routerLink: "/fab-small" },
                    { label: "Large FAB", routerLink: "/fab-large" },
                ],
            },
            {
                label: "Extended FAB",
                children: [
                    { label: "With icon", routerLink: "/fab-extended" },
                    { label: "Without icon", routerLink: "/fab-extended-without-icon" },
                ],
            },
            { label: "Icon Button", routerLink: "/icon-button" },
            { label: "Segmented Button", routerLink: "/segmented-button" },
            { label: "Checkbox", routerLink: "/checkbox" },
            { label: "Radio Button", routerLink: "/radio-button" },
            { label: "Switch", routerLink: "/switch" },
            { label: "Card", routerLink: "/card" },
            { label: "Scrim", routerLink: "/scrim" },
            { label: "Dialog", routerLink: "/dialog" },
            {
                label: "Sheet",
                children: [
                    { label: "Default", routerLink: "/sheet" },
                    { label: "Modal", routerLink: "/sheet-modal" },
                ],
            },
            { label: "Side Sheet", routerLink: "/side-sheet" },
            { label: "Side Sheet Modal", routerLink: "/side-sheet-modal" },
            { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
            { label: "Bottom Sheet Modal", routerLink: "/bottom-sheet-modal" },
            { label: "List", routerLink: "/list" },
            { label: "Tooltip", routerLink: "/tooltip" },
            { label: "Tree", routerLink: "/tree" },

            // { label: "Navigation List", routerLink: "/navigation-list" },
            { label: "Tabs", routerLink: "/tabs" },
            {
                label: "Navigation Bar",
                children: [
                    { label: "Default", routerLink: "/navigation-bar" },
                    { label: "No Label", routerLink: "/navigation-bar-no-label" },
                ],
            },
            {
                label: "Navigation Drawer",
                children: [
                    { label: "Default", routerLink: "/navigation-drawer" },
                    { label: "No Icon", routerLink: "/navigation-drawer-no-icon" },
                    { label: "Modal", routerLink: "/navigation-drawer-modal" },
                ],
            },
            {
                label: "Navigation Rail",
                children: [
                    { label: "Default", routerLink: "/navigation-rail" },
                    { label: "No Label", routerLink: "/navigation-rail-no-label" },
                ],
            },
            { label: "Menu", routerLink: "/menu" },
            { label: "Progress Indicator", routerLink: "/progress-indicator" },
            { label: "Slider", routerLink: "/slider" },
            { label: "Chips", routerLink: "/chips" },
            { label: "Snackbar", routerLink: "/snackbar" },
            { label: "Form", routerLink: "/form" },
            {
                label: "Text Field",
                children: [
                    { label: "Default", routerLink: "/text-field" },
                    { label: "Types", routerLink: "/text-field-types" },
                ],
            },
            { label: "Data Table", routerLink: "/data-table" },
            { label: "Datetime Picker", routerLink: "/datetime-picker" },
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
                    class="demo-main-top-app-bar"
                    open
                    label="Material 3"
                    .leadingActions="${this.leadingActions}"
                    @onTopAppBarIconButtonClick="${() => mainNavigationDrawer.toggle()}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="mainNavigationDrawer"
                    view="tree"
                    .items="${this.items}"
                    open
                    @onTreeItemClick="${(event) => {
                        // if (event.detail.event.currentTarget.data.routerLink) mainNavigationDrawer.toggle();
                    }}"
                ></md-navigation-drawer>
                <md-sheet region="center">
                    <md-outlet></md-outlet>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-main", DemoMain);
export default document.createElement("demo-main");
