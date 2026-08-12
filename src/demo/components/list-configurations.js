
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { Store } from "../../material/core/store.js";

class DemoList extends MdElement {
    static properties = {
        items: { type: Array },
    };

    constructor() {
        super();

        this.items = [];
        this.store = new Store();

        this.handleNavigationEnd = this.handleNavigationEnd.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-list
                .items="${this.items}"
                .labelField="${'title'}"
                .clearSelection="${true}"
                .selectAll="${true}"
                .activeRow="${true}"
                .scrollOnArrowUpActiveRow="${true}"
                .selectOnArrowUpActiveRow="${true}"
                .scrollOnArrowDownActiveRow="${true}"
                .selectOnArrowDownActiveRow="${true}"
                .selectOnEnterActiveRow="${true}"
                .selectRange="${true}"
                .multiSelect="${true}"
                .singleSelect="${true}"
                .virtualScroll="${true}"
            ></md-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.router.on("onNavigationEnd", this.handleNavigationEnd);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                this.store.load(json);
                this.items = this.store.getAll(this.router.query).docs;
            });

        // fetch("https://jsonplaceholder.typicode.com/photos")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this.store.load(json);
        //         this.items = this.store.getAll(this.router.query).docs;
        //     });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.router.off("onNavigationEnd", this.handleNavigationEnd);
    }

    handleNavigationEnd() {
        this.items = this.store.getAll(this.router.query).docs;
    }
}

customElements.define("demo-list", DemoList);

export default document.createElement("demo-list");
