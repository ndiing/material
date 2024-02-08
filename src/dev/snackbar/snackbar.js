import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";
import { MDSnackbarComponent } from "../../material/snackbar/snackbar";

class SnackbarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="filled-tonal" label="snackbar0" @click="${() => MDSnackbarComponent.show({
                        supportingText:html`Lorem, ipsum dolor.`
                    })}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="filled-tonal" label="snackbar1" @click="${() => MDSnackbarComponent.show({
                        button:"Action",
                        supportingText:html`Lorem, ipsum dolor.`
                    })}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="filled-tonal" label="snackbar2" @click="${() => MDSnackbarComponent.show({
                        supportingText:html`Lorem, ipsum dolor.<br>Sed, ab iste!`
                    })}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="filled-tonal" label="snackbar3" @click="${() => MDSnackbarComponent.show({
                        button:'Action',
                        supportingText:html`Lorem, ipsum dolor.<br>Sed, ab iste!`
                    })}"></md-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-button ui="filled-tonal" label="snackbar4" @click="${() => MDSnackbarComponent.show({
                        button:'Longer action',
                        supportingText:html`Lorem, ipsum dolor.<br>Sed, ab iste!`
                    })}"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("snackbar-component", SnackbarComponent);

export default document.createElement("snackbar-component");
