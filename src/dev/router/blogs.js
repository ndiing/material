import { LitElement, html } from "lit";
import { MdRouter } from "../../lib/router/router.js";
import { MdRipple } from "../../lib/ripple/ripple.js";

class AppBlogs extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <h1>Blogs</h1>
            <input type="search" @search="${this.handleSearch}" placeholder="Search..." />
            <button id="button">

                <span>button</span>

            </button>
            <md-outlet></md-outlet>
        `;
    }

    firstUpdated() {
        const button = this.querySelector("#button");
        const span = button.querySelector('span');

        new MdRipple(button, {
            trigger:span,
            bounded:false,
            centered:true,
        });
    }

    handleSearch(event) {
        let search = "";

        const searchParams = new URLSearchParams();
        if (event.currentTarget.value) {
            searchParams.set("q", event.currentTarget.value);
            search = "?" + searchParams.toString();
        } else searchParams.delete("q");

        MdRouter.navigate(window.location.pathname + search);
    }
}

customElements.define("app-blogs", AppBlogs);

export default document.createElement("app-blogs");
