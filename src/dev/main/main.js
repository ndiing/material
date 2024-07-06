import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";
import { toTitleCase } from "../../material/functions/functions.js";

MDRouter.historyApiFallback = false;

class DevMainComponent extends MDComponent {
    get topAppBar() {
        return this.querySelector("#topAppBar");
    }

    get navigationDrawer() {
        return this.querySelector("#navigationDrawer");
    }

    constructor() {
        super();

        this.list = [
            //
            {routerLink: "/functions"},
            {routerLink: "/localization"},
            {routerLink: "/color"},
            {routerLink: "/component"},
            {routerLink: "/router"},
            {routerLink: "/ripple"},
            {routerLink: "/popper"},
            {routerLink: "/progress"},
            {routerLink: "/gesture"},
            {routerLink: "/observer"},
            {routerLink: "/attribute-observer"},
            {routerLink: "/virtual"},
            {routerLink: "/store"},

            {routerLink: "/markdown"},
            {routerLink: "/icon"},
            {routerLink: "/emoji"},
            {routerLink: "/button"},
            {routerLink: "/icon-button"},
            {routerLink: "/card"},
            {routerLink: "/scrim"},
            {routerLink: "/sheet"},
            {routerLink: "/dialog"},
            {routerLink: "/top-app-bar"},
            {routerLink: "/side-sheet"},
            {routerLink: "/bottom-sheet"},
            {routerLink: "/segmented-button"},
            {routerLink: "/snackbar"},
            {routerLink: "/tooltip"},

            {routerLink: "/picker"},
            {routerLink: "/datetime-picker"},
            {routerLink: "/date-picker"},
            {routerLink: "/month-picker"},
            {routerLink: "/time-picker"},
            {routerLink: "/week-picker"},
            {routerLink: "/color-picker"},
            {routerLink: "/emoji-picker"},

            {routerLink: "/fab"},
            {routerLink: "/bottom-app-bar"},
            {routerLink: "/image"},
            {routerLink: "/badge"},
            {routerLink: "/form"},
            {routerLink: "/form2"},
            {routerLink: "/checkbox"},
            {routerLink: "/radio-button"},
            {routerLink: "/switch"},
            {routerLink: "/slider"},
            {routerLink: "/progress-indicator"},
            {routerLink: "/list-item"},
            {routerLink: "/list"},
            {routerLink: "/tree-item"},
            {routerLink: "/tree"},
            {routerLink: "/navigation-bar"},
            {routerLink: "/navigation-drawer"},
            {routerLink: "/navigation-rail"},
            {routerLink: "/menu"},
            {routerLink: "/tabs"},
            {routerLink: "/chip"},
            {routerLink: "/chips"},

            {routerLink: "/text-field"},
            {routerLink: "/text-field2"},
            {routerLink: "/text-field3"},
            {routerLink: "/datetime-field"},
            {routerLink: "/date-field"},
            {routerLink: "/month-field"},
            {routerLink: "/week-field"},
            {routerLink: "/time-field"},
            {routerLink: "/color-field"},
            {routerLink: "/number-field"},
            {routerLink: "/search-field"},

            {routerLink: "/pagination"},
            {routerLink: "/data-table-item"},
            {routerLink: "/data-table"},

        ];

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.icon = "deployed_code";
            item.label = toTitleCase(item.routerLink);
            item.selected = item.routerLink === MDRouter.path;
        }

        this.list.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });

        this.path = MDRouter.path
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBar"
                    leadingActions='[{"icon":"menu"}]'
                    @onCardIconButtonClick="${this.handleCardIconButtonClick}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="navigationDrawer"
                    open
                    .list="${this.list}"
                    @onTreeItemClick="${this.handleTreeItemClick}"
                    @onTreeItemSelected="${this.handleTreeItemSelected}"
                ></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown href="./docs/${this.path}.md"></md-markdown>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener("onRouterCurrentEntryChange", () => {
            this.path = MDRouter.path
            this.requestUpdate();
        });
    }

    handleCardIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleTreeItemSelected(event) {
        if(!this.ready){
            this.ready=1
            const treeItem = event.detail;
            treeItem.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "instant",
            });
        }
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
