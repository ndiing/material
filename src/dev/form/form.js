import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevFormComponent extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    
                
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="email" required name="email" label="email"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="email" required name="email2" value="ndiing.inc@gmail.com" label="email"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-number-field type="number" required name="number" label="number"></md-number-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-number-field type="number" required name="number2" value="123456789" label="number"></md-number-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-password-field type="password" required name="password" label="password"></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-password-field type="password" required name="password2" value="password" label="password"></md-password-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-search-field type="search" required name="search" label="search"></md-search-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-search-field type="search" required name="search2" value="google" label="search"></md-search-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="tel" required name="tel" label="tel"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="tel" required name="tel2" value="+6281935155404" label="tel"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="text" required name="text" label="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="text" required name="text2" value="text" label="text"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="url" required name="url" label="url"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="url" required name="url2" value="https://www.google.com" label="url"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-date-field type="date" required name="date" label="date"></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-date-field type="date" required name="date2" value="1990-10-17" label="date"></md-date-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-datetime-field type="datetime" required name="datetime" label="datetime"></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-datetime-field type="datetime" required name="datetime2" value="1990-10-17T20:30" label="datetime"></md-datetime-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-month-field type="month" required name="month" label="month"></md-month-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-month-field type="month" required name="month2" value="1990-10" label="month"></md-month-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-time-field type="time" required name="time" label="time"></md-time-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-time-field type="time" required name="time2" value="20:30" label="time"></md-time-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-week-field type="week" required name="week" label="week"></md-week-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-week-field type="week" required name="week2" value="1990-W42" label="week"></md-week-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-color-field type="color" required name="color" label="color"></md-color-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-color-field type="color" required name="color2" value="#ff0000" label="color"></md-color-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="file" required name="file" label="file"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field type="file" required name="file2" label="file"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-textarea-field required name="textarea" label="textarea"></md-textarea-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-textarea-field required name="textarea2" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, commodi." label="textarea"></md-textarea-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-select-field 
                            required name="select" 
                            label="select"
                            .options="${Array.from({length:10}, (v,k) => ({
                                label:'Label '+(k+1),
                                value: k+1
                            }))}"
                        ></md-select-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-select-field 
                            required name="select2" 
                            label="select"
                            .options="${Array.from({length:10}, (v,k) => ({
                                label:'Label '+(k+1),
                                value: k+1,
                                selected: (k+1) === 5
                            }))}"
                        ></md-select-field>
                    </div>
                    

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox required name="checkbox" label="checkbox"></md-checkbox>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox required name="checkbox2" checked label="checkbox"></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button required name="radio" label="radio"></md-radio-button>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button required name="radio2" checked label="radio"></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch required name="switch" label="switch"></md-switch>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch required name="switch2" checked label="switch"></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-slider required name="range" label="range"></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-slider required name="range2" value="75" label="range"></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button variant="outlined" type="reset" label="reset"></md-button>
                        <md-button variant="filled" type="submit" label="submit"></md-button>
                    </div>

                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event) {
        console.log(event);
    }

    handleFormNativeSubmit(event) {
        const body = JSON.stringify(event.detail.data,null,4);
        console.log(body);
    }
}

customElements.define("dev-form", DevFormComponent);

export default document.createElement("dev-form");
