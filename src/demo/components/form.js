import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoForm extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <div class="md-grid">

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="text" type="text" label="Text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="Text" name="text2" type="text" label="Text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="number" type="number" label="Number"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="12345" name="number2" type="number" label="Number"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="tel" type="tel" label="Tel"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="081935155404" name="tel2" type="tel" label="Tel"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="email" name="email" type="email" label="Email"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="email" value="ndiing.inc@gmail.com" name="email2" type="email" label="Email"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="new-password" name="password" type="password" label="Password"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="new-password" value="password" name="password2" type="password" label="Password"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="search" type="search" label="Search"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="Search" name="search2" type="search" label="Search"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="url" type="url" label="Url"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="https://www.google.com" name="url2" type="url" label="Url"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="datetime-local" type="datetime-local" label="Datetime Local"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="2026-08-04T23:00" name="datetime-local2" type="datetime-local" label="Datetime Local"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="date" type="date" label="Date"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="2026-08-04" name="date2" type="date" label="Date"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="month" type="month" label="Month"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="2026-08" name="month2" type="month" label="Month"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="week" type="week" label="Week"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="2026-W32" name="week2" type="week" label="Week"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field name="time" type="time" label="Time"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field value="23:00" name="time2" type="time" label="Time"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-textarea name="textarea" label="Textarea"></md-textarea>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-textarea value="This is a long input in a multi-line text field that wraps overflow text onto a new line" name="textarea2" label="Textarea"></md-textarea>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox name="checkbox"></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox checked name="checkbox2"></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-radio-button name="radio-button"></md-radio-button>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-radio-button checked name="radio-button"></md-radio-button>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch name="switch"></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch checked name="switch2"></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-slider value="0" name="slider"></md-slider>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-slider value="50" name="slider2"></md-slider>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>


                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </div>
                </div>
            </form>
        `;
    }

    handleFormdata(event) {}

    handleReset(event) {}

    handleSubmit(event) {
        event.preventDefault();
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
