import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoDatetimePicker extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <!-- docked -->
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="docked"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="docked" view="years"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="docked" view="months"></md-datetime-picker>
                </md-grid-column>

                <!-- modal -->
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="modal"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="modal" view="years"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="modal" view="months"></md-datetime-picker>
                </md-grid-column>

                <!-- modal-input -->
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="modal-input" view="nothing"></md-datetime-picker>
                </md-grid-column>

                <!-- dial -->
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="dial" view="hours"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="dial" view="minutes"></md-datetime-picker>
                </md-grid-column>
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="dial" view="hours" hour12></md-datetime-picker>
                </md-grid-column>

                <!-- input -->
                <md-grid-column expanded="6">
                    <md-datetime-picker @onDatetimePickerChange="${event=>console.log(event.detail.data)}" value="2026-08-15T07:36" variant="input" view="nothing"></md-datetime-picker>
                </md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-datetime-picker", DemoDatetimePicker);
export default document.createElement("demo-datetime-picker");
