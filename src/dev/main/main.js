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
            
            {
                label: "Components",
                items: [
                    { label: "Badge", routerLink: "/badge" },
                    { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    { label: "Button", routerLink: "/button" },
                    { label: "Card", routerLink: "/card" },
                    { label: "Checkbox", routerLink: "/checkbox" },
                    { label: "Chip", routerLink: "/chip" },
                    { label: "Chips", routerLink: "/chips" },
                    { label: "Color Field", routerLink: "/color-field" },
                    { label: "Color Picker", routerLink: "/color-picker" },
                    { label: "Data Table Column Cell", routerLink: "/data-table-column-cell" },
                    { label: "Data Table Item", routerLink: "/data-table-item" },
                    { label: "Data Table Row Cell", routerLink: "/data-table-row-cell" },
                    { label: "Data Table", routerLink: "/data-table" },
                    { label: "Date Field", routerLink: "/date-field" },
                    { label: "Date Picker", routerLink: "/date-picker" },
                    { label: "Datetime Field", routerLink: "/datetime-field" },
                    { label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { label: "Dialog", routerLink: "/dialog" },
                    { label: "Divider", routerLink: "/divider" },
                    { label: "Emoji Picker", routerLink: "/emoji-picker" },
                    { label: "Emoji", routerLink: "/emoji" },
                    { label: "Fab", routerLink: "/fab" },
                    { label: "Form", routerLink: "/form" },
                    { label: "Icon Button", routerLink: "/icon-button" },
                    { label: "Icon", routerLink: "/icon" },
                    { label: "Image", routerLink: "/image" },
                    { label: "Layout", routerLink: "/layout" },
                    { label: "List Item", routerLink: "/list-item" },
                    { label: "List", routerLink: "/list" },
                    { label: "Markdown", routerLink: "/markdown" },
                    { label: "Menu", routerLink: "/menu" },
                    { label: "Month Field", routerLink: "/month-field" },
                    { label: "Month Picker", routerLink: "/month-picker" },
                    { label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { label: "Navigation Rail", routerLink: "/navigation-rail" },
                    { label: "Number Field", routerLink: "/number-field" },
                    { label: "Pagination", routerLink: "/pagination" },
                    { label: "Password Field", routerLink: "/password-field" },
                    { label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { label: "Radio Button", routerLink: "/radio-button" },
                    { label: "Scrim", routerLink: "/scrim" },
                    { label: "Search Field", routerLink: "/search-field" },
                    { label: "Segmented Button", routerLink: "/segmented-button" },
                    { label: "Select Field", routerLink: "/select-field" },
                    { label: "Sheet", routerLink: "/sheet" },
                    { label: "Side Sheet", routerLink: "/side-sheet" },
                    { label: "Slider", routerLink: "/slider" },
                    { label: "Snackbar", routerLink: "/snackbar" },
                    { label: "Spacer", routerLink: "/spacer" },
                    { label: "Switch", routerLink: "/switch" },
                    { label: "Tabs", routerLink: "/tabs" },
                    { label: "Text Field", routerLink: "/text-field" },
                    { label: "Textarea Field", routerLink: "/textarea-field" },
                    { label: "Time Field", routerLink: "/time-field" },
                    { label: "Time Picker", routerLink: "/time-picker" },
                    { label: "Toolbar", routerLink: "/toolbar" },
                    { label: "Tooltip", routerLink: "/tooltip" },
                    { label: "Top App Bar", routerLink: "/top-app-bar" },
                    { label: "Tree Item", routerLink: "/tree-item" },
                    { label: "Tree", routerLink: "/tree" },
                    { label: "Week Field", routerLink: "/week-field" },
                    { label: "Week Picker", routerLink: "/week-picker" },
                ],
            },
            {
                label: "Foundations",
                items: [
                    { label: "Attribute Observer", routerLink: "/attribute-observer" },
                    { label: "Color", routerLink: "/color" },
                    { label: "Component", routerLink: "/component" },
                    { label: "Functions", routerLink: "/functions" },
                    { label: "Gesture", routerLink: "/gesture" },
                    { label: "Localization", routerLink: "/localization" },
                    { label: "Media Observer", routerLink: "/media-observer" },
                    { label: "Observer", routerLink: "/observer" },
                    { label: "Popper", routerLink: "/popper" },
                    { label: "Progress", routerLink: "/progress" },
                    { label: "Ripple", routerLink: "/ripple" },
                    { label: "Router", routerLink: "/router" },
                    { label: "Store", routerLink: "/store" },
                    { label: "Template", routerLink: "/template" },
                    { label: "Virtual", routerLink: "/virtual" },
                ],
            },
        ];

        this.select(this.list, MDRouter.path);
    }

    select(list, routerLink) {
        list.sort((a, b) => a.label.localeCompare(b.label));
        list.forEach((item) => {
            item.selected = item.routerLink === routerLink;
            if (item.items?.length) {
                this.select(item.items, routerLink);
            }
        });
    }

    render() {
        return html`
            <md-layout variant="border">
                <!-- <md-top-app-bar
                    id="topAppBar"
                    .leadingActions="${[{ icon: "menu", onIconButtonClick: this.handleIconButtonClick.bind(this) }]}"
                    open
                ></md-top-app-bar> -->
                <md-navigation-drawer
                    id="navigationDrawer"
                    .list="${this.list}"
                    variant="tree"
                    open
                ></md-navigation-drawer>
                <md-layout-item region="center">
                    <md-outlet></md-outlet>
                </md-layout-item>
            </md-layout>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    handleIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
