import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingRadioButton: true, label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingRadioButton: true, label: "Label", sublabel: "Sublabel" },
                                { leadingRadioButton: true, label: "Label" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingRadioButton: true, text: "Text", label: "Label", sublabel: "Sublabel Sublabel Sublabel Sublabel Sublabel" },
                                { leadingRadioButton: true, text: "Text", label: "Label", sublabel: "Sublabel" },
                                { leadingRadioButton: true, text: "Text", label: "Label" },
                            ]}"
                        ></md-list>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-radio-button", DemoList);

export default document.createElement("demo-list-radio-button");
