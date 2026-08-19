import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoInputEnum extends MdElement {
    constructor() {
        super();
    }
    /* prettier-ignore */
    render(){
        return html`
            <form @submit="${event=>event.preventDefault()}">
                <md-grid class="demo-grid">
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="month" value="test"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <md-input-enum value="test" options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                                <md-input-segment value="test" min="1000" max="9999" startValue="2026" placeholder="----" maxLength="4" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <input type="month" value="test">
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="month" value="test"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <md-input-enum selectedIndex="test" options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                                <md-input-segment value="test" min="1000" max="9999" startValue="2026" placeholder="----" maxLength="4" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <input type="month" value="test">
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="month" value="2026-08"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <md-input-enum value="August" options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                                <md-input-segment value="2026" min="1000" max="9999" startValue="2026" placeholder="----" maxLength="4" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <input type="month" value="2026-08">
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="month" value="2026-08"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <md-input-enum selectedIndex="7" options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                                <md-input-segment value="2026" min="1000" max="9999" startValue="2026" placeholder="----" maxLength="4" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <input type="month" value="2026-08">
                            </md-grid-column>
                        </md-grid>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="4">
                                <h3>type="month"</h3>
                            </md-grid-column>
    
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <md-input-enum options='["January","February","March","April","May","June","July","August","September","October","November","December"]' placeholder="---------"></md-input-enum>
                                <md-input-segment min="1000" max="9999" startValue="2026" placeholder="----" maxLength="4" .clampOnInput="${false}"></md-input-segment>
                            </md-grid-column>
                            <md-grid-column expanded="4" medium="4" compact="4">
                                <input type="month">
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
customElements.define("demo-input-enum", DemoInputEnum);
export default document.createElement("demo-input-enum");
