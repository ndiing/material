import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="elevated" label="Label"></md-button>
                    <md-button ui="filled" label="Label"></md-button>
                    <md-button ui="filled-tonal" label="Label"></md-button>
                    <md-button ui="outlined" label="Label"></md-button>
                    <md-button ui="" label="Label"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="elevated" label="Label" icon="image"></md-button>
                    <md-button ui="filled" label="Label" icon="image"></md-button>
                    <md-button ui="filled-tonal" label="Label" icon="image"></md-button>
                    <md-button ui="outlined" label="Label" icon="image"></md-button>
                    <md-button ui="" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("button-component", ButtonComponent);

export default document.createElement("button-component");
