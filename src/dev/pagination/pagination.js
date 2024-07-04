import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevPaginationComponent extends MDComponent {
    get pagination() {
        return this.querySelector("#pagination");
    }
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-markdown href="./docs/pagination.md"></md-markdown>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-pagination
                        id="pagination"
                        .total="${1000}"
                        .limit="${50}"
                    ></md-pagination>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field
                        .type="${"number"}"
                        .value="${1000}"
                        .step="${1000}"
                        @onTextFieldNativeInput="${(event) => (this.pagination.total = Number(event.detail.currentTarget.value))}"
                    ></md-text-field>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-pagination", DevPaginationComponent);

export default document.createElement("dev-pagination");
