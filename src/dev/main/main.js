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
                leadingIcon: "layers", // or "category"
                headline: "Base",
                items: [
                    { leadingIcon: "verified", headline: "Badge", routerLink: "/badge" },
                    { leadingIcon: "horizontal_rule", headline: "Divider", routerLink: "/divider" },
                    { leadingIcon: "emoji_emotions", headline: "Emoji", routerLink: "/emoji", selected: true },
                    { leadingIcon: "insert_emoticon", headline: "Icon", routerLink: "/icon" },
                    { leadingIcon: "image", headline: "Image", routerLink: "/image" },
                    { leadingIcon: "view_quilt", headline: "Layout", routerLink: "/layout" },
                    // { disabled: true, leadingIcon: "crop_landscape", headline: "Layout Item", routerLink: "/layout-item" },
                    { leadingIcon: "space_bar", headline: "Spacer", routerLink: "/spacer" },
                ],
            },
            {
                leadingIcon: "radio_button_checked",
                headline: "Button",
                items: [
                    { leadingIcon: "smart_button", headline: "Button", routerLink: "/button" },
                    { leadingIcon: "add_circle_outline", headline: "Fab", routerLink: "/fab" },
                    { leadingIcon: "touch_app", headline: "Icon Button", routerLink: "/icon-button" },
                    { leadingIcon: "segment", headline: "Segmented Button", routerLink: "/segmented-button" },
                ],
            },
            {
                leadingIcon: "style",
                headline: "Card",
                items: [
                    { leadingIcon: "dock", headline: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { leadingIcon: "space_dashboard", headline: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    // { disabled: true, leadingIcon: "check_box_outline_blank", headline: "Box", routerLink: "/box" },
                    { leadingIcon: "credit_card", headline: "Card", routerLink: "/card" },
                    { leadingIcon: "chat_bubble_outline", headline: "Dialog", routerLink: "/dialog" },
                    { leadingIcon: "filter_none", headline: "Scrim", routerLink: "/scrim" },
                    {
                        leadingIcon: "article",
                        headline: "Sheet",
                        items: [
                            { leadingIcon: "description", headline: "Standard side sheet", routerLink: "/sheet" },
                            { leadingIcon: "dock", headline: "Modal side sheet", routerLink: "/sheet2" },
                        ],
                    },
                    { leadingIcon: "filter_none", headline: "Side Sheet", routerLink: "/side-sheet" },
                    { leadingIcon: "campaign", headline: "Snackbar", routerLink: "/snackbar" },
                    { leadingIcon: "app_registration", headline: "Toolbar", routerLink: "/toolbar" },
                    { leadingIcon: "tooltip", headline: "Tooltip", routerLink: "/tooltip" },
                    { leadingIcon: "web_asset", headline: "Top App Bar", routerLink: "/top-app-bar" },
                ],
            },
            {
                leadingIcon: "construction",
                headline: "CDK",
                items: [
                    { leadingIcon: "track_changes", headline: "Attribute Observer", routerLink: "/attribute-observer" },
                    { leadingIcon: "color_lens", headline: "Color", routerLink: "/color" },
                    // { disabled: true, leadingIcon: "widgets", headline: "Component", routerLink: "/component" },
                    { leadingIcon: "functions", headline: "Functions", routerLink: "/functions" },
                    { leadingIcon: "gesture", headline: "Gesture", routerLink: "/gesture" },
                    { leadingIcon: "language", headline: "Localization", routerLink: "/localization" },
                    { leadingIcon: "tv", headline: "Media Observer", routerLink: "/media-observer" },
                    { leadingIcon: "visibility", headline: "Observer", routerLink: "/observer" },
                    { leadingIcon: "near_me", headline: "Popper", routerLink: "/popper" },
                    { leadingIcon: "autorenew", headline: "Progress", routerLink: "/progress" },
                    { leadingIcon: "waves", headline: "Ripple", routerLink: "/ripple" },
                    { leadingIcon: "router", headline: "Router", routerLink: "/router" },
                    { leadingIcon: "store", headline: "Store", routerLink: "/store" },
                    // { disabled: true, leadingIcon: "web", headline: "Template", routerLink: "/template" },
                    { leadingIcon: "blur_on", headline: "Virtual", routerLink: "/virtual" },
                ],
            },
            {
                leadingIcon: "assignment",
                headline: "Form",
                items: [
                    { leadingIcon: "check_box", headline: "Checkbox", routerLink: "/checkbox" },
                    { leadingIcon: "palette", headline: "Color Field", routerLink: "/color-field" },
                    { leadingIcon: "event", headline: "Date Field", routerLink: "/date-field" },
                    { leadingIcon: "schedule", headline: "Datetime Field", routerLink: "/datetime-field" },
                    { leadingIcon: "dynamic_form", headline: "Form", routerLink: "/form" },
                    { leadingIcon: "calendar_today", headline: "Month Field", routerLink: "/month-field" },
                    { leadingIcon: "pin", headline: "Number Field", routerLink: "/number-field" },
                    { leadingIcon: "lock", headline: "Password Field", routerLink: "/password-field" },
                    { leadingIcon: "hourglass_full", headline: "Progress Indicator", routerLink: "/progress-indicator" },
                    { leadingIcon: "radio_button_checked", headline: "Radio Button", routerLink: "/radio-button" },
                    { leadingIcon: "search", headline: "Search Field", routerLink: "/search-field" },
                    { leadingIcon: "arrow_drop_down_circle", headline: "Select Field", routerLink: "/select-field" },
                    { leadingIcon: "tune", headline: "Slider", routerLink: "/slider" },
                    { leadingIcon: "toggle_on", headline: "Switch", routerLink: "/switch" },
                    { leadingIcon: "text_fields", headline: "Text Field", routerLink: "/text-field" },
                    { leadingIcon: "short_text", headline: "Textarea Field", routerLink: "/textarea-field" },
                    { leadingIcon: "access_time", headline: "Time Field", routerLink: "/time-field" },
                    { leadingIcon: "date_range", headline: "Week Field", routerLink: "/week-field" },
                ],
            },
            {
                leadingIcon: "list",
                headline: "List",
                items: [
                    { leadingIcon: "tag", headline: "Chip", routerLink: "/chip" },
                    { leadingIcon: "dynamic_feed", headline: "Chips", routerLink: "/chips" },
                    {
                        leadingIcon: "view_list",
                        headline: "List",
                        items: [
                            { leadingIcon: "view_list", headline: "List", routerLink: "/list" },
                            { leadingIcon: "list_alt", headline: "List2", routerLink: "/list2" },
                        ],
                    },
                    // { disabled: true, leadingIcon: "list_alt", headline: "List Item", routerLink: "/list-item" },
                    { leadingIcon: "menu", headline: "Menu", routerLink: "/menu" },
                    { leadingIcon: "navigation", headline: "Navigation Bar", routerLink: "/navigation-bar" },
                    { leadingIcon: "menu_open", headline: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { leadingIcon: "railway_alert", headline: "Navigation Rail", routerLink: "/navigation-rail" },
                    { leadingIcon: "tab", headline: "Tabs", routerLink: "/tabs" },
                    { leadingIcon: "account_tree", headline: "Tree", routerLink: "/tree" },
                    // { disabled: true, leadingIcon: "account_tree", headline: "Tree Item", routerLink: "/tree-item" },
                ],
            },
            {
                leadingIcon: "calendar_today",
                headline: "Picker",
                items: [
                    { leadingIcon: "palette", headline: "Color Picker", routerLink: "/color-picker" },
                    { leadingIcon: "event", headline: "Date Picker", routerLink: "/date-picker" },
                    { leadingIcon: "schedule", headline: "Datetime Picker", routerLink: "/datetime-picker" },
                    { leadingIcon: "emoji_emotions", headline: "Emoji Picker", routerLink: "/emoji-picker" },
                    { leadingIcon: "calendar_today", headline: "Month Picker", routerLink: "/month-picker" },
                    { leadingIcon: "access_time", headline: "Time Picker", routerLink: "/time-picker" },
                    { leadingIcon: "date_range", headline: "Week Picker", routerLink: "/week-picker" },
                ],
            },
            {
                leadingIcon: "table_chart",
                headline: "Table",
                items: [
                    { leadingIcon: "table_chart", headline: "Data Table", routerLink: "/data-table" },
                    // { disabled: true, leadingIcon: "view_column", headline: "Data Table Column Cell", routerLink: "/data-table-column-cell" },
                    // { disabled: true, leadingIcon: "grid_view", headline: "Data Table Item", routerLink: "/data-table-item" },
                    // { disabled: true, leadingIcon: "grid_on", headline: "Data Table Row Cell", routerLink: "/data-table-row-cell" },
                    { leadingIcon: "last_page", headline: "Pagination", routerLink: "/pagination" },
                ],
            },
        ];

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
                <md-navigation-drawer id="navigationDrawer" .items="${this.items}" variant="tree" open></md-navigation-drawer>
                <md-layout-item region="center"><md-outlet></md-outlet></md-layout-item>
            </md-layout>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('onSchemeChange',console.log)
        window.addEventListener('onBreakpointChange',console.log)
    }

    handleIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }
}

customElements.define("dev-main", DevMainComponent);

export default document.createElement("dev-main");
