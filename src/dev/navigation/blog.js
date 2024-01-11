import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class BlogComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Blog</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('blog-component',BlogComponent)

export default document.createElement('blog-component')