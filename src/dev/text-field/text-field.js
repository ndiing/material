import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TextFieldComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <md-form>
                <div class="md-layout md-layout--grid">
                    
                <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field0" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field1" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field2" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field3" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field4" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field5" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>
                    
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field0" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field1" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field2" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field3" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field4" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field5" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>
                    
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field0" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field1" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field2" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field3" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field4" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded2 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field5" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>

                    <div style="display: flex;align-items: center;justify-content: flex-end;gap:8px;" class="md-layout__item md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button label="Reset" type="reset" ui=""></md-button>
                        <md-button label="Submit" type="submit" ui="filled-tonal"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("text-field-component", TextFieldComponent);

export default document.createElement("text-field-component");
