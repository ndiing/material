import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class DevBlogsComponent extends MDComponent{
    render(){
        return html`
            <h1>Blogs</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('dev-blogs',DevBlogsComponent)

export default document.createElement('dev-blogs')