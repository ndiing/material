import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const list=[
    {label:'label 1'},
    {label:'label 2'},
    {label:'label 3'},
    {label:'label 4'},
    {label:'label 5'},
]

class DevMenu extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-menu
                                open
                                rowHeight="48"
                                maxRows="10"
                                .list="${list}"
                                @onMenuViewportVirtualScroll="${console.log}"
                                @onMenuListItemClick="${console.log}"
                                @onMenuListItemSelected="${console.log}"
                            ></md-menu>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");
