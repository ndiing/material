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
        this.items = [
            {
                label: "Base",
                items: [
                    { label: "Badge", routerLink: "/badge" },
                    { label: "Divider", routerLink: "/divider" },
                    { label: "Emoji", routerLink: "/emoji", selected: true },
                    { label: "Icon", routerLink: "/icon" },
                    { label: "Image", routerLink: "/image" },
                    { label: "Layout", routerLink: "/layout" },
                    // { label: "Layout Item", routerLink: "/layout-item" },
                    { label: "Markdown", routerLink: "/markdown" },
                    { label: "Spacer", routerLink: "/spacer" },
                ],
            },
            {
                label: "Button",
                items: [
                    { label: "Button", routerLink: "/button" },
                    { label: "Fab", routerLink: "/fab" },
                    { label: "Icon Button", routerLink: "/icon-button" },
                    { label: "Segmented Button", routerLink: "/segmented-button" },
                ],
            },
            {
                label: "Card",
                items: [
                    { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    { label: "Box", routerLink: "/box" },
                    { label: "Card", routerLink: "/card" },
                    { label: "Dialog", routerLink: "/dialog" },
                    { label: "Scrim", routerLink: "/scrim" },
                    { label: "Sheet", routerLink: "/sheet" },
                    { label: "Side Sheet", routerLink: "/side-sheet" },
                    { label: "Snackbar", routerLink: "/snackbar" },
                    { label: "Toolbar", routerLink: "/toolbar" },
                    { label: "Tooltip", routerLink: "/tooltip" },
                    { label: "Top App Bar", routerLink: "/top-app-bar" },
                ],
            },
            {
                label: "Cdk",
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
            {
                label: "Form",
                items: [
                    { label: "Checkbox", routerLink: "/checkbox" },
                    { label: "Color Field", routerLink: "/color-field" },
                    { label: "Date Field", routerLink: "/date-field" },
                    { label: "Datetime Field", routerLink: "/datetime-field" },
                    { label: "Form", routerLink: "/form" },
                    { label: "Month Field", routerLink: "/month-field" },
                    { label: "Number Field", routerLink: "/number-field" },
                    { label: "Password Field", routerLink: "/password-field" },
                    { label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { label: "Radio Button", routerLink: "/radio-button" },
                    { label: "Search Field", routerLink: "/search-field" },
                    { label: "Select Field", routerLink: "/select-field" },
                    { label: "Slider", routerLink: "/slider" },
                    { label: "Switch", routerLink: "/switch" },
                    { label: "Text Field", routerLink: "/text-field" },
                    { label: "Textarea Field", routerLink: "/textarea-field" },
                    { label: "Time Field", routerLink: "/time-field" },
                    { label: "Week Field", routerLink: "/week-field" },
                ],
            },
            {
                label: "List",
                items: [
                    { label: "Chip", routerLink: "/chip" },
                    { label: "Chips", routerLink: "/chips" },
                    {
                        label: "List",
                        items: [
                            { label: "List", routerLink: "/list" },
                            { label: "List2", routerLink: "/list2" },
                        ],
                    },
                    // { label: "List Item", routerLink: "/list-item" },
                    { label: "Menu", routerLink: "/menu" },
                    { label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { label: "Navigation Rail", routerLink: "/navigation-rail" },
                    { label: "Tabs", routerLink: "/tabs" },
                    { label: "Tree", routerLink: "/tree" },
                    // { label: "Tree Item", routerLink: "/tree-item" },
                ],
            },
            {
                label: "Picker",
                items: [
                    { label: "Color Picker", routerLink: "/color-picker" },
                    { label: "Date Picker", routerLink: "/date-picker" },
                    { label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { label: "Emoji Picker", routerLink: "/emoji-picker" },
                    { label: "Month Picker", routerLink: "/month-picker" },
                    { label: "Time Picker", routerLink: "/time-picker" },
                    { label: "Week Picker", routerLink: "/week-picker" },
                ],
            },
            {
                label: "Table",
                items: [
                    { label: "Data Table", routerLink: "/data-table" },
                    // { label: "Data Table Column Cell", routerLink: "/data-table-column-cell" },
                    // { label: "Data Table Item", routerLink: "/data-table-item" },
                    // { label: "Data Table Row Cell", routerLink: "/data-table-row-cell" },
                    { label: "Pagination", routerLink: "/pagination" },
                ],
            },
        ];

        this.select(this.items, MDRouter.path);
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
                <md-navigation-drawer id="navigationDrawer" .items="${this.items}" variant="tree" open></md-navigation-drawer>
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
