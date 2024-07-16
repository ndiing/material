import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevForm extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="email0" name="email0" type="email"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="email1" name="email1" type="email" value="ndiing.inc@gmail.com"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="tel2" name="tel2" type="tel"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="tel3" name="tel3" type="tel" value="+6281935155404"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="text4" name="text4" type="text"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="text5" name="text5" type="text" value="text"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="url6" name="url6" type="url"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="url7" name="url7" type="url" value="https://ndiing.github.io/material/dist/"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="file8" name="file8" type="file"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field  label="file9" name="file9" type="file"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-password-field  label="password10" name="password10"></md-password-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-password-field  label="password11" name="password11" value="password"></md-password-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-number-field  label="number12" name="number12"></md-number-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-number-field  label="number13" name="number13" value="123456789"></md-number-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-search-field  label="search14" name="search14"></md-search-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-search-field  label="search15" name="search15" value="material"></md-search-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-date-field  label="date16" name="date16"></md-date-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-date-field  label="date17" name="date17" value="1990-10-17"></md-date-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-datetime-field  label="datetime18" name="datetime18"></md-datetime-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-datetime-field  label="datetime19" name="datetime19" value="1990-10-17T20:30"></md-datetime-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-month-field  label="month20" name="month20"></md-month-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-month-field  label="month21" name="month21" value="1990-10"></md-month-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-time-field  label="time22" name="time22"></md-time-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-time-field  label="time23" name="time23" value="20:30"></md-time-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-week-field  label="week24" name="week24"></md-week-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-week-field  label="week25" name="week25" value="1990-W42"></md-week-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-color-field  label="color26" name="color26"></md-color-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-color-field  label="color27" name="color27" value="#ff0000"></md-color-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-textarea-field  label="textarea34" name="textarea34"></md-textarea-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-textarea-field  label="textarea35" name="textarea35" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, expedita."></md-textarea-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field required label="select34" name="select34" .options="${[
                                    {label:'label 1',value: 1},
                                    {label:'label 2',value: 2},
                                    {label:'label 3',value: 3},
                                    {label:'label 4',value: 4},
                                    {label:'label 5',value: 5},
                                ]}"></md-select-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field required label="select35" name="select35" .options="${[
                                    {label:'label 1',value: 1,selected:true},
                                    {label:'label 2',value: 2},
                                    {label:'label 3',value: 3},
                                    {label:'label 4',value: 4},
                                    {label:'label 5',value: 5},
                                ]}"></md-select-field>
                            </div>
                            

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-checkbox  label="checkbox28" name="checkbox28"></md-checkbox>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-checkbox  label="checkbox29" name="checkbox29" checked></md-checkbox>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-radio-button  label="radio30" name="radio30"></md-radio-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-radio-button  label="radio31" name="radio31" checked></md-radio-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch  label="switch32" name="switch32"></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch  label="switch33" name="switch33" checked></md-switch>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-slider  label="slider34" name="slider34"></md-slider>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-slider  label="slider35" name="slider35" value="75"></md-slider>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-button type="reset"  label="Reset" variant="outlined"></md-button>
                                <md-button type="submit"  label="Submit" variant="filled"></md-button>
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
