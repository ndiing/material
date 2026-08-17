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
        this.options = arr;
    }
    /* prettier-ignore */
    render(){
        return html`
            <form @submit="${event=>event.preventDefault()}">
                <md-grid class="demo-grid">
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>datetime</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="datetime-local"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local" >
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-datetime type="month"></md-input-datetime>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" >
                            </md-grid-column>
            
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>enum</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-enum .options="${this.options}" placeholder="---------"></md-input-enum>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="month" >
                            </md-grid-column>
            
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>segment</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-segment 
                                    min="1" 
                                    max="12" 
                                    threshold="1" 
                                    maxLength="2" 
                                    placeholder="mm"
                                ></md-input-segment>
                                <span>/</span>
                                <md-input-segment 
                                    min="1" 
                                    max="31" 
                                    threshold="3" 
                                    maxLength="2" 
                                    placeholder="dd"
                                ></md-input-segment>
                                <span>/</span>
                                <md-input-segment 
                                    min="1000" 
                                    max="9999" 
                                    startValue="2026" 
                                    maxLength="4" 
                                    placeholder="yyyy"
                                ></md-input-segment>
                                <span>&nbsp;</span>
                                <md-input-segment 
                                    min="0" 
                                    max="23" 
                                    maxLength="2" 
                                    placeholder="--"
                                ></md-input-segment>
                                <span>:</span>
                                <md-input-segment 
                                    min="0" 
                                    max="59" 
                                    maxLength="2" 
                                    placeholder="--"
                                ></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="datetime-local">
                            </md-grid-column>
            
                        </md-grid>
                    </md-grid-column>
    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" min="0" max="10" step="5" value="5"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number min="0" max="10" step="5" value="5"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" min="0" max="10" step="5" value="5">
                            </md-grid-column>
            
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" min="0" max="10" step="0.1" value="5"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number min="0" max="10" step="0.1" value="5"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" min="0" max="10" step="0.1" value="5">
                            </md-grid-column>
            

                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" min="0" max="10" value="5"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number min="0" max="10" value="5"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" min="0" max="10" value="5">
                            </md-grid-column>
            


                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number" value="5"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number value="5"></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number" value="5">
                            </md-grid-column>
            


                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="number"</h3>
                            </md-grid-column>

                            <md-grid-column expanded="4" medium="4" compact="2">
                                <md-input-number></md-input-number>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="2">
                                <input type="number">
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
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
