import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { Layout } from "../../material/layout/layout";
import { keys } from "../jsdoc/jsdoc";

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

        this.items = keys.map((key) => {
            const name = key.replace(/\.js$/, "");
            return {
                label: name,
                routerLink: `/docs/${name}`,
            };
        });

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
