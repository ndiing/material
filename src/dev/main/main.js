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
                icon: "layers", // or "category"
                label: "Base",
                items: [
                    { icon: "verified", label: "Badge", routerLink: "/badge" },
                    { icon: "horizontal_rule", label: "Divider", routerLink: "/divider" },
                    { icon: "emoji_emotions", label: "Emoji", routerLink: "/emoji", selected: true },
                    { icon: "insert_emoticon", label: "Icon", routerLink: "/icon" },
                    { icon: "image", label: "Image", routerLink: "/image" },
                    { icon: "view_quilt", label: "Layout", routerLink: "/layout" },
                    // { disabled: true, icon: "crop_landscape", label: "Layout Item", routerLink: "/layout-item" },
                    { icon: "space_bar", label: "Spacer", routerLink: "/spacer" },
                ],
            },
            {
                icon: "radio_button_checked",
                label: "Button",
                items: [
                    { icon: "smart_button", label: "Button", routerLink: "/button" },
                    { icon: "add_circle_outline", label: "Fab", routerLink: "/fab" },
                    { icon: "touch_app", label: "Icon Button", routerLink: "/icon-button" },
                    { icon: "segment", label: "Segmented Button", routerLink: "/segmented-button" },
                ],
            },
            {
                icon: "style",
                label: "Card",
                items: [
                    { icon: "dock", label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { icon: "space_dashboard", label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                    // { disabled: true, icon: "check_box_outline_blank", label: "Box", routerLink: "/box" },
                    { icon: "credit_card", label: "Card", routerLink: "/card" },
                    { icon: "chat_bubble_outline", label: "Dialog", routerLink: "/dialog" },
                    { icon: "filter_none", label: "Scrim", routerLink: "/scrim" },
                    {
                        icon: "article",
                        label: "Sheet",
                        items: [
                            { icon: "description", label: "Standard side sheet", routerLink: "/sheet" },
                            { icon: "dock", label: "Modal side sheet", routerLink: "/sheet2" },
                        ],
                    },
                    { icon: "filter_none", label: "Side Sheet", routerLink: "/side-sheet" },
                    { icon: "campaign", label: "Snackbar", routerLink: "/snackbar" },
                    { icon: "app_registration", label: "Toolbar", routerLink: "/toolbar" },
                    { icon: "tooltip", label: "Tooltip", routerLink: "/tooltip" },
                    { icon: "web_asset", label: "Top App Bar", routerLink: "/top-app-bar" },
                ],
            },
            {
                icon: "construction",
                label: "Cdk",
                items: [
                    { icon: "track_changes", label: "Attribute Observer", routerLink: "/attribute-observer" },
                    { icon: "color_lens", label: "Color", routerLink: "/color" },
                    // { disabled: true, icon: "widgets", label: "Component", routerLink: "/component" },
                    { icon: "functions", label: "Functions", routerLink: "/functions" },
                    { icon: "gesture", label: "Gesture", routerLink: "/gesture" },
                    { icon: "language", label: "Localization", routerLink: "/localization" },
                    { icon: "tv", label: "Media Observer", routerLink: "/media-observer" },
                    { icon: "visibility", label: "Observer", routerLink: "/observer" },
                    { icon: "near_me", label: "Popper", routerLink: "/popper" },
                    { icon: "autorenew", label: "Progress", routerLink: "/progress" },
                    { icon: "waves", label: "Ripple", routerLink: "/ripple" },
                    { icon: "router", label: "Router", routerLink: "/router" },
                    { icon: "store", label: "Store", routerLink: "/store" },
                    // { disabled: true, icon: "web", label: "Template", routerLink: "/template" },
                    { icon: "blur_on", label: "Virtual", routerLink: "/virtual" },
                ],
            },
            {
                icon: "assignment",
                label: "Form",
                items: [
                    { icon: "check_box", label: "Checkbox", routerLink: "/checkbox" },
                    { icon: "palette", label: "Color Field", routerLink: "/color-field" },
                    { icon: "event", label: "Date Field", routerLink: "/date-field" },
                    { icon: "schedule", label: "Datetime Field", routerLink: "/datetime-field" },
                    { icon: "dynamic_form", label: "Form", routerLink: "/form" },
                    { icon: "calendar_today", label: "Month Field", routerLink: "/month-field" },
                    { icon: "pin", label: "Number Field", routerLink: "/number-field" },
                    { icon: "lock", label: "Password Field", routerLink: "/password-field" },
                    { icon: "hourglass_full", label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { icon: "radio_button_checked", label: "Radio Button", routerLink: "/radio-button" },
                    { icon: "search", label: "Search Field", routerLink: "/search-field" },
                    { icon: "arrow_drop_down_circle", label: "Select Field", routerLink: "/select-field" },
                    { icon: "tune", label: "Slider", routerLink: "/slider" },
                    { icon: "toggle_on", label: "Switch", routerLink: "/switch" },
                    { icon: "text_fields", label: "Text Field", routerLink: "/text-field" },
                    { icon: "short_text", label: "Textarea Field", routerLink: "/textarea-field" },
                    { icon: "access_time", label: "Time Field", routerLink: "/time-field" },
                    { icon: "date_range", label: "Week Field", routerLink: "/week-field" },
                ],
            },
            {
                icon: "list",
                label: "List",
                items: [
                    { icon: "tag", label: "Chip", routerLink: "/chip" },
                    { icon: "dynamic_feed", label: "Chips", routerLink: "/chips" },
                    {
                        icon: "view_list",
                        label: "List",
                        items: [
                            { icon: "view_list", label: "List", routerLink: "/list" },
                            { icon: "list_alt", label: "List2", routerLink: "/list2" },
                        ],
                    },
                    // { disabled: true, icon: "list_alt", label: "List Item", routerLink: "/list-item" },
                    { icon: "menu", label: "Menu", routerLink: "/menu" },
                    { icon: "navigation", label: "Navigation Bar", routerLink: "/navigation-bar" },
                    { icon: "menu_open", label: "Navigation Drawer", routerLink: "/navigation-drawer" },
                    { icon: "railway_alert", label: "Navigation Rail", routerLink: "/navigation-rail" },
                    { icon: "tab", label: "Tabs", routerLink: "/tabs" },
                    { icon: "account_tree", label: "Tree", routerLink: "/tree" },
                    // { disabled: true, icon: "account_tree", label: "Tree Item", routerLink: "/tree-item" },
                ],
            },
            {
                icon: "calendar_today",
                label: "Picker",
                items: [
                    { icon: "palette", label: "Color Picker", routerLink: "/color-picker" },
                    { icon: "event", label: "Date Picker", routerLink: "/date-picker" },
                    { icon: "schedule", label: "Datetime Picker", routerLink: "/datetime-picker" },
                    { icon: "emoji_emotions", label: "Emoji Picker", routerLink: "/emoji-picker" },
                    { icon: "calendar_today", label: "Month Picker", routerLink: "/month-picker" },
                    { icon: "access_time", label: "Time Picker", routerLink: "/time-picker" },
                    { icon: "date_range", label: "Week Picker", routerLink: "/week-picker" },
                ],
            },
            {
                icon: "table_chart",
                label: "Table",
                items: [
                    { icon: "table_chart", label: "Data Table", routerLink: "/data-table" },
                    // { disabled: true, icon: "view_column", label: "Data Table Column Cell", routerLink: "/data-table-column-cell" },
                    // { disabled: true, icon: "grid_view", label: "Data Table Item", routerLink: "/data-table-item" },
                    // { disabled: true, icon: "grid_on", label: "Data Table Row Cell", routerLink: "/data-table-row-cell" },
                    { icon: "last_page", label: "Pagination", routerLink: "/pagination" },
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
