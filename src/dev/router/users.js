import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRouter } from "../../material/foundation/router";
import { MDVirtualScroll } from "../../material/foundation/virtual-scroll";

class DevUsersComponent extends MDComponent {
    constructor() {
        super();

        this.data = Array.from({ length: 10000 }, (v, k) => ({ label: "Label " + (k + 1) }));
        this.docs = [];
    }
    render() {
        return html`
            <h1>Users</h1>
            <div>
                <div routerLink="/users?_sort=age&_order=desc">/users?_sort=age&_order=desc</div>
                <div routerLink="/users?_sort=age&_order=asc">/users?_sort=age&_order=asc</div>
            </div>
            <div>query:</div>
            <pre>${this.query}</pre>
            <div class="md-virtual-scroll">
                <div class="md-virtual-scroll__scrollbar"></div>
                <div class="md-virtual-scroll__container">${this.docs.map((doc) => html` <div class="md-virtual-scroll__content">${doc.label}</div> `)}</div>
            </div>
            <md-outlet></md-outlet>
        `;
    }

    get viewport() {
        return this.querySelector(".md-virtual-scroll");
    }
    get scrollbar() {
        return this.querySelector(".md-virtual-scroll__scrollbar");
    }
    get container() {
        return this.querySelector(".md-virtual-scroll__container");
    }
    get content() {
        return this.querySelector(".md-virtual-scroll__content");
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.handleNavigateSuccess = this.handleNavigateSuccess.bind(this);
        window.addEventListener("onNavigateSuccess", this.handleNavigateSuccess);

        this.virtualScroll = new MDVirtualScroll(this.viewport, {
            total: this.data.length,
            contentHeight: 48,
            threshold: 2,
        });

        this.handleScroll = this.handleScroll.bind(this);

        this.viewport.addEventListener("onScroll", this.handleScroll);
        this.virtualScroll.handleScroll();
    }
    disconnectedCallback() {
        super.disconnectedCallback();

        this.viewport.removeEventListener("onScroll", this.handleScroll);

        this.virtualScroll.destroy();

        window.removeEventListener("onNavigateSuccess", this.handleNavigateSuccess);
    }
    handleNavigateSuccess(event) {
        this.query = JSON.stringify(event.detail.query, null, 4);
        this.requestUpdate();
    }
    handleScroll(event) {
        const { scrollbarHeight, start, limit, translateY } = event.detail;

        this.scrollbar.style.height = scrollbarHeight + "px";
        this.container.style.transform = "translateY(" + translateY + "px)";

        this.docs = this.data.slice(start, start + limit);

        this.requestUpdate();
    }
}

customElements.define("dev-users", DevUsersComponent);

export default document.createElement("dev-users");
