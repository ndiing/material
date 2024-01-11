import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class BlogsComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <h1>Blogs</h1>
            <md-placeholder></md-placeholder>
        `
    }
}

customElements.define('blogs-component',BlogsComponent)

export default document.createElement('blogs-component')