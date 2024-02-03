import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class CardComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-card ui="elevated">
                        <md-card-header
                            label="Label"
                            supportingText="Supporting text"
                        ></md-card-header>
                        <md-card-body>
                            Lorem, ipsum dolor.<br>
                            Aperiam, laudantium. Autem.<br>
                            Quae, eveniet veniam!<br>
                        </md-card-body>
                        <md-card-footer>
                            <md-button ui="filled" label="Label"></md-button>
                        </md-card-footer>
                    </md-card>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-card ui="filled">
                        <md-card-header
                            label="Label"
                            supportingText="Supporting text"
                        ></md-card-header>
                        <md-card-body>
                            Lorem, ipsum dolor.<br>
                            Aperiam, laudantium. Autem.<br>
                            Quae, eveniet veniam!<br>
                        </md-card-body>
                        <md-card-footer>
                            <md-button ui="filled" label="Label"></md-button>
                        </md-card-footer>
                    </md-card>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-card ui="outlined">
                        <md-card-header
                            label="Label"
                            supportingText="Supporting text"
                        ></md-card-header>
                        <md-card-body>
                            Lorem, ipsum dolor.<br>
                            Aperiam, laudantium. Autem.<br>
                            Quae, eveniet veniam!<br>
                        </md-card-body>
                        <md-card-footer>
                            <md-button ui="filled" label="Label"></md-button>
                        </md-card-footer>
                    </md-card>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("card-component", CardComponent);

export default document.createElement("card-component");
