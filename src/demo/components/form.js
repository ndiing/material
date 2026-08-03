import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoForm extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-form
                @onFormNativeFormdata="${console.log}"
                @onFormNativeReset="${console.log}"
                @onFormNativeSubmit="${console.log}"
            >
                <input type="hidden" name="csrf_token" value="abc123">

                <fieldset>
                    <legend>Text Inputs</legend>
                    
                    <label for="text">text *</label>
                    <input id="text" type="text" required placeholder="Nama lengkap">
                    
                    <label for="number">number (1-10)</label>
                    <input id="number" type="number" min="1" max="10" step="2">
                    
                    <label for="search">search</label>
                    <input id="search" type="search" placeholder="Cari...">
                    
                    <label for="url">url</label>
                    <input id="url" type="url" placeholder="https://example.com">
                    
                    <label for="tel">tel</label>
                    <input id="tel" type="tel" pattern="[0-9]{10,13}" placeholder="08123456789">
                    
                    <label for="email">email *</label>
                    <input id="email" type="email" required placeholder="user@domain.com">
                    
                    <label for="password">password</label>
                    <input id="password" type="password" minlength="8">
                    
                    <label for="date">date</label>
                    <input id="date" type="date">
                    
                    <label for="datetime">datetime</label>
                    <input id="datetime" type="datetime-local">
                    
                    <label for="month">month</label>
                    <input id="month" type="month">
                    
                    <label for="time">time</label>
                    <input id="time" type="time">
                    
                    <label for="week">week</label>
                    <input id="week" type="week">
                </fieldset>

                <fieldset>
                    <legend>Selection</legend>
                    <label><input type="checkbox" checked> Checkbox</label>
                    <label><input type="radio" name="radio" value="1"> Radio 1</label>
                    <label><input type="radio" name="radio" value="2"> Radio 2</label>
                </fieldset>

                <fieldset>
                    <legend>Visual</legend>
                    <label>Color: <input type="color" value="#ff0000"></label>
                    <label>File: <input type="file" accept="image/*" multiple></label>
                    <label>Range: <input type="range" min="0" max="100" value="50"></label>
                </fieldset>

                <fieldset>
                    <legend>Dropdown & Textarea</legend>
                    <input type="text" list="datalist" placeholder="Ketik...">
                    <datalist id="datalist">
                        <option value="Jakarta"></option>
                        <option value="Bandung"></option>
                        <option value="Surabaya"></option>
                    </datalist>

                    <select>
                        <optgroup label="Kota">
                            <option value="jkt">Jakarta</option>
                            <option value="bdg">Bandung</option>
                        </optgroup>
                        <optgroup label="Provinsi">
                            <option value="jabar">Jawa Barat</option>
                            <option value="jatim">Jawa Timur</option>
                        </optgroup>
                    </select>

                    <textarea rows="4" placeholder="Deskripsi..."></textarea>
                </fieldset>

                <fieldset>
                    <legend>Meter & Progress</legend>
                    <meter value="70" min="0" max="100">70%</meter>
                    <progress value="50" max="100">50%</progress>
                    <output name="result">0</output>
                </fieldset>

                <fieldset>
                    <legend>Buttons</legend>
                    <input type="button" value="Button">
                    <input type="reset" value="Reset">
                    <input type="submit" value="Submit">
                    <button type="button">Button</button>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </fieldset>
            </md-form>
        `
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
