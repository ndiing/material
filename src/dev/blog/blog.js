import { LitElement, html } from "lit";

class BlogComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>Blog</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('blog-component',BlogComponent)

export default document.createElement('blog-component')