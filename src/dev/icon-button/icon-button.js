import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class IconButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-icon-button ui="filled" icon="image"></md-icon-button>
                    <md-icon-button ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button ui="" icon="image"></md-icon-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-icon-button toggle ui="filled" icon="image"></md-icon-button>
                    <md-icon-button toggle ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button toggle ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button toggle ui="" icon="image"></md-icon-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-icon-button toggle activated ui="filled" icon="image"></md-icon-button>
                    <md-icon-button toggle activated ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button toggle activated ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button toggle activated ui="" icon="image"></md-icon-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("icon-button-component", IconButtonComponent);

export default document.createElement("icon-button-component");
