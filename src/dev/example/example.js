import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";

class DevExample extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form
                        @onFormNativeReset="${event=>console.log(event)}"
                        @onFormNativeSubmit="${event=>console.log(event.detail.data)}"
                    >
                        <div class="md-layout-column">

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <select name="select1" id="">
                                    <option value="1" label="Label 1"></option>
                                    <option value="2" label="Label 2"></option>
                                    <option value="3" label="Label 3"></option>
                                    <option value="4" label="Label 4"></option>
                                    <option value="5" label="Label 5"></option>
                                </select>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <select name="select2" id="">
                                    <option value="1" label="Label 1" selected></option>
                                    <option value="2" label="Label 2"></option>
                                    <option value="3" label="Label 3"></option>
                                    <option value="4" label="Label 4"></option>
                                    <option value="5" label="Label 5"></option>
                                </select>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }

    
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
