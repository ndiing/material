import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TextFieldComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <md-form>
                <div class="md-layout md-layout--grid">
                    
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field17" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field1" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field2" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field3" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field4" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field name="field5" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>
                    
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field6" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field7" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field8" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field9" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field10" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="filled" name="field11" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>
                    
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field12" required label="Label"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field13" required label="Label" icon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field14" required label="Label" supportingText="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field15" required label="Label" value="Value"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field16" required label="Label" icon="image" value="Value" trailingIcon="image"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field ui="outlined" name="field0" required label="Label" supportingText="Supporting text" value="Value"></md-text-field>
                    </div>
                    
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="datetime-local" 
                            label="datetime-local" 
                            type="datetime-local"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="email" 
                            label="email" 
                            type="email"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="month" 
                            label="month" 
                            type="month"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="number" 
                            label="number" 
                            type="number"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="password" 
                            label="password" 
                            type="password"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="search" 
                            label="search" 
                            type="search"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="tel" 
                            label="tel" 
                            type="tel"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="text" 
                            label="text" 
                            type="text"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="time" 
                            label="time" 
                            type="time"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="url" 
                            label="url" 
                            type="url"></md-text-field> 
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-text-field 
                            ui="filled"
                            name="week" 
                            label="week" 
                            type="week"></md-text-field>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    </div>

                    <div style="display: flex;align-items: center;justify-content: flex-end;gap:8px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
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
