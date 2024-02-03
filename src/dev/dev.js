import SheetComponent from "./sheet/sheet.js";
import ImageComponent from "./image/image.js";
import EmojiComponent from "./emoji/emoji.js";
import IconComponent from "./icon/icon.js";
import BottomAppBarComponent from "./bottom-app-bar/bottom-app-bar.js";
import TopAppBarComponent from "./top-app-bar/top-app-bar.js";
import BadgeComponent from "./badge/badge.js";
import ButtonComponent from "./button/button.js";
import FabComponent from "./fab/fab.js";
import IconButtonComponent from "./icon-button/icon-button.js";
import SegmentedButtonComponent from "./segmented-button/segmented-button.js";
import CardComponent from "./card/card.js";
import CarouselComponent from "./carousel/carousel.js";
import CheckboxComponent from "./checkbox/checkbox.js";
import ChipComponent from "./chip/chip.js";
import DatePickerComponent from "./date-picker/date-picker.js";
import DialogComponent from "./dialog/dialog.js";
import DividerComponent from "./divider/divider.js";
import ListComponent from "./list/list.js";
import MenuComponent from "./menu/menu.js";
import NavigationBarComponent from "./navigation-bar/navigation-bar.js";
import NavigationDrawerComponent from "./navigation-drawer/navigation-drawer.js";
import NavigationRailComponent from "./navigation-rail/navigation-rail.js";
import ProgressIndicatorComponent from "./progress-indicator/progress-indicator.js";
import RadioButtonComponent from "./radio-button/radio-button.js";
import SearchComponent from "./search/search.js";
import BottomSheetComponent from "./bottom-sheet/bottom-sheet.js";
import SideSheetComponent from "./side-sheet/side-sheet.js";
import SliderComponent from "./slider/slider.js";
import SnackbarComponent from "./snackbar/snackbar.js";
import SwitchComponent from "./switch/switch.js";
import TabComponent from "./tab/tab.js";
import TextFieldComponent from "./text-field/text-field.js";
import TimePickerComponent from "./time-picker/time-picker.js";
import ErrorComponent from "./error/error.js";
import LoginComponent from "./login/login.js";
import MainComponent from "./main/main.js";
import TooltipComponent from "./tooltip/tooltip.js";
// import UsersComponent from "./users/users.js";
// import UserComponent from "./user/user.js";
// import BlogsComponent from "./blogs/blogs.js";
// import BlogComponent from "./blog/blog.js";
// Usage example
import { MDRouter } from "../material/router/router";
// prettier-ignore
MDRouter.register([
    {
        path: '', component: MainComponent, children: [
            {
                path: 'users', load: () => import("./users/users.js").then(m => m.default), children: [
                    { path: ':id', load: () => import("./user/user.js").then(m => m.default), children: [] },
                ]
            },
            {
                path: 'blogs', load: () => import("./blogs/blogs.js").then(m => m.default), children: [
                    { path: ':id', load: () => import("./blog/blog.js").then(m => m.default), outlet: 'blog', children: [] },
                ]
            },
            { path: 'image', component: ImageComponent },
            { path: 'emoji', component: EmojiComponent },
            { path: 'icon', component: IconComponent },
            { path: 'tooltip', component: TooltipComponent },
            { path: 'time-picker', component: TimePickerComponent },
            { path: 'text-field', component: TextFieldComponent },
            { path: 'tab', component: TabComponent },
            { path: 'switch', component: SwitchComponent },
            { path: 'snackbar', component: SnackbarComponent },
            { path: 'slider', component: SliderComponent },
            { path: 'sheet', component: SheetComponent },
            { path: 'side-sheet', component: SideSheetComponent },
            { path: 'bottom-sheet', component: BottomSheetComponent },
            { path: 'search', component: SearchComponent },
            { path: 'radio-button', component: RadioButtonComponent },
            { path: 'progress-indicator', component: ProgressIndicatorComponent },
            { path: 'navigation-rail', component: NavigationRailComponent },
            { path: 'navigation-drawer', component: NavigationDrawerComponent },
            { path: 'navigation-bar', component: NavigationBarComponent },
            { path: 'menu', component: MenuComponent },
            { path: 'list', component: ListComponent },
            { path: 'divider', component: DividerComponent },
            { path: 'dialog', component: DialogComponent },
            { path: 'date-picker', component: DatePickerComponent },
            { path: 'chip', component: ChipComponent },
            { path: 'checkbox', component: CheckboxComponent },
            { path: 'carousel', component: CarouselComponent },
            { path: 'card', component: CardComponent },
            { path: 'segmented-button', component: SegmentedButtonComponent },
            { path: 'icon-button', component: IconButtonComponent },
            { path: 'fab', component: FabComponent },
            { path: 'button', component: ButtonComponent },
            { path: 'badge', component: BadgeComponent },
            { path: 'top-app-bar', component: TopAppBarComponent },
            { path: 'bottom-app-bar', component: BottomAppBarComponent },
        ].sort((a, b) => new Intl.Collator(undefined,{sensitivity:'base'}).compare(a.path,b.path))
    },
    { path: 'login', component: LoginComponent, children: [] },
    { path: '*', component: ErrorComponent, children: [] },
])