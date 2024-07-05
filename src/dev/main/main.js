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
            { routerLink: "/icon" },
            { routerLink: "/button" },
            { routerLink: "/icon-button" },
            { routerLink: "/card" },
            { routerLink: "/sheet" },
            { routerLink: "/dialog" },
            { routerLink: "/top-app-bar" },
            { routerLink: "/side-sheet" },
            { routerLink: "/bottom-sheet" },
            { routerLink: "/segmented-button" },
            { routerLink: "/snackbar" },
            { routerLink: "/localization" },
            { routerLink: "/color" },
            { routerLink: "/ripple" },
            { routerLink: "/tooltip" },
            { routerLink: "/picker" },
            { routerLink: "/datetime-picker" },
            { routerLink: "/date-picker" },
            { routerLink: "/month-picker" },
            { routerLink: "/time-picker" },
            { routerLink: "/week-picker" },
            { routerLink: "/color-picker" },
            { routerLink: "/emoji-picker" },
            { routerLink: "/fab" },
            { routerLink: "/bottom-app-bar" },
            { routerLink: "/image" },
            { routerLink: "/popper" },
            { routerLink: "/badge" },
            { routerLink: "/form" },
            { routerLink: "/checkbox" },
            { routerLink: "/radio-button" },
            { routerLink: "/switch" },
            { routerLink: "/slider" },
            { routerLink: "/form2" },
            { routerLink: "/progress-indicator" },
            { routerLink: "/gesture" },
            { routerLink: "/list" },
            { routerLink: "/selection" },
            { routerLink: "/tree" },
            { routerLink: "/navigation" },
            { routerLink: "/navigation-bar" },
            { routerLink: "/navigation-drawer" },
            { routerLink: "/navigation-rail" },
            { routerLink: "/menu" },
            { routerLink: "/tabs" },
            { routerLink: "/chips" },
            { routerLink: "/text-field" },
            { routerLink: "/text-field2" },
            { routerLink: "/text-field3" },
            { routerLink: "/virtual" },
            { routerLink: "/emoji" },
            { routerLink: "/pagination" },
            { routerLink: "/data-table" },
            { routerLink: "/markdown" },
            { routerLink: "/functions" },
            { routerLink: "/component" },
            { routerLink: "/router" },
            { routerLink: "/progress" },
            { routerLink: "/observer" },
            { routerLink: "/attribute-observer" },
            { routerLink: "/store" },
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
        const treeItem = event.detail;
        treeItem.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
        });
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
