import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class NavigationDrawerComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-drawer .items="${[
                        {leadingIcon:'image',label:"Label",activated:true,trailingSupportingText:'24'},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                        {divider:true},
                        {headline:'Label'},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                    ]}"></md-navigation-drawer>
                </div>

                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-drawer .items="${[
                        {headline:'Label'},
                        {leadingIcon:'image',label:"Label",activated:true,trailingSupportingText:'24'},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                        {divider:true},
                        {headline:'Label'},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                    ]}"></md-navigation-drawer>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-navigation-drawer style="width:360px;" id="drawer" ui="drawer" position="left" .items="${[
                        {headline:'Label'},
                        {leadingIcon:'image',label:"Label",activated:true,trailingSupportingText:'24'},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                        {divider:true},
                        {headline:'Label'},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label"},
                        {leadingIcon:'image',label:"Label",},
                        {leadingIcon:'image',label:"Label",},
                    ]}"></md-navigation-drawer>
                    <md-button ui="filled-tonal" label="drawer modal" @click="${() => {drawer.modal=true;drawer.toggle()}}"></md-button>
                    <md-button ui="filled-tonal" label="drawer" @click="${() => {drawer.modal=false;drawer.toggle()}}"></md-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("navigation-drawer-component", NavigationDrawerComponent);

export default document.createElement("navigation-drawer-component");
