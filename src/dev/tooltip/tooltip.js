import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TooltipComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-tooltip id="tooltip0" button="button0" type="plain">
                        <md-panel-body>Save to favorites</md-panel-body>
                    </md-tooltip>
                    <md-button id="button0" ui="filled-tonal" label="tooltip0" @pointerenter="${()=>tooltip0.toggle()}" @pointerleave="${()=>tooltip0.toggle()}"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-tooltip id="tooltip1" button="button1" type="plain">
                        <md-panel-body>
                            Grant value is calculated using the<br>
                            closing stock price from the day<br>
                            before the grant date. Amounts do<br>
                            not reflect tax witholdings
                        </md-panel-body>
                    </md-tooltip>
                    <md-button id="button1" ui="filled-tonal" label="tooltip1" @pointerenter="${()=>tooltip1.toggle()}" @pointerleave="${()=>tooltip1.toggle()}"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-tooltip id="tooltip2" button="button2" type="rich">
                        <md-panel-header
                            label="Rich tooltip"
                        ></md-panel-header>
                        <md-panel-body>
                            Rich tooltips bring attention to a particular<br>
                            element of feature that warrants the user's<br>
                            focus.
                        </md-panel-body>
                        <md-panel-footer>
                            <md-button label="Action" @click="${()=>tooltip2.toggle()}"></md-button>
                        </md-panel-footer>
                    </md-tooltip>
                    <md-button id="button2" ui="filled-tonal" label="tooltip2" @pointerenter="${()=>tooltip2.toggle()}"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("tooltip-component", TooltipComponent);

export default document.createElement('tooltip-component')
