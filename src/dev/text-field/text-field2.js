import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextField2Component extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
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

customElements.define("dev-text-field2", DevTextField2Component);

export default document.createElement("dev-text-field2");
