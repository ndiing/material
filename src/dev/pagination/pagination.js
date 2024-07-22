import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const options0 = [
    { headline: 50, value: 50, selected: false },
    { headline: 100, value: 100, selected: false },
    { headline: 250, value: 250, selected: true },
    { headline: 500, value: 500, selected: false },
    { headline: 1000, value: 1000, selected: false },
];

class DevPagination extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pagination total="100" limit="10" page="1"></md-pagination>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-pagination .options="${options0}" total="1000000" limit="50" page="1" .firstPage="${false}" .lastPage="${false}" .label="${null}" .text="${null}"></md-pagination>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-pagination", DevPagination);

export default document.createElement("dev-pagination");
