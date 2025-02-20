import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoForm extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="text"
                                label="text"
                                name="text"
                                required
                                value="text"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="email"
                                label="email"
                                name="email"
                                required
                                value="ndiing.inc@gmail.com"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-password-field
                                label="password"
                                name="password"
                                required
                                value="password"
                                cancelAction
                            ></md-password-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="url"
                                label="url"
                                name="url"
                                required
                                value="https://github.com/ndiing/material"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="search"
                                label="search"
                                name="search"
                                required
                                value="search"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="tel"
                                label="tel"
                                name="tel"
                                required
                                value="6281935155404"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="number"
                                label="number"
                                name="number"
                                required
                                value="123"
                                cancelAction
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-date-field
                                type="date"
                                label="date"
                                name="date"
                                required
                                value="1990-10-17"
                                cancelAction
                            ></md-date-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-datetime-field
                                type="datetime-local"
                                label="datetime-local"
                                name="datetime-local"
                                required
                                value="1990-10-17T20:30"
                                cancelAction
                            ></md-datetime-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-month-field
                                type="month"
                                label="month"
                                name="month"
                                required
                                value="1990-10"
                                cancelAction
                            ></md-month-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-time-field
                                type="time"
                                label="time"
                                name="time"
                                required
                                value="20:30"
                                cancelAction
                            ></md-time-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-week-field
                                type="week"
                                label="week"
                                name="week"
                                required
                                value="1990-W42"
                                cancelAction
                            ></md-week-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-checkbox name="checkbox"></md-checkbox>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-checkbox
                                name="checkbox"
                                indeterminate
                            ></md-checkbox>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-checkbox
                                name="checkbox"
                                checked
                            ></md-checkbox>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-radio-button name="radio-button"></md-radio-button>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-radio-button
                                name="radio-button"
                                checked
                            ></md-radio-button>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-switch name="switch"></md-switch>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-switch
                                name="switch"
                                checked
                            ></md-switch>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-switch
                                name="switch"
                                .icons="${["close", "check"]}"
                            ></md-switch>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-switch
                                name="switch"
                                .icons="${["close", "check"]}"
                                checked
                            ></md-switch>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-slider
                                name="slider"
                                min="-50"
                                max="50"
                            ></md-slider>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-slider name="slider"></md-slider>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-slider
                                name="slider"
                                step="10"
                            ></md-slider>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-slider
                                name="slider"
                                value="[25,75]"
                            ></md-slider>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Reset"
                                type="reset"
                            ></md-button>
                            <md-button
                                variant="filled-tonal"
                                label="Submit"
                                type="submit"
                            ></md-button>
                        </div>
                        <div style="height:100vh;"></div>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("demo-form", DemoForm);

export default document.createElement("demo-form");
