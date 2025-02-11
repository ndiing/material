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
                        <!-- <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><md-text-field type="color" label="color" name="color" ></md-text-field></div> -->
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="date"
                                label="date"
                                name="date"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="datetime-local"
                                label="datetime-local"
                                name="datetime-local"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="email"
                                label="email"
                                name="email"
                            ></md-text-field>
                        </div>
                        <!-- <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"><md-text-field type="file" label="file" name="file" ></md-text-field></div> -->
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="month"
                                label="month"
                                name="month"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="number"
                                label="number"
                                name="number"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="password"
                                label="password"
                                name="password"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="search"
                                label="search"
                                name="search"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="tel"
                                label="tel"
                                name="tel"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="text"
                                label="text"
                                name="text"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="time"
                                label="time"
                                name="time"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="url"
                                label="url"
                                name="url"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="week"
                                label="week"
                                name="week"
                            ></md-text-field>
                        </div>

                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                type="week"
                                label="week"
                                name="week"
                            ></md-text-field>
                        </div>
                    </div>
                </div>
            </md-form>
        `;
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
