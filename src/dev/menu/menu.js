import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const list = [{ label: "label 1" }, { label: "label 2" }, { label: "label 3" }, { label: "label 4" }, { label: "label 5" }];

class DevMenu extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-menu id="menu" rowHeight="48" maxRows="5" .list="${list}" @onMenuViewportVirtualScroll="${console.log}" @onMenuListItemClick="${() => menu.close()}" @onMenuListItemSelected="${console.log}"></md-menu>
                            <md-button label="toggle menu" @click="${(event) => menu.toggle(event.currentTarget)}"></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <input type="text" 
                                @focus="${(event) => menu.show(event.currentTarget)}" 
                                @blur="${() => menu.close()}"
                                @input="${(event) => menu.filter(event.currentTarget.value)}"
                            >
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    connectedCallback(){
        super.connectedCallback()
        this.handleContextmenu=this.handleContextmenu.bind(this)
        window.addEventListener('contextmenu',this.handleContextmenu)
    }
    disconnectedCallback(){
        super.disconnectedCallback()
        window.removeEventListener('contextmenu',this.handleContextmenu)
    }
    handleContextmenu(event){
        event.preventDefault()
        menu.show(event)
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
