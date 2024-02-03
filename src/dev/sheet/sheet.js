import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SheetComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-sheet id="north" region="north">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                    <md-button ui="filled-tonal" label="Sheet North" @click="${() => north.toggle()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-sheet id="east" region="east">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                    <md-button ui="filled-tonal" label="Sheet East" @click="${() => east.toggle()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-sheet id="south" region="south">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                    <md-button ui="filled-tonal" label="Sheet South" @click="${() => south.toggle()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-sheet id="west" region="west">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                    <md-button ui="filled-tonal" label="Sheet West" @click="${() => west.toggle()}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("sheet-component", SheetComponent);

export default document.createElement("sheet-component");
