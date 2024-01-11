import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class ExampleComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <!--  -->
                <div class="md-layout__grid">
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" label="Label"></md-button>
                        <md-button appearance="filled" label="Label"></md-button>
                        <md-button appearance="filled-tonal" label="Label"></md-button>
                        <md-button appearance="outlined" label="Label"></md-button>
                        <md-button label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" icon="image" label="Label"></md-button>
                        <md-button appearance="filled" icon="image" label="Label"></md-button>
                        <md-button appearance="filled-tonal" icon="image" label="Label"></md-button>
                        <md-button appearance="outlined" icon="image" label="Label"></md-button>
                        <md-button icon="image" label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab size="small" icon="image"></md-fab>
                        <md-fab icon="image"></md-fab>
                        <md-fab size="large" icon="image"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab appearance="extended" icon="image" label="Label"></md-fab>
                        <md-fab appearance="extended" label="Label"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle activated appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle activated icon="image"></md-icon-button>
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="single-select" .items="${[
                            {label:"Label 1", activated:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="multi-select" .items="${[
                            {label:"Label 1", activated:true},
                            {label:"Label 2", activated:true},
                            {label:"Label 3"},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-checkbox></md-checkbox>
                        <md-checkbox indeterminate></md-checkbox>
                        <md-checkbox checked></md-checkbox>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-radio-button name="radio-button"></md-radio-button>
                        <md-radio-button name="radio-button" checked></md-radio-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-switch></md-switch>
                        <md-switch checked></md-switch>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-badge></md-badge>
                        <md-badge label="1"></md-badge>
                        <md-badge label="1000"></md-badge>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                </div>
                <!--  -->
            <!-- </div> -->
        `
    }
}

customElements.define('example-component',ExampleComponent)

export default document.createElement('example-component')