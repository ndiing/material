import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevBlogComponent extends MDComponent{
    render(){
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('dev-blog',DevBlogComponent)

export default document.createElement('dev-blog')