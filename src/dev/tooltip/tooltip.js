import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TooltipComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip open>
                        <md-tooltip-body>
                            Lorem, ipsum dolor.
                        </md-tooltip-body>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip open>
                        <md-tooltip-body>
                            Lorem ipsum dolor sit.<br>
                            Magnam vitae iste possimus?<br>
                            Voluptatem deleniti assumenda commodi.<br>
                            Veritatis asperiores quidem nobis!
                        </md-tooltip-body>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-tooltip type="rich" open>
                        <md-tooltip-header
                            label="Label"
                        ></md-tooltip-header>
                        <md-tooltip-body>
                            Lorem, ipsum dolor.<br>
                            Tempore, quam consectetur.<br>
                            Enim, odio possimus!
                        </md-tooltip-body>
                        <md-tooltip-footer>
                            <md-button label="Label"></md-button>
                        </md-tooltip-footer>
                    </md-tooltip>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("tooltip-component", TooltipComponent);

export default document.createElement("tooltip-component");
