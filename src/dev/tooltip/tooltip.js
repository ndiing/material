import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TooltipComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip id="tooltip0" button="#button0" >
                        <md-tooltip-body>
                            Lorem, ipsum dolor.
                        </md-tooltip-body>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip id="tooltip1" button="#button1" >
                        <md-tooltip-body>
                            Lorem ipsum dolor sit.<br>
                            Magnam vitae iste possimus?<br>
                            Voluptatem deleniti assumenda commodi.<br>
                            Veritatis asperiores quidem nobis!
                        </md-tooltip-body>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip id="tooltip2" button="#button2" type="rich" >
                        <md-tooltip-header
                            label="Label"
                        ></md-tooltip-header>
                        <md-tooltip-body>
                            Lorem, ipsum dolor.<br>
                            Tempore, quam consectetur.<br>
                            Enim, odio possimus!
                        </md-tooltip-body>
                        <md-tooltip-footer>
                            <md-button label="Label" @click="${() => tooltip2.close()}"></md-button>
                        </md-tooltip-footer>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button id="button0" label="tooltip0" ui="filled-tonal" @pointerenter="${() => tooltip0.show()}" @pointerleave="${() => tooltip0.close()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button id="button1" label="tooltip1" ui="filled-tonal" @pointerenter="${() => tooltip1.show()}" @pointerleave="${() => tooltip1.close()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button id="button2" label="tooltip2" ui="filled-tonal" @pointerenter="${() => tooltip2.show()}"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("tooltip-component", TooltipComponent);

export default document.createElement("tooltip-component");
