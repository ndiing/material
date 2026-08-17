import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTest extends MdElement {
    constructor() {
        super();

        // test
        const arr = [];
        const current = new Date();
        const format = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        for (let i = 0; i < 12; i++) {
            const date = new Date(current.getFullYear(), i);
            const label = format(date);
            arr.push({ value: i, label });
        }
        this.months = arr;
        this.meridiems = [
            { value: 0, label: "AM" },
            { value: 1, label: "PM" },
        ];
    }

    
    render() {
        return html`
            <form @submit="${this._handleSubmit}">
                <md-grid class="demo-grid">

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="datetime-local"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="datetime-local" value="2026-08-18T23:59"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" @input="${console.log}" value="2026-08-18T23:59"/>
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="date"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="date" value="2026-08-18"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="date" @input="${console.log}" value="2026-08-18"/>
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="month"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="month" value="2026-08"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" @input="${console.log}" value="2026-08"/>
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="week"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="week" value="2026-W34"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="week" @input="${console.log}" value="2026-W34"/>
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="time"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="time" value="23:59"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="time" @input="${console.log}" value="23:59" />
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>


                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="datetime-local"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="datetime-local"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="datetime-local" value=""</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="datetime-local" value="2026-08-17T23:59"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" value="2026-08-17T23:59" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="date"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="date"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="date" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="month"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="month"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="week"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="week"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="week" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="time"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="time"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="time" @input="${console.log}" />
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-enum .options="${this.months}" placeholder="---------"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum value=""</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-enum .options="${this.months}" placeholder="---------" value="August"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" value="2026-08" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum selectedIndex=""</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-enum .options="${this.months}" placeholder="---------" selectedIndex="7"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" value="2026-08" @input="${console.log}" />
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-segment min="1" max="12" threshold="1" maxLength="2" placeholder="mm"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment value=""</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-segment min="1" max="12" threshold="1" maxLength="2" placeholder="mm" value="17"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" value="2026-08-17T00:00" @input="${console.log}" />
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>number</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>number step="0.1"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number step="0.1"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" step="0.1" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>number step="0.1" min="0"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number step="0.1" min="0"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" step="0.1" min="0" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>number step="0.1" min="0" max="10"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number step="0.1" min="0" max="10"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" step="0.1" min="0" max="10" @input="${console.log}" />
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>number step="0.1" min="0" max="10" value="5"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number step="0.1" min="0" max="10" value="5"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" step="0.1" min="0" max="10" value="5" @input="${console.log}" />
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <button type="reset">reset</button>
                        <button type="submit">submit</button>
                    </md-grid-column>
                </md-grid>
            </form>
        `;
    }

    _handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log([...formData.entries()]);
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
