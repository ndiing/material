import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTooltip extends MdElement {
    tooltip0 = createRef();
    tooltip1 = createRef();
    tooltip2 = createRef();
    tooltip3 = createRef();
    tooltip4 = createRef();
    tooltip5 = createRef();
    tooltip6 = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-grid>
                <md-grid-column>
                    <md-button 
                        @pointerenter="${this.handleButton0Pointerenter}" 
                        @pointerleave="${this.handleButton0Pointerleave}" 
                        label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip0)} variant="plain" supporting="Save to favorites"></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button 
                        id="my-btn"
                        @pointerenter="${this.handleButton1Pointerenter}" 
                        @pointerleave="${this.handleButton1Pointerleave}" 
                        label="Tooltip"></md-button>
                    <md-tooltip for="my-btn" variant="plain" supporting="Grant value is calculated using the\nclosing stock price from the day\nbefore the grant date. Amounts do\nnot reflect tax witholdings."></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-button @click="${this.handleButton2Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip2)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton3Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip3)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton4Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip4)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton5Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip5)} 
                        variant="rich"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton6Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip6)} 
                        variant="rich"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>

            </md-grid>
        `
    }

    handleButton0Pointerenter() {
        this.tooltip0.value.show(event.currentTarget);
    }
    handleButton0Pointerleave() {
        this.tooltip0.value.close(event.currentTarget);
    }

    handleButton2Click(event) {
        this.tooltip2.value.toggle(event.currentTarget);
    }
    handleButton3Click(event) {
        this.tooltip3.value.toggle(event.currentTarget);
    }
    handleButton4Click(event) {
        this.tooltip4.value.toggle(event.currentTarget);
    }
    handleButton5Click(event) {
        this.tooltip5.value.toggle(event.currentTarget);
    }
    handleButton6Click(event) {
        this.tooltip6.value.toggle(event.currentTarget);
    }
}
customElements.define("demo-tooltip", DemoTooltip);
export default document.createElement("demo-tooltip");
