import { LitElement, html } from "lit";
import { MdVirtualScroll } from "../../lib/virtual-scroll/virtual-scroll.js";
import { MdStore } from "../../lib/store/store.js";
import { MdRouter } from "../../lib/router/router.js";

class AppUsers extends LitElement {
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {};
    }

    constructor() {
        super();
        this.store = new MdStore(Array.from({ length: 100 }, (v, k) => ({ label: "Label " + (k + 1) })));
        this.docs = [];
    }

    // prettier-ignore
    render() {
        return html`
            <h1>Users</h1>

            <div style="height:48px;margin:48px 0;padding:48px 0;"></div>

            <div class="md-virtual-scroll">
                <div class="md-virtual-scroll__scrollbar"></div>
                <div class="md-virtual-scroll__container">
                ${this.docs.map((doc) => html`
                    <div class="md-virtual-scroll__content">${doc.label}</div>
                `)}
                </div>
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

        this.virtualScroll = new MdVirtualScroll(this.viewport, {
            total: this.store.getAll().total,
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
    }

    handleScroll(event) {
        const { scrollbarHeight, translateY, start, limit } = event.detail;

        this.scrollbar.style.height = scrollbarHeight + "px";
        this.container.style.transform = "translateY(" + translateY + "px)";

        this.store.slice(start, start + limit);
        this.docs = this.store.getAll().data;
        this.requestUpdate();
    }
}

customElements.define("app-users", AppUsers);

export default document.createElement("app-users");
