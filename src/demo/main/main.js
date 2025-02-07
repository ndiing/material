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
            { label: "test", routerLink: "/test" },
            { label: "icon", routerLink: "/icon" },
            { label: "image", routerLink: "/image" },
            { label: "layout", children:[
                { label: "layout-grid", routerLink: "/layout-grid" },
                { label: "layout-border", routerLink: "/layout-border" },
            ] },
            { label: "scrim", routerLink: "/scrim" },
            { label: "sheet", children:[
                { label: "sheet", routerLink: "/sheet" },
                { label: "sheet-modal", routerLink: "/sheet-modal" },
            ] },
            { label: "form", routerLink: "/form" },
            { label: "data-table", routerLink: "/data-table" },
            { label: "bottom-app-bar", children:[
                { label: "bottom-app-bar", routerLink: "/bottom-app-bar" },
                { label: "bottom-app-bar-no-fab", routerLink: "/bottom-app-bar-no-fab" },
            ] },
            { label: "top-app-bar", routerLink: "/top-app-bar" },
            { label: "badge", children:[
                { label: "badge", routerLink: "/badge" },
                { label: "badge-large", routerLink: "/badge-large" },
                { label: "badge-large-with-max", routerLink: "/badge-large-with-max" },
            ] },
            { label: "button", children:[
                { label: "button", routerLink: "/button" },
                { label: "button-elevated", routerLink: "/button-elevated" },
                { label: "button-filled", routerLink: "/button-filled" },
                { label: "button-filled-tonal", routerLink: "/button-filled-tonal" },
                { label: "button-outlined", routerLink: "/button-outlined" },
            ] },
            { label: "fab", children:[
                { label: "fab", routerLink: "/fab" },
                { label: "fab-small", routerLink: "/fab-small" },
                { label: "fab-large", routerLink: "/fab-large" },
                { label: "fab-extended", routerLink: "/fab-extended" },
                { label: "fab-extended-without-icon", routerLink: "/fab-extended-without-icon" },
            ] },
            { label: "icon-button", children:[
                { label: "icon-button", routerLink: "/icon-button" },
                { label: "icon-button-filled", routerLink: "/icon-button-filled" },
                { label: "icon-button-filled-tonal", routerLink: "/icon-button-filled-tonal" },
                { label: "icon-button-outlined", routerLink: "/icon-button-outlined" },
            ] },
            { label: "segmented-button", children:[
                { label: "segmented-button", routerLink: "/segmented-button" },
                { label: "segmented-button-multi", routerLink: "/segmented-button-multi" },
            ] },
            { label: "card", routerLink: "/card" },
            { label: "checkbox", routerLink: "/checkbox" },
            { label: "chips", routerLink: "/chips" },
            { label: "datetime-picker", routerLink: "/datetime-picker" },
            { label: "dialog", routerLink: "/dialog" },
            { label: "list", routerLink: "/list" },
            { label: "menu", routerLink: "/menu" },
            { label: "navigation-bar", children:[
                { label: "navigation-bar", routerLink: "/navigation-bar" },
                { label: "navigation-bar-no-label", routerLink: "/navigation-bar-no-label" },
            ] },
            { label: "navigation-drawer", children:[
                { label: "navigation-drawer", routerLink: "/navigation-drawer" },
                { label: "navigation-drawer-no-icon", routerLink: "/navigation-drawer-no-icon" },
                { label: "navigation-drawer-modal", routerLink: "/navigation-drawer-modal" },
            ] },
            { label: "navigation-rail", children:[
                { label: "navigation-rail", routerLink: "/navigation-rail" },
                { label: "navigation-rail-no-label", routerLink: "/navigation-rail-no-label" },
            ] },
            { label: "progress-indicator", routerLink: "/progress-indicator" },
            { label: "radio-button", routerLink: "/radio-button" },
            { label: "side-sheet", children:[
                { label: "side-sheet", routerLink: "/side-sheet" },
                { label: "side-sheet-modal", routerLink: "/side-sheet-modal" },
            ] },
            { label: "bottom-sheet", children:[
                { label: "bottom-sheet", routerLink: "/bottom-sheet" },
                { label: "bottom-sheet-modal", routerLink: "/bottom-sheet-modal" },
            ] },
            { label: "slider", routerLink: "/slider" },
            { label: "snackbar", routerLink: "/snackbar" },
            { label: "switch", routerLink: "/switch" },
            { label: "tabs", routerLink: "/tabs" },
            { label: "text-field", children:[
                { label: "text-field", routerLink: "/text-field" },
                { label: "text-field-types", routerLink: "/text-field-types" },
            ] },
            { label: "tooltip", routerLink: "/tooltip" },
            { label: "tree", routerLink: "/tree" },
            { label: "navigation-list", routerLink: "/navigation-list" },
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
