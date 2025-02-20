import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoListSingleSelect extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            type="single-select"
                            items=""
                            type=""
                            rippleOptions=""
                        ></md-list>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-single-select", DemoListSingleSelect);

export default document.createElement("demo-list-single-select");
