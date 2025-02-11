import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoForm extends MdComponent {
    render() {
        return html`
            <md-form
                @onFormNativeFormdata="${console.log}"
                @onFormNativeReset="${console.log}"
                @onFormNativeSubmit="${console.log}"
            >
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="date"
                                label="date"
                                name="date"
                                required
                                value="1990-10-17"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="datetime-local"
                                label="datetime-local"
                                name="datetime-local"
                                required
                                value="1990-10-17T20:30"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="email"
                                label="email"
                                name="email"
                                required
                                value="ndiing.inc@gmail.com"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="month"
                                label="month"
                                name="month"
                                required
                                value="1990-10"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="number"
                                label="number"
                                name="number"
                                required
                                value="123"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="password"
                                label="password"
                                name="password"
                                required
                                value="password"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="search"
                                label="search"
                                name="search"
                                required
                                value="search"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="tel"
                                label="tel"
                                name="tel"
                                required
                                value="6281935155404"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="text"
                                label="text"
                                name="text"
                                required
                                value="text"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="time"
                                label="time"
                                name="time"
                                required
                                value="20:30"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="url"
                                label="url"
                                name="url"
                                required
                                value="https://github.com/ndiing/material"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="week"
                                label="week"
                                name="week"
                                required
                                value="1990-W42"
                            ></md-text-field>
                        </div>

                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="reset"
                                type="reset"
                            ></md-button>
                            <md-button
                                variant="filled-tonal"
                                label="submit"
                                type="submit"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </md-form>
        `;
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
