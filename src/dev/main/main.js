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
                items: [
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/observer", headline: "Observer" },
                            { leadingIcon:'deployed_code',routerLink: "/media-observer", headline: "Media Observer" },
                            { leadingIcon:'deployed_code',routerLink: "/attribute-observer", headline: "Attribute Observer" },
                            { leadingIcon:'deployed_code',routerLink: "/store", headline: "Store" },
                            { leadingIcon:'deployed_code',routerLink: "/router", headline: "Router" },
                            { leadingIcon:'deployed_code',routerLink: "/localization", headline: "Localization" },
                            { leadingIcon:'deployed_code',routerLink: "/color", headline: "Color" },
                            { leadingIcon:'deployed_code',routerLink: "/progress", headline: "Progress" },
                            { leadingIcon:'deployed_code',routerLink: "/functions", headline: "Functions" },
                            { leadingIcon:'deployed_code',routerLink: "/ripple", headline: "Ripple" },
                            { leadingIcon:'deployed_code',routerLink: "/popper", headline: "Popper" },
                            { leadingIcon:'deployed_code',routerLink: "/gesture", headline: "Gesture" },
                            { leadingIcon:'deployed_code',routerLink: "/virtual", headline: "Virtual" },
                            { leadingIcon:'deployed_code',routerLink: "/component", headline: "Component" },
                            { leadingIcon:'deployed_code',routerLink: "/template", headline: "Template" },
                        ],
                        headline: "Cdk",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/layout-item", headline: "Layout Item" },
                            { leadingIcon:'deployed_code',routerLink: "/layout", headline: "Layout" },
                            { leadingIcon:'deployed_code',routerLink: "/divider", headline: "Divider" },
                            { leadingIcon:'deployed_code',routerLink: "/spacer", headline: "Spacer" },
                            { leadingIcon:'deployed_code',routerLink: "/icon", headline: "Icon" },
                            { leadingIcon:'deployed_code',routerLink: "/emoji", headline: "Emoji" },
                            { leadingIcon:'deployed_code',routerLink: "/image", headline: "Image" },
                            { leadingIcon:'deployed_code',routerLink: "/badge", headline: "Badge" },
                        ],
                        headline: "Base",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/button", headline: "Button" },
                            { leadingIcon:'deployed_code',routerLink: "/icon-button", headline: "Icon Button" },
                            { leadingIcon:'deployed_code',routerLink: "/segmented-button", headline: "Segmented Button" },
                            { leadingIcon:'deployed_code',routerLink: "/fab", headline: "Fab" },
                        ],
                        headline: "Button",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/form", headline: "Form" },
                            { leadingIcon:'deployed_code',routerLink: "/checkbox", headline: "Checkbox" },
                            { leadingIcon:'deployed_code',routerLink: "/radio-button", headline: "Radio Button" },
                            { leadingIcon:'deployed_code',routerLink: "/switch", headline: "Switch" },
                            { leadingIcon:'deployed_code',routerLink: "/slider", headline: "Slider" },
                            { leadingIcon:'deployed_code',routerLink: "/text-field", headline: "Text Field" },
                            { leadingIcon:'deployed_code',routerLink: "/datetime-field", headline: "Datetime Field" },
                            { leadingIcon:'deployed_code',routerLink: "/date-field", headline: "Date Field" },
                            { leadingIcon:'deployed_code',routerLink: "/month-field", headline: "Month Field" },
                            { leadingIcon:'deployed_code',routerLink: "/week-field", headline: "Week Field" },
                            { leadingIcon:'deployed_code',routerLink: "/time-field", headline: "Time Field" },
                            { leadingIcon:'deployed_code',routerLink: "/color-field", headline: "Color Field" },
                            { leadingIcon:'deployed_code',routerLink: "/number-field", headline: "Number Field" },
                            { leadingIcon:'deployed_code',routerLink: "/search-field", headline: "Search Field" },
                            { leadingIcon:'deployed_code',routerLink: "/password-field", headline: "Password Field" },
                            { leadingIcon:'deployed_code',routerLink: "/textarea-field", headline: "Textarea Field" },
                            { leadingIcon:'deployed_code',routerLink: "/select-field", headline: "Select Field" },
                            { leadingIcon:'deployed_code',routerLink: "/progress-indicator", headline: "Progress Indicator" },
                        ],
                        headline: "Form",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/block", headline: "Block" },
                            { leadingIcon:'deployed_code',routerLink: "/pane", headline: "Pane" },
                            { leadingIcon:'deployed_code',routerLink: "/toolbar", headline: "Toolbar" },
                            { leadingIcon:'deployed_code',routerLink: "/card", headline: "Card" },
                            { leadingIcon:'deployed_code',routerLink: "/scrim", headline: "Scrim" },
                            { leadingIcon:'deployed_code',routerLink: "/dialog", headline: "Dialog" },
                            { leadingIcon:'deployed_code',routerLink: "/snackbar", headline: "Snackbar" },
                            { leadingIcon:'deployed_code',routerLink: "/tooltip", headline: "Tooltip" },
                            { leadingIcon:'deployed_code',routerLink: "/sheet", headline: "Sheet" },
                            { leadingIcon:'deployed_code',routerLink: "/side-sheet", headline: "Side Sheet" },
                            { leadingIcon:'deployed_code',routerLink: "/bottom-sheet", headline: "Bottom Sheet" },
                            { leadingIcon:'deployed_code',routerLink: "/top-app-bar", headline: "Top App Bar" },
                            { leadingIcon:'deployed_code',routerLink: "/bottom-app-bar", headline: "Bottom App Bar" },
                        ],
                        headline: "Card",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/datetime-picker", headline: "Datetime Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/date-picker", headline: "Date Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/month-picker", headline: "Month Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/time-picker", headline: "Time Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/week-picker", headline: "Week Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/color-picker", headline: "Color Picker" },
                            { leadingIcon:'deployed_code',routerLink: "/emoji-picker", headline: "Emoji Picker" },
                        ],
                        headline: "Picker",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/chip", headline: "Chip" },
                            { leadingIcon:'deployed_code',routerLink: "/chips", headline: "Chips" },
                            { leadingIcon:'deployed_code',routerLink: "/list-item", headline: "List Item" },
                            { leadingIcon:'deployed_code',routerLink: "/list", headline: "List" },
                            { leadingIcon:'deployed_code',routerLink: "/tree", headline: "Tree" },
                            { leadingIcon:'deployed_code',routerLink: "/tabs", headline: "Tabs" },
                            { leadingIcon:'deployed_code',routerLink: "/menu", headline: "Menu" },
                            { leadingIcon:'deployed_code',routerLink: "/navigation-bar", headline: "Navigation Bar" },
                            { leadingIcon:'deployed_code',routerLink: "/navigation-drawer", headline: "Navigation Drawer" },
                            { leadingIcon:'deployed_code',routerLink: "/navigation-rail", headline: "Navigation Rail" },
                        ],
                        headline: "List",
                    },
                    {
                        items: [
                            { leadingIcon:'deployed_code',routerLink: "/pagination", headline: "Pagination" },
                            { leadingIcon:'deployed_code',routerLink: "/data-table-item", headline: "Data Table Item" },
                            { leadingIcon:'deployed_code',routerLink: "/data-table-column-cell", headline: "Data Table Column Cell" },
                            { leadingIcon:'deployed_code',routerLink: "/data-table-row-cell", headline: "Data Table Row Cell" },
                            { leadingIcon:'deployed_code',routerLink: "/data-table", headline: "Data Table" },
                        ],
                        headline: "Table",
                    },
                ],
                leadingIcon:'deployed_code',routerLink: "/",
                headline: "Main",
            },
        ][0].items;

        this.items = this.flat(this.items);

        this.select(this.items, MDRouter.path);
    }

    flat(items) {
        return items.reduce((acc, curr) => {
            if (!curr.routerLink) {
                curr.component = "section";
                curr.section = curr.headline;
                curr.headline = undefined;
            }
            acc.push(curr);
            if (curr.items) {
                acc.push(...this.flat(curr.items));
                curr.items = undefined;
            }
            return acc;
        }, []);
    }

    select(list, routerLink) {
        // list.sort((a, b) => a.headline.localeCompare(b.headline));
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
                <!-- <md-top-app-bar id="topAppBar" .leadingActions="${[{ icon: "menu", onIconButtonClick: this.handleIconButtonClick.bind(this) }]}" open></md-top-app-bar> -->
                <md-navigation-drawer id="navigationDrawer" .items="${this.items}" variant="tree" open @onListItemSelected="${this.handleListItemSelected}"></md-navigation-drawer>
                <md-layout-item region="center"><md-outlet></md-outlet></md-layout-item>
            </md-layout>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("onSchemeChange", console.log);
        window.addEventListener("onBreakpointChange", console.log);
    }

    handleIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleListItemSelected(event) {
        event.detail.currentTarget.scrollIntoView({
            block:'center',
            inline:'center',
            behavior:'smooth',
        })
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
