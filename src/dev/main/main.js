import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";

// MDRouter.historyApiFallback = false;

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
            { icon: "deployed_code", routerLink: "/icon", label: "Icon" },
            { icon: "deployed_code", routerLink: "/button", label: "Button" },
            { icon: "deployed_code", routerLink: "/icon-button", label: "Icon Button" },
            { icon: "deployed_code", routerLink: "/card", label: "Card" },
            { icon: "deployed_code", routerLink: "/sheet", label: "Sheet" },
            { icon: "deployed_code", routerLink: "/dialog", label: "Dialog" },
            { icon: "deployed_code", routerLink: "/top-app-bar", label: "Top App Bar" },
            { icon: "deployed_code", routerLink: "/side-sheet", label: "Side Sheet" },
            { icon: "deployed_code", routerLink: "/bottom-sheet", label: "Bottom Sheet" },
            { icon: "deployed_code", routerLink: "/segmented-button", label: "Segmented Button" },
            { icon: "deployed_code", routerLink: "/snackbar", label: "Snackbar" },
            { icon: "deployed_code", routerLink: "/localization", label: "Localization" },
            { icon: "deployed_code", routerLink: "/color", label: "Color" },
            { icon: "deployed_code", routerLink: "/ripple", label: "Ripple" },
            { icon: "deployed_code", routerLink: "/tooltip", label: "Tooltip" },
            { icon: "deployed_code", routerLink: "/picker", label: "Picker" },
            { icon: "deployed_code", routerLink: "/datetime-picker", label: "Datetime Picker" },
            { icon: "deployed_code", routerLink: "/date-picker", label: "Date Picker" },
            { icon: "deployed_code", routerLink: "/month-picker", label: "Month Picker" },
            { icon: "deployed_code", routerLink: "/time-picker", label: "Time Picker" },
            { icon: "deployed_code", routerLink: "/week-picker", label: "Week Picker" },
            { icon: "deployed_code", routerLink: "/color-picker", label: "Color Picker" },
            { icon: "deployed_code", routerLink: "/emoji-picker", label: "Emoji Picker" },
            { icon: "deployed_code", routerLink: "/fab", label: "Fab" },
            { icon: "deployed_code", routerLink: "/bottom-app-bar", label: "Bottom App Bar" },
            { icon: "deployed_code", routerLink: "/image", label: "Image" },
            { icon: "deployed_code", routerLink: "/popper", label: "Popper" },
            { icon: "deployed_code", routerLink: "/badge", label: "Badge" },
            { icon: "deployed_code", routerLink: "/form", label: "Form" },
            { icon: "deployed_code", routerLink: "/checkbox", label: "Checkbox" },
            { icon: "deployed_code", routerLink: "/radio-button", label: "Radio Button" },
            { icon: "deployed_code", routerLink: "/switch", label: "Switch" },
            { icon: "deployed_code", routerLink: "/slider", label: "Slider" },
            { icon: "deployed_code", routerLink: "/form2", label: "Form 2" },
            { icon: "deployed_code", routerLink: "/progress-indicator", label: "Progress Indicator" },
            { icon: "deployed_code", routerLink: "/gesture", label: "Gesture" },
            { icon: "deployed_code", routerLink: "/list", label: "List" },
            { icon: "deployed_code", routerLink: "/selection", label: "Selection" },
            { icon: "deployed_code", routerLink: "/tree", label: "Tree" },
            { icon: "deployed_code", routerLink: "/navigation", label: "Navigation" },
            { icon: "deployed_code", routerLink: "/navigation-bar", label: "Navigation Bar" },
            { icon: "deployed_code", routerLink: "/navigation-drawer", label: "Navigation Drawer" },
            { icon: "deployed_code", routerLink: "/navigation-rail", label: "Navigation Rail" },
            { icon: "deployed_code", routerLink: "/menu", label: "Menu" },
            { icon: "deployed_code", routerLink: "/tabs", label: "Tabs" },
            { icon: "deployed_code", routerLink: "/chips", label: "Chips" },
            { icon: "deployed_code", routerLink: "/text-field", label: "Text Field" },
            { icon: "deployed_code", routerLink: "/text-field2", label: "Text Field 2" },
            { icon: "deployed_code", routerLink: "/text-field3", label: "Text Field 3" },
            { icon: "deployed_code", routerLink: "/virtual", label: "Virtual" },
            { icon: "deployed_code", routerLink: "/emoji", label: "Emoji" },
            { icon: "deployed_code", routerLink: "/pagination", label: "Pagination" },
            { icon: "deployed_code", routerLink: "/data-table", label: "Data Table" },
            { icon: "deployed_code", routerLink: "/markdown", label: "Markdown" },

            { icon: "deployed_code", routerLink: "/functions", label: "functions" },
            { icon: "deployed_code", routerLink: "/component", label: "component" },
            { icon: "deployed_code", routerLink: "/router", label: "router" },
            { icon: "deployed_code", routerLink: "/progress", label: "progress" },
            { icon: "deployed_code", routerLink: "/observer", label: "observer" },
            { icon: "deployed_code", routerLink: "/attribute-observer", label: "attribute-observer" },
            { icon: "deployed_code", routerLink: "/store", label: "store" },
        ];

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item.routerLink === MDRouter.path;
        }

        this.list.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });

        this.path=MDRouter.path

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
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown href="./docs/${this.path}.md"></md-markdown>
                        </div>
                    </div>
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }

    connectedCallback(){
        super.connectedCallback()

        window.addEventListener('onRouterCurrentEntryChange', () => {
            this.path=MDRouter.path
            this.requestUpdate()
        })
    }

    handleCardIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleTreeItemSelected(event) {
        const treeItem = event.detail;
        if (!this.ready) {
            this.ready = true;
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
