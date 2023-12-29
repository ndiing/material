import { LitElement, html } from "lit";
import { Router } from "../lib/router";

class AppBlogs extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <h1>Blogs</h1>
            <input type="search" @search="${this.handleSearch}" placeholder="Search..." />
            <md-outlet></md-outlet>
        `;
    }

    handleSearch(event) {
        let search = "";

        const searchParams = new URLSearchParams();
        if (event.currentTarget.value) {
            searchParams.set("q", event.currentTarget.value);
            search='?'+searchParams.toString()
        } else searchParams.delete("q");
        
        Router.navigate(window.location.pathname + search);
    }
}

customElements.define("app-blogs", AppBlogs);

export default document.createElement("app-blogs");
