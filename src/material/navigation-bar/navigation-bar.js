import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";
import { MDPanelComponent } from "../panel/panel";


class MDNavigationBarComponent extends MDPanelComponent {
    
    static properties = Object.assign(MDPanelComponent.properties, MDListComponent.properties, {});

    
    constructor() {
        super();

        // default
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-bar");
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
                    class="md-navigation-bar__list"
                    @onListItemContainerClick="${this.handleListItemContainerClick}"
                ></md-list>
            </md-panel-body>
        `;
    }

    
    handleListItemContainerClick(event) {
        this.activatedListItemContainer = event.detail.listItemContainer;

        if (!this.activatedListItemContainer) {
            return;
        }

        this.handleListIconAnimationend = this.handleListIconAnimationend.bind(this);
        this.activatedListItemContainer.addEventListener("animationend", this.handleListIconAnimationend);

        this.activatedListIcon = this.activatedListItemContainer.querySelector(".md-list__icon");
        if (!this.activatedListIcon) {
            return;
        }
        this.activatedListIcon.style.setProperty("animation-name", "md-navigation-bar-list-item-container-activated");
    }

    
    handleListIconAnimationend() {
        if (!this.activatedListIcon) {
            return;
        }
        this.activatedListIcon.style.removeProperty("animation-name");
        this.activatedListIcon = null;

        if (!this.activatedListItemContainer) {
            return;
        }
        this.activatedListItemContainer.removeEventListener("animationend", this.handleListIconAnimationend);
        this.activatedListItemContainer = null;
    }
}


customElements.define("md-navigation-bar", MDNavigationBarComponent);

export { MDNavigationBarComponent };
