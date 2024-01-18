import { LitElement, html } from "lit";

class BlogsComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <h1>Blogs</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('blogs-component',BlogsComponent)

export default document.createElement('blogs-component')