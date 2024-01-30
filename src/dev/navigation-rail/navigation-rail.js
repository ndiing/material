import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationRailComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-rail .items="${[
                        {leadingIcon:'image',label:"Label",activated:true},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",badge:''},
                        {leadingIcon:'image',label:"Label",badge:1},
                    ]}"></md-navigation-rail>
                </div>

                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-rail .items="${[
                        {leadingIcon:'image',activated:true},
                        {leadingIcon:'image'},
                        {leadingIcon:'image',badge:''},
                        {leadingIcon:'image',badge:1},
                    ]}"></md-navigation-rail>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-rail style="width:80px;" id="rail" ui="drawer" position="left" .items="${[
                        {leadingIcon:'image',label:"Label",activated:true},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label"},
                    ]}"></md-navigation-rail>
                    <md-button ui="filled-tonal" label="rail modal" @click="${() => {rail.modal=true;rail.toggle()}}"></md-button>
                    <md-button ui="filled-tonal" label="rail" @click="${() => {rail.modal=false;rail.toggle()}}"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-rail-component", NavigationRailComponent);

export default document.createElement('navigation-rail-component')
