import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";
import { MDPanelComponent } from "../panel/panel";


class MDNavigationDrawerComponent extends MDPanelComponent {
    
    static properties = Object.assign(MDPanelComponent.properties, MDListComponent.properties, {});

    
    constructor() {
        super();

        // default
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-drawer");
    }

    
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    
    render() {
        // prettier-ignore
        return html`
            <md-panel-body>
                <md-list 
                    .items="${this.items}"
                    .ui="${this.ui}"
                    .type="${this.type ?? 'single-select'}"
                    .selectable="${this.selectable ?? true}"
                    class="md-navigation-drawer__list"
                    @onListItemContainerClick="${this.handleListItemContainerClick}"
                ></md-list>
            </md-panel-body>
        `;
    }

    
    handleListItemContainerClick(event) {
        // Add your handling logic here if needed
    }
}


customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);

export { MDNavigationDrawerComponent };
