import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTest extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <form @submit="${this._handleSubmit}">

                <md-grid class="demo-grid">
    
                    <md-grid-column expanded="12" medium="8" compact="4">
                    
                        <md-grid>

                        
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="datetime-local" value="2026-08-18T23:59"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="datetime-local" value="2026-08-18T23:59"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="datetime-local" value="2026-08-18T23:59" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="date" value="2026-08-18"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="date" value="2026-08-18"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="date" value="2026-08-18" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="month" value="2026-08"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="month" value="2026-08"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" value="2026-08" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="week" value="2026-W34"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="week" value="2026-W34"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="week" value="2026-W34" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="time" value="23:59"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="time" value="23:59"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="time" value="23:59" name="">
                            </md-grid-column>
                            
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="datetime-local"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="datetime-local"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="datetime-local" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="date"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="date"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="date" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="month"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="month"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="week"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="week"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="week" name="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime type="time"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-datetime type="time"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="time" name="">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum options='[{value,label}]'</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='[{"value":0,"label":"January"},{"value":1,"label":"February"},{"value":2,"label":"March"},{"value":3,"label":"April"},{"value":4,"label":"May"},{"value":5,"label":"June"},{"value":6,"label":"July"},{"value":7,"label":"August"},{"value":8,"label":"September"},{"value":9,"label":"October"},{"value":10,"label":"November"},{"value":11,"label":"December"}]' placeholder="---------"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum options='[label]'</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum value="August"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='[{"value":0,"label":"January"},{"value":1,"label":"February"},{"value":2,"label":"March"},{"value":3,"label":"April"},{"value":4,"label":"May"},{"value":5,"label":"June"},{"value":6,"label":"July"},{"value":7,"label":"August"},{"value":8,"label":"September"},{"value":9,"label":"October"},{"value":10,"label":"November"},{"value":11,"label":"December"}]' placeholder="---------" value="August"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month" value="">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum value="incorrect"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='[{"value":0,"label":"January"},{"value":1,"label":"February"},{"value":2,"label":"March"},{"value":3,"label":"April"},{"value":4,"label":"May"},{"value":5,"label":"June"},{"value":6,"label":"July"},{"value":7,"label":"August"},{"value":8,"label":"September"},{"value":9,"label":"October"},{"value":10,"label":"November"},{"value":11,"label":"December"}]' placeholder="---------" value="incorrect"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month" value="">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum selectedIndex="7"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='[{"value":0,"label":"January"},{"value":1,"label":"February"},{"value":2,"label":"March"},{"value":3,"label":"April"},{"value":4,"label":"May"},{"value":5,"label":"June"},{"value":6,"label":"July"},{"value":7,"label":"August"},{"value":8,"label":"September"},{"value":9,"label":"October"},{"value":10,"label":"November"},{"value":11,"label":"December"}]' placeholder="---------" selectedIndex="7"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month" value="">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum selectedIndex="incorrect"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-enum options='[{"value":0,"label":"January"},{"value":1,"label":"February"},{"value":2,"label":"March"},{"value":3,"label":"April"},{"value":4,"label":"May"},{"value":5,"label":"June"},{"value":6,"label":"July"},{"value":7,"label":"August"},{"value":8,"label":"September"},{"value":9,"label":"October"},{"value":10,"label":"November"},{"value":11,"label":"December"}]' placeholder="---------" selectedIndex="incorrect"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="month" name="month" value="">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-segment min="1" max="31" threshold="3" maxLength="2" placeholder="dd"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="datetime-local" name="datetime-local">
                            </md-grid-column>
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment startValue="2026"</h3>
                            </md-grid-column>
    
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-segment min="1000" max="9999" maxLength="4" placeholder="yyyy" startValue="2026" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="datetime-local" name="datetime-local">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment value="incorrectvalue"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-segment min="1" max="31" threshold="3" maxLength="2" placeholder="dd" value="incorrectvalue"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="datetime-local" name="datetime-local" value="incorrectvalue">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" name="number"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-number></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="number" name="number">
                            </md-grid-column>
                            
                            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" name="number" step="0.1"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-number step="0.1"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="number" name="number" step="0.1">
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" name="number" step="0.1" min="-10" max="10"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-number step="0.1" min="-10" max="10"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="number" name="number" step="0.1" min="-10" max="10">
                            </md-grid-column>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" name="number" step="5" min="-10" max="10" value="3"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-input-number step="5" min="-10" max="10" value="3"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <input aria-label="input" type="number" name="number" step="5" min="-10" max="10" value="3">
                            </md-grid-column>

                        </md-grid>
    
                    </md-grid-column>
    
    
                    <md-grid-column expanded="12" medium="8" compact="4">
                    
                        <button type="reset">reset</button>
                        <button type="submit">submit</button>
    
                    </md-grid-column>
    
                </md-grid>
            </form>
        `
    }

    _handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log([...formData.entries()]);
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
