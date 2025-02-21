import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { LayoutObserver } from "../../material/layout-observer/layout-observer";
import { keys } from "../jsdoc/jsdoc";
class DocsMain extends MdComponent {
    constructor() {
        super();
        this.items = keys;
        this.sortItems(this.items);
    }

    render() {
        return html`
            <md-layout-border>
                <md-top-app-bar id="docsMainTopAppBar" label="Docs" .leadingActions="${[{ icon: "menu" }]}" @onTopAppBarIconButtonClick="${this.handleDocsMainTopAppBarIconButtonClick}"></md-top-app-bar>
                <md-navigation-drawer id="docsMainNavigationDrawer" type="tree" .items="${this.items}" @onTreeItemClick="${this.handleDocsMainNavigationDrawerTreeItemClick}" @onTreeKeydownEnter="${this.handleDocsMainNavigationDrawerTreeKeydownEnter}"></md-navigation-drawer>
                <md-layout-border-item region="center">
                    <md-outlet></md-outlet>
                </md-layout-border-item>
            </md-layout-border>
        `;
    }

    select(items) {
        items.forEach((item) => {
            item.selected = item.routerLink === Router.pathname;

            if (item.children?.length) {
                this.select(item.children);
            }
        });
    }

    sortItems(items) {
        items.sort((a, b) => {
            if (a.children && !b.children) return -1;

            if (!a.children && b.children) return 1;

            if (a.type && b.type) {
                return a.type.localeCompare(b.type);
            }
            const labelComparison = a.label.localeCompare(b.label);

            if (labelComparison !== 0) return labelComparison;
            return 0;
        });

        items.forEach((item) => {
            if (item.children) {
                this.sortItems(item.children);
            }
        });
    }

    async connectedCallback() {
        super.connectedCallback();
        this.select(this.items);
        await this.updateComplete;

        this.layout = new LayoutObserver((item) => {
            if (item.name === "expanded") {
                docsMainTopAppBar.open = false;
                docsMainNavigationDrawer.modal = false;
                docsMainNavigationDrawer.open = true;
            } else {
                docsMainTopAppBar.open = true;
                docsMainNavigationDrawer.modal = true;
                docsMainNavigationDrawer.open = false;
            }
        });
        this.layout.init();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.layout) this.layout.destroy();
    }

    handleDocsMainNavigationDrawerTreeKeydownEnter(event) {
        const treeItemSelected = docsMainNavigationDrawer.querySelector("md-tree-item[selected]");
        treeItemSelected.click();
    }

    handleDocsMainTopAppBarIconButtonClick(event) {
        docsMainNavigationDrawer.toggle();
    }

    handleDocsMainNavigationDrawerTreeItemClick(event) {
        const data = event.detail.event.currentTarget.data;

        if (docsMainNavigationDrawer.modal && data.routerLink) {
            docsMainNavigationDrawer.close();
        }
    }
}

customElements.define("docs-main", DocsMain);

export default document.createElement("docs-main");
