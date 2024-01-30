import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="elevated" label="Label"></md-button>
                    <md-button ui="filled" label="Label"></md-button>
                    <md-button ui="filled-tonal" label="Label"></md-button>
                    <md-button ui="outlined" label="Label"></md-button>
                    <md-button ui="" label="Label"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="elevated" icon="image" label="Label"></md-button>
                    <md-button ui="filled" icon="image" label="Label"></md-button>
                    <md-button ui="filled-tonal" icon="image" label="Label"></md-button>
                    <md-button ui="outlined" icon="image" label="Label"></md-button>
                    <md-button ui="" icon="image" label="Label"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("button-component", ButtonComponent);

export default document.createElement('button-component')
