import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-navigation-bar .items="${[
                        {leadingIcon:'image',label:"Label",activated:true},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",badge:''},
                        {leadingIcon:'image',label:"Label",badge:1},
                    ]}"></md-navigation-bar>
                </div>

                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-navigation-bar .items="${[
                        {leadingIcon:'image',activated:true},
                        {leadingIcon:'image'},
                        {leadingIcon:'image',badge:''},
                        {leadingIcon:'image',badge:1},
                    ]}"></md-navigation-bar>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-navigation-bar style="height:80px;" id="bar" ui="drawer" position="bottom" .items="${[
                        {leadingIcon:'image',label:"Label",activated:true},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label"},
                    ]}"></md-navigation-bar>
                    <!-- <md-button ui="filled-tonal" label="bar modal" @click="${() => {bar.modal=true;bar.toggle()}}"></md-button> -->
                    <md-button ui="filled-tonal" label="bar" @click="${() => {bar.modal=false;bar.toggle()}}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-bar-component", NavigationBarComponent);

export default document.createElement("navigation-bar-component");
