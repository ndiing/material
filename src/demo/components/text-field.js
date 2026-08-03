import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTextField extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <md-form 
                @onFormNativeFormdata="${this.handleDemoTextFieldFormNativeFormdata}" 
                @onFormNativeReset="${this.handleDemoTextFieldFormNativeReset}" 
                @onFormNativeSubmit="${this.handleDemoTextFieldFormNativeSubmit}"
            >
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required autocomplete="username" label="Text" name="text" type="text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Number" name="number" type="number"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Search" name="search" type="search"></md-text-field>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="URL" name="url" type="url"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="tel-national" label="Tel" name="tel" type="tel"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="email" label="Email" name="email" type="email"></md-text-field>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field autocomplete="new-password" label="Password" name="password" type="password"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Date" name="date" type="date"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Datetime Local" name="datetime-local" type="datetime-local"></md-text-field>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Month" name="month" type="month"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Time" name="time" type="time"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field label="Week" name="week" type="week"></md-text-field>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="reset" color="outlined"></md-button>
                        <md-button type="submit" label="submit" color="tonal"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleDemoTextFieldFormNativeFormdata(event) {
        console.log(Object.fromEntries(event.detail.formData.entries()));
    }

    handleDemoTextFieldFormNativeReset(event) {}

    handleDemoTextFieldFormNativeSubmit(event) {}
}
customElements.define("demo-text-field", DemoTextField);
export default document.createElement("demo-text-field");
