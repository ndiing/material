import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTooltip extends MdElement {
    
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                
                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Plain tooltip</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button0"  label="Tooltip"></md-button>
                            <md-tooltip for="button0" ${ref(this.tooltip0)} variant="plain" supporting="Save to favorites"></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button1"   label="Tooltip"></md-button>
                            <md-tooltip for="button1"  variant="plain" supporting="Grant value is calculated using the\nclosing stock price from the day\nbefore the grant date. Amounts do\nnot reflect tax witholdings."></md-tooltip>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Rich tooltip</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button2"  label="Tooltip"></md-button>
                            <md-tooltip for="button2" ${ref(this.tooltip2)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[
                                    {label:'Action'},
                                    {label:'Action'},
                                ]}"
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button3"  label="Tooltip"></md-button>
                            <md-tooltip for="button3" ${ref(this.tooltip3)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[
                                    {label:'Action'},
                                ]}"
                            ></md-tooltip>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button4"  label="Tooltip"></md-button>
                            <md-tooltip for="button4" ${ref(this.tooltip4)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button5"  label="Tooltip"></md-button>
                            <md-tooltip for="button5" ${ref(this.tooltip5)} 
                                variant="rich"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[
                                    {label:'Action'},
                                ]}"
                            ></md-tooltip>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button6"  label="Tooltip"></md-button>
                            <md-tooltip for="button6" ${ref(this.tooltip6)} 
                                variant="rich"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[
                                    {label:'Action'},
                                    {label:'Action'},
                                ]}"
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

            </md-grid>
        `
    }

    
}
customElements.define("demo-tooltip", DemoTooltip);
export default document.createElement("demo-tooltip");
