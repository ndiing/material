import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRipple } from "../../material/foundation/ripple";

class DevBlogsComponent extends MDComponent{
    render(){
        return html`
            <h1>Blogs</h1>
            <button>ripple</button>
            <md-outlet></md-outlet>
        `
    }
    async connectedCallback(){
        super.connectedCallback()
        await this.updateComplete

        const root = this.querySelector('button')
        new MDRipple(root)
    }
}

customElements.define('dev-blogs',DevBlogsComponent)

export default document.createElement('dev-blogs')