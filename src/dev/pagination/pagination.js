import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevPagination extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:640px;height:360px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pagination total="100" limit="10" page="1" @onPaginationInput="${console.log}" @onPaginationLimitChange="${console.log}" @onPaginationFirstClick="${console.log}" @onPaginationPrevClick="${console.log}" @onPaginationNextClick="${console.log}" @onPaginationLastClick="${console.log}"></md-pagination>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-pagination", DevPagination);

export default document.createElement("dev-pagination");
