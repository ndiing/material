import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { Store } from "../../material/core/store.js";

const columns = [
    { name: "userId", label: "User Id", style: { width: "100px" } },
    { name: "id", label: "Id", style: { width: "100px" } },
    { name: "title", label: "Title", style: { width: "200px" } },
    { name: "body", label: "Body", style: { width: "300px" } },
];

// const columns = [
//     { name: "albumId", label: "Album Id", style: { width: "100px" } },
//     { name: "id", label: "Id", style: { width: "100px" } },
//     { name: "title", label: "Title", style: { width: "200px" } },
//     { name: "url", label: "URL", style: { width: "200px" } },
//     { name: "thumbnailUrl", label: "Thumbnail URL", style: { width: "200px" } },
// ];

class DemoDataTable extends MdElement {
    static properties = {
        rows: { type: Array, state: true },
    };

    constructor() {
        super();

        this.rows = [];
        this.store = new Store();

        this.handleNavigationEnd = this.handleNavigationEnd.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-data-table
                .columns="${columns}"
                .rows="${this.rows}"
                .clearSelection="${true}"
                .selectAll="${true}"
                .activeRow="${true}"
                .scrollOnArrowUpActiveRow="${true}"
                .selectOnArrowUpActiveRow="${false}"
                .scrollOnArrowDownActiveRow="${true}"
                .selectOnArrowDownActiveRow="${false}"
                .activeCell="${true}"
                .selectOnEnterActiveRow="${true}"
                .selectRange="${true}"
                .multiSelect="${true}"
                .singleSelect="${true}"
            ></md-data-table>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.router.on("onNavigationEnd", this.handleNavigationEnd);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                this.store.load(json);
                this.rows = this.store.getAll(this.router.query).docs;
            });

        // fetch("https://jsonplaceholder.typicode.com/photos")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this.store.load(json);
        //         this.rows = this.store.getAll(this.router.query).docs;
        //     });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.router.off("onNavigationEnd", this.handleNavigationEnd);
    }

    handleNavigationEnd() {
        this.rows = this.store.getAll(this.router.query).docs;
    }
}

customElements.define("demo-data-table", DemoDataTable);

export default document.createElement("demo-data-table");
