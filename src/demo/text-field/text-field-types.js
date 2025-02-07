import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoTextFieldTypes extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <md-form
                    @onFormNativeFormdata="${console.log}"
                    @onFormNativeReset="${console.log}"
                    @onFormNativeSubmit="${console.log}"
                >
                    <div class="md-layout__grid">
                        <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"><md-text-field variant="filled" label="color" name="color" type="color"></md-text-field></div> -->
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="date"
                                name="date"
                                type="date"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="datetime-local"
                                name="datetime-local"
                                type="datetime-local"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="email"
                                name="email"
                                type="email"
                            ></md-text-field>
                        </div>
                        <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"><md-text-field variant="filled" label="file" name="file" type="file"></md-text-field></div> -->
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="month"
                                name="month"
                                type="month"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="number"
                                name="number"
                                type="number"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="password"
                                name="password"
                                type="password"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="search"
                                name="search"
                                type="search"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="tel"
                                name="tel"
                                type="tel"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="text"
                                name="text"
                                type="text"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="time"
                                name="time"
                                type="time"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="url"
                                name="url"
                                type="url"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field
                                variant="filled"
                                label="week"
                                name="week"
                                type="week"
                            ></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button
                                variant="filled-tonal"
                                type="reset"
                                label="Reset"
                            ></md-button>
                            <md-button
                                variant="filled-tonal"
                                type="submit"
                                label="Submit"
                            ></md-button>
                        </div>
                    </div>
                </md-form>
            </div>
        `;
    }
}
customElements.define("demo-text-field-types", DemoTextFieldTypes);
export default document.createElement("demo-text-field-types");
