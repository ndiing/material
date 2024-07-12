import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";

class DevExample extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div 
                                class="dev-example"
                                ${ref(this.handleRef)}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleRef(element){
        console.log(element)
    }
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
