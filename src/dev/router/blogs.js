import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRipple } from "../../material/foundation/ripple";
import { MDPopover } from "../../material/foundation/popover";

class DevBlogsComponent extends MDComponent {
    render() {
        return html`
            <h1>Blogs</h1>
            <button style="background:#ffffff;">ripple</button>
            <menu style="list-style:none;background:#ffffff;">
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Repudiandae, error.</a></li>
                <li><a>At, odit.</a></li>
                <li><a>In, reprehenderit.</a></li>
                <li><a>Quia, cumque?</a></li>
            </menu>
            <md-outlet></md-outlet>
        `;
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        const button = this.querySelector("button");
        new MDRipple(button);

        const menu = this.querySelector("menu");
        this.mdpopover = new MDPopover(menu, {
            trigger: button,
        });
    }
}

customElements.define("dev-blogs", DevBlogsComponent);

export default document.createElement("dev-blogs");
