import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevPagination extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pagination
                                total="100"
                                limit="10"
                                page="1"
                                @onPaginationInput="${console.log}"
                                @onPaginationLimitChange="${console.log}"
                                @onPaginationFirstClick="${console.log}"
                                @onPaginationPrevClick="${console.log}"
                                @onPaginationNextClick="${console.log}"
                                @onPaginationLastClick="${console.log}"
                            ></md-pagination>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pagination
                                .options="${[
                                    { label: 50, value: 50, selected: false },
                                    { label: 100, value: 100, selected: false },
                                    { label: 250, value: 250, selected: true },
                                    { label: 500, value: 500, selected: false },
                                    { label: 1000, value: 1000, selected: false },
                                ]}"
                                total="1000000"
                                limit="50"
                                page="1"
                                .firstPage="${false}"
                                .lastPage="${false}"
                                .label="${null}"
                                .text="${null}"
                                @onPaginationInput="${console.log}"
                                @onPaginationLimitChange="${console.log}"
                                @onPaginationFirstClick="${console.log}"
                                @onPaginationPrevClick="${console.log}"
                                @onPaginationNextClick="${console.log}"
                                @onPaginationLastClick="${console.log}"
                            ></md-pagination>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-pagination", DevPagination);

export default document.createElement("dev-pagination");
