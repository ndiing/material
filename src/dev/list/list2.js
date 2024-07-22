import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { component:'section',section: "Section 0" },
    { headline: "Headline 0" },
    { headline: "Headline 1" },
    { headline: "Headline 2" },
    { headline: "Headline 3" },
    { component:'divider', },
    { component:'section',section: "Section 1" },
    { headline: "Headline 4" },
    { headline: "Headline 5" },
    { headline: "Headline 6" },
    { headline: "Headline 7" },
    { component:'divider', },
];


class DevList2 extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list 
                                .items="${items0}" 
                                rangeSelection
                                multiSelection
                                singleSelection
                                allSelection
                            ></md-list>
                        </div>
                        
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list2", DevList2);

export default document.createElement("dev-list2");
