import { LitElement, html } from "lit";

class AppBlog extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('app-blog',AppBlog)

export default document.createElement('app-blog')