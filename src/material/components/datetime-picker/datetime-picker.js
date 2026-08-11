import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDatetimePickerElement } from "../../base/datetime-picker.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {
        ...MdDatetimePickerElement.properties,
    };

    constructor() {
        super();

        this.selectedDate = new Date(2026, 8 - 1, 10);
    }

    /* prettier-ignore */
    renderCalendar(){
        return html`
            <table class="md-datetime-picker__table">
                <thead>
                    <tr>
                        ${this.weekdays.map(cell=>html`
                            <th>
                                <div class="md-datetime-picker__cell">${cell.label}</div>
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.calendar.map(row=>html`
                        <tr>
                            ${row.children.map(cell=>html`
                                <td>
                                    <div 
                                        class="${classMap({
                                            'md-datetime-picker__cell':true,
                                            'md-datetime-picker__cell--outside':cell.outsideMonth,
                                            'md-datetime-picker__cell--today':cell.active,
                                            'md-datetime-picker__cell--selected':cell.selected,
                                        })}"
                                    >${cell.label}</div>
                                </td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }
    /* prettier-ignore */
    renderMonth(){
        return html`
            <md-list class="md-datetime-picker__list" .items="${this.months}" .singleSelect="${true}"></md-list>
        `
    }
    /* prettier-ignore */
    renderYear(){
        return html`
            <md-list class="md-datetime-picker__list" .items="${this.years}" .singleSelect="${true}"></md-list>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__leading">
                    <md-icon-button class="md-datetime-picker__icon-button" .icon="${"keyboard_arrow_left"}" .color="${"standard"}" .size="${"extra-small"}"></md-icon-button>
                    <md-split-button class="md-datetime-picker__split-button" .label="${this.selectedMonth.label}" .trailingIcon="${"arrow_drop_down"}" .color="${"text"}" .size="${"extra-small"}"></md-split-button>
                    <md-icon-button class="md-datetime-picker__icon-button" .icon="${"keyboard_arrow_right"}" .color="${"standard"}" .size="${"extra-small"}"></md-icon-button>
                </div>
                <div class="md-datetime-picker__trailing">
                    <md-icon-button class="md-datetime-picker__icon-button" .icon="${"keyboard_arrow_left"}" .color="${"standard"}" .size="${"extra-small"}"></md-icon-button>
                    <md-split-button class="md-datetime-picker__split-button" .label="${this.selectedYear.label}" .trailingIcon="${"arrow_drop_down"}" .color="${"text"}" .size="${"extra-small"}"></md-split-button>
                    <md-icon-button class="md-datetime-picker__icon-button" .icon="${"keyboard_arrow_right"}" .color="${"standard"}" .size="${"extra-small"}"></md-icon-button>
                </div>
            </div>
            <!-- calendar -->
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__main">
                    ${this.renderCalendar()}
                    <!-- ${this.renderMonth()} -->
                    <!-- ${this.renderYear()} -->
                </div>
                <div class="md-datetime-picker__footer">
                    <md-button class="md-datetime-picker__button" .label="${"Cancel"}" .color="${"text"}" .size="${"extra-small"}"></md-button>
                    <md-button class="md-datetime-picker__button" .label="${"Ok"}" .color="${"text"}" .size="${"extra-small"}"></md-button>
                </div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-datetime-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-datetime-picker");
    }
}

customElements.define("md-datetime-picker", MdDatetimePicker);

export { MdDatetimePicker };
