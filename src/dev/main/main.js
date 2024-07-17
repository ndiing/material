import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDRouter } from "../../material/router/router.js";
import { toTitleCase } from "../../material/functions/functions.js";
import jsdoc from "../../assets/jsdoc.json";

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
                label: "Foundations",
                icon: "foundation",
                children: [
                    { routerLink: "/attribute-observer", label: "Attribute Observer", icon: "visibility" },
                    { routerLink: "/color", label: "Color", icon: "palette" },
                    { routerLink: "/functions", label: "Functions", icon: "functions" },
                    { routerLink: "/gesture", label: "Gesture", icon: "gesture" },
                    { routerLink: "/localization", label: "Localization", icon: "language" },
                    { routerLink: "/media-observer", label: "Media Observer", icon: "perm_media" },
                    { routerLink: "/observer", label: "Observer", icon: "visibility" },
                    { routerLink: "/popper", label: "Popper", icon: "arrow_drop_down_circle" },
                    { routerLink: "/progress", label: "Progress", icon: "hourglass_empty" },
                    { routerLink: "/ripple", label: "Ripple", icon: "waves" },
                    { routerLink: "/router", label: "Router", icon: "router" },
                    { routerLink: "/store", label: "Store", icon: "store" },
                    { routerLink: "/virtual", label: "Virtual", icon: "videogame_asset" },
                ],
            },
            {
                label: "Others",
                icon: "more_horiz",
                children: [
                    { routerLink: "/component", label: "Component", icon: "widgets" },
                    { routerLink: "/data-table", label: "Data Table", icon: "table_chart" },
                    { routerLink: "/data-table-item", label: "Data Table Item", icon: "view_list" },
                    { routerLink: "/data-table-native-column", label: "Data Table Native Column", icon: "view_column" },
                    { routerLink: "/emoji", label: "Emoji", icon: "emoji_emotions" },
                    { routerLink: "/icon", label: "Icon", icon: "insert_emoticon" },
                    { routerLink: "/image", label: "Image", icon: "image" },
                    { routerLink: "/markdown", label: "Markdown", icon: "code" },
                    { routerLink: "/pagination", label: "Pagination", icon: "last_page" },
                    { routerLink: "/tree", label: "Tree", icon: "account_tree" },
                    { routerLink: "/tree-item", label: "Tree Item", icon: "label" },
                ],
            },
            {
                label: "Actions",
                icon: "build",
                children: [
                    { routerLink: "/button", label: "Button", icon: "radio_button_unchecked" },
                    { routerLink: "/fab", label: "Fab", icon: "add_circle" },
                    { routerLink: "/icon-button", label: "Icon Button", icon: "touch_app" },
                    { routerLink: "/segmented-button", label: "Segmented Button", icon: "view_agenda" },
                ],
            },
            {
                label: "Communication",
                icon: "chat",
                children: [
                    { routerLink: "/badge", label: "Badge", icon: "verified" },
                    { routerLink: "/progress-indicator", label: "Progress Indicator", icon: "autorenew" },
                    { routerLink: "/snackbar", label: "Snackbar", icon: "notifications" },
                    { routerLink: "/tooltip", label: "tooltip", icon: "info" },
                ],
            },
            {
                label: "Containment",
                icon: "folder",
                children: [
                    { routerLink: "/sheet", label: "Sheet", icon: "layers" },
                    { routerLink: "/scrim", label: "Scrim", icon: "filter_drama" },
                    { routerLink: "/bottom-sheet", label: "Bottom Sheet", icon: "vertical_align_bottom" },
                    { routerLink: "/card", label: "Card", icon: "credit_card" },
                    { routerLink: "/dialog", label: "Dialog", icon: "chat_bubble_outline" },
                    { routerLink: "/list-item", label: "List Item", icon: "list_alt" },
                    { routerLink: "/list", label: "List", icon: "list" },
                    { routerLink: "/side-sheet", label: "Side Sheet", icon: "web_asset" },
                ],
            },
            {
                label: "Navigation",
                icon: "navigation",
                children: [
                    { routerLink: "/bottom-app-bar", label: "Bottom App Bar", icon: "space_bar" },
                    { routerLink: "/navigation-bar", label: "Navigation Bar", icon: "menu" },
                    { routerLink: "/navigation-drawer", label: "Navigation Drawer", icon: "menu_open" },
                    { routerLink: "/navigation-rail", label: "Navigation Rail", icon: "view_stream" },
                    { routerLink: "/tabs", label: "Tabs", icon: "tab" },
                    { routerLink: "/top-app-bar", label: "Top App Bar", icon: "space_bar" },
                ],
            },
            {
                label: "Selection",
                icon: "check_box",
                children: [
                    { routerLink: "/checkbox", label: "Checkbox", icon: "check_box" },
                    { routerLink: "/chip", label: "Chip", icon: "label" },
                    { routerLink: "/chips", label: "Chips", icon: "local_offer" },
                    { routerLink: "/date-picker", label: "Date Picker", icon: "event" },
                    { routerLink: "/menu", label: "Menu", icon: "menu" },
                    { routerLink: "/radio-button", label: "Radio Button", icon: "radio_button_checked" },
                    { routerLink: "/slider", label: "Slider", icon: "tune" },
                    { routerLink: "/switch", label: "Switch", icon: "toggle_on" },
                    { routerLink: "/time-picker", label: "Time Picker", icon: "access_time" },
                    { routerLink: "/color-picker", label: "Color Picker", icon: "color_lens" },
                    { routerLink: "/datetime-picker", label: "Datetime Picker", icon: "date_range" },
                    { routerLink: "/emoji-picker", label: "Emoji Picker", icon: "insert_emoticon" },
                    { routerLink: "/month-picker", label: "Month Picker", icon: "event_note" },
                    { routerLink: "/week-picker", label: "Week Picker", icon: "calendar_today" },
                ],
            },
            {
                label: "Text inputs",
                icon: "text_fields",
                children: [
                    { routerLink: "/form", label: "Form", icon: "assignment" },
                    { routerLink: "/text-field", label: "Text Field", icon: "text_fields" },
                    { routerLink: "/color-field", label: "Color Field", icon: "palette" },
                    { routerLink: "/date-field", label: "Date Field", icon: "event" },
                    { routerLink: "/datetime-field", label: "Datetime Field", icon: "date_range" },
                    { routerLink: "/month-field", label: "Month Field", icon: "event_note" },
                    { routerLink: "/number-field", label: "Number Field", icon: "dialpad" },
                    { routerLink: "/password-field", label: "Password Field", icon: "lock" },
                    { routerLink: "/search-field", label: "Search Field", icon: "search" },
                    { routerLink: "/select-field", label: "Select Field", icon: "arrow_drop_down" },
                    { routerLink: "/textarea-field", label: "Textarea Field", icon: "notes" },
                    { routerLink: "/time-field", label: "Time Field", icon: "access_time" },
                    { routerLink: "/week-field", label: "Week Field", icon: "calendar_today" },
                ],
            },
        ];

        // this.list = this.list.map((item) => item.children).flat();

        function select(list, routerLink) {
            list.sort((a, b) => a.label.localeCompare(b.label));
            list.forEach((item) => {
                item.selected = item.routerLink === routerLink;
                if (item.children?.length) {
                    select(item.children, routerLink);
                }
            });
        }

        select(this.list, MDRouter.path);
    }

    get doc() {
        const name = MDRouter.path.slice(1) + ".js";
        return jsdoc[name];
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
                    variant="level"
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
                            <md-markdown .text="${this.doc}"></md-markdown>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener("onRouterCurrentEntryChange", () => {
            this.requestUpdate();
        });
    }

    handleCardIconButtonClick(event) {
        this.navigationDrawer.toggle();
    }

    handleTreeItemSelected(event) {
        if (!this.ready) {
            this.ready = 1;
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
