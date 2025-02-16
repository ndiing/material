import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { Layout } from "../../material/layout/layout";
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
                <md-navigation-drawer
                    id="docsMainNavigationDrawer"
                    type="tree"
                    open
                    .items="${this.items}"
                    @onTreeKeydownEnter="${this.handleDemoMainNavigationDrawerTreeKeydownEnter}"
                ></md-navigation-drawer>

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

    connectedCallback() {
        super.connectedCallback();
        this.select(this.items);
    }

    handleDemoMainNavigationDrawerTreeKeydownEnter(event) {
        const treeItemSelected = docsMainNavigationDrawer.querySelector("md-tree-item[selected]");
        treeItemSelected.click();
    }
}

customElements.define("docs-main", DocsMain);

export default document.createElement("docs-main");
