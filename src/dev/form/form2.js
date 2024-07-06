import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevForm2Component extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-datetime-field
                            name="datetime1"
                        ></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-datetime-field
                            name="datetime2"
                            value="1990-10-17T20:30"
                        ></md-datetime-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-date-field
                            name="date1"
                        ></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-date-field
                            name="date2"
                            value="1990-10-17"
                        ></md-date-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-month-field
                            name="month1"
                        ></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-month-field
                            name="month2"
                            value="1990-10"
                        ></md-month-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-week-field
                            name="week1"
                        ></md-week-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-week-field
                            name="week2"
                            value="1990-W42"
                        ></md-week-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-time-field
                            name="time1"
                        ></md-time-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-time-field
                            name="time2"
                            value="20:30"
                        ></md-time-field>
                    </div>


                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider1"
                            min="-5000"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider2"
                            min="0"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider3"
                            min="0"
                            max="5000"
                            step="500"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider4"
                            min="1000"
                            max="10000"
                            value="[2000,8000]"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            name="switch1"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            name="switch2"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            icons='["check","close"]'
                            name="switch3"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["check","close"]'
                            name="switch4"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio"
                            value="item1"
                            checked
                        ></md-radio-button>
                        <md-radio-button
                            name="radio"
                            value="item2"
                        ></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox1"
                            value="item0"
                            indeterminate
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox2"
                            value="item1"
                            checked
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox3"
                            value="item2"
                        ></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event) {
        console.log(event);
    }

    handleFormNativeSubmit(event) {
        console.log(JSON.stringify(event.detail.data, null, 4));
    }
}

customElements.define("dev-form2", DevForm2Component);

export default document.createElement("dev-form2");
