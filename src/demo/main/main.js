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
            { label: "badge", routerLink: "/badge" },
            { label: "bottom-app-bar", children:[
                { label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
                { label: "bottom-app-bar-no-fab", routerLink: "/bottom-app-bar-no-fab" },
            ] },
            { label: "bottom-sheet", children:[
                { label: "bottom-sheet", routerLink: "/bottom-sheet" },
                { label: "bottom-sheet-modal", routerLink: "/bottom-sheet-modal" },
            ] },
            {
                label: "button",
                children: [
                    { label: "button", routerLink: "/button" },
                    { label: "button-elevated", routerLink: "/button-elevated" },
                    { label: "button-filled", routerLink: "/button-filled" },
                    { label: "button-filled-tonal", routerLink: "/button-filled-tonal" },
                    { label: "button-outlined", routerLink: "/button-outlined" },
                ],
            },
            { label: "card", routerLink: "/card" },
            { label: "checkbox", routerLink: "/checkbox" },
            {
                label: "chips",
                children: [
                    { label: "chips", routerLink: "/chips" },
                    // { label: "chips-single-select", routerLink: "/chips-single-select" },
                    { label: "chips-multi-select", routerLink: "/chips-multi-select" },
                ],
            },
            // { label: "data-table-cell", routerLink: "/data-table-cell" },
            { label: "data-table", routerLink: "/data-table" },
            { label: "datetime-picker", children:[
                { label: "datetime-picker", routerLink: "/datetime-picker" },
                { label: "datetime-picker-modal", routerLink: "/datetime-picker-modal" },
            ] },
            { label: "dialog", routerLink: "/dialog" },
            { label: "divider", routerLink: "/divider" },
            {
                label: "fab",
                children: [
                    { label: "fab", routerLink: "/fab" },
                    { label: "fab-unelevated", routerLink: "/fab-unelevated" },
                    { label: "fab-extended", routerLink: "/fab-extended" },
                    { label: "fab-small", routerLink: "/fab-small" },
                    { label: "fab-large", routerLink: "/fab-large" },
                ],
            },
            { label: "form", routerLink: "/form" },
            { label: "icon", routerLink: "/icon" },
            {
                label: "icon-button",
                children: [
                    { label: "icon-button", routerLink: "/icon-button" },
                    { label: "icon-button-filled", routerLink: "/icon-button-filled" },
                    { label: "icon-button-filled-tonal", routerLink: "/icon-button-filled-tonal" },
                    { label: "icon-button-outlined", routerLink: "/icon-button-outlined" },
                ],
            },
            { label: "image", routerLink: "/image" },
            // { label: "list-item", routerLink: "/list-item" },
            // { label: "list-row", routerLink: "/list-row" },
            {
                label: "list",
                children: [
                    { label: "list", routerLink: "/list" },
                    // { label: "list-single-select", routerLink: "/list-single-select" },
                    // { label: "list-multi-select", routerLink: "/list-multi-select" },
                ],
            },
            { label: "menu", routerLink: "/menu" },
            { label: "navigation-bar", children:[
                { label: "navigation-bar", routerLink: "/navigation-bar" },
                { label: "navigation-bar-no-label", routerLink: "/navigation-bar-no-label" },
            ] },
            { label: "navigation-drawer", children:[
                { label: "navigation-drawer", routerLink: "/navigation-drawer" },
                { label: "navigation-drawer-modal", routerLink: "/navigation-drawer-modal" },
            ] },
            // { label: "navigation-list-item", routerLink: "/navigation-list-item" },
            // { label: "navigation-list-row", routerLink: "/navigation-list-row" },
            // { label: "navigation-list", routerLink: "/navigation-list" },
            { label: "navigation-rail", children:[
                { label: "navigation-rail", routerLink: "/navigation-rail" },
                { label: "navigation-rail-no-label", routerLink: "/navigation-rail-no-label" },
            ] },
            {
                label: "progress-indicator",
                children: [
                    { label: "progress-indicator", routerLink: "/progress-indicator" },
                    { label: "progress-indicator-circular", routerLink: "/progress-indicator-circular" },
                ],
            },
            { label: "radio-button", routerLink: "/radio-button" },
            // { label: "scrim", routerLink: "/scrim" },
            {
                label: "segmented-button",
                children: [
                    { label: "segmented-button", routerLink: "/segmented-button" },
                    // { label: "segmented-button-single-select", routerLink: "/segmented-button-single-select" },
                    { label: "segmented-button-multi-select", routerLink: "/segmented-button-multi-select" },
                ],
            },
            {
                label: "sheet",
                children: [
                    // { label: "sheet", routerLink: "/sheet" },
                    { label: "sheet-north", routerLink: "/sheet-north" },
                    { label: "sheet-east", routerLink: "/sheet-east" },
                    { label: "sheet-south", routerLink: "/sheet-south" },
                    { label: "sheet-west", routerLink: "/sheet-west" },
                    { label: "sheet-north-modal", routerLink: "/sheet-north-modal" },
                    { label: "sheet-east-modal", routerLink: "/sheet-east-modal" },
                    { label: "sheet-south-modal", routerLink: "/sheet-south-modal" },
                    { label: "sheet-west-modal", routerLink: "/sheet-west-modal" },
                    // { label: "sheet-center", routerLink: "/sheet-center" },
                ],
            },
            { label: "side-sheet", children:[
                { label: "side-sheet", routerLink: "/side-sheet" },
                { label: "side-sheet-modal", routerLink: "/side-sheet-modal" },
            ] },
            {
                label: "slider",
                children: [
                    // { label: "slider", routerLink: "/slider" },
                    { label: "slider-centered", routerLink: "/slider-centered" },
                    { label: "slider-continuous", routerLink: "/slider-continuous" },
                    { label: "slider-discrete", routerLink: "/slider-discrete" },
                    { label: "slider-range-selection", routerLink: "/slider-range-selection" },
                ],
            },
            { label: "snackbar", routerLink: "/snackbar" },
            { label: "switch", routerLink: "/switch" },
            // { label: "tab", routerLink: "/tab" },
            {
                label: "tabs",
                children: [
                    // { label: "tabs", routerLink: "/tabs" },
                    { label: "tabs-primary", routerLink: "/tabs-primary" },
                    { label: "tabs-secondary", routerLink: "/tabs-secondary" },
                ],
            },
            {
                label: "text-field",
                children: [
                    { label: "text-field", routerLink: "/text-field" },
                    { label: "text-field-outlined", routerLink: "/text-field-outlined" },
                    { label: "text-field-filled", routerLink: "/text-field-filled" },
                ],
            },
            { label: "tooltip", routerLink: "/tooltip" },
            { label: "top-app-bar", routerLink: "/top-app-bar" },
            // { label: "tree-item", routerLink: "/tree-item" },
            // { label: "tree-row", routerLink: "/tree-row" },
            { label: "tree", routerLink: "/tree" },
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
                    label="Material Design"
                    sublabel="Version 0.55.0"
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
