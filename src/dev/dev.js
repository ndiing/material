import DrawerComponent from "./drawer/drawer.js";
import DialogComponent from "./dialog/dialog.js";
// import LayoutComponent from "./layout/layout.js";
// import TooltipComponent from "./tooltip/tooltip.js";
// import BadgeComponent from "./badge/badge.js";
// import NavigationBarComponent from "./navigation-bar/navigation-bar.js";
// import NavigationDrawerComponent from "./navigation-drawer/navigation-drawer.js";
// import NavigationRailComponent from "./navigation-rail/navigation-rail.js";
// import PanelComponent from "./panel/panel.js";
// import ListComponent from "./list/list.js";
// import SwitchComponent from "./switch/switch.js";
// import RadioButtonComponent from "./radio-button/radio-button.js";
// import CheckboxComponent from "./checkbox/checkbox.js";
// import ChipSetComponent from "./chip-set/chip-set.js";
// import ChipComponent from "./chip/chip.js";
// import ImageComponent from "./image/image.js";
// import EmojiComponent from "./emoji/emoji.js";
// import IconComponent from "./icon/icon.js";
// import SegmentedButtonComponent from "./segmented-button/segmented-button.js";
// import IconButtonComponent from "./icon-button/icon-button.js";
// import FabComponent from "./fab/fab.js";
// import ButtonComponent from "./button/button.js";
import ErrorComponent from "./error/error.js";
import LoginComponent from "./login/login.js";
// import UsersComponent from "./users/users.js";
// import UserComponent from "./user/user.js";
// import BlogsComponent from "./blogs/blogs.js";
// import BlogComponent from "./blog/blog.js";
import MainComponent from "./main/main.js";
// Usage example
import { MDRouter } from "../material/router/router";
// prettier-ignore
MDRouter.register([
    {path:'',component:MainComponent,children:[
        {path:'users',load:() => import("./users/users.js").then(m=>m.default),children:[
            {path:':id',load:() => import("./user/user.js").then(m=>m.default),children:[]},
        ]},
        {path:'blogs',load:() => import("./blogs/blogs.js").then(m=>m.default),children:[
            {path:':id',load:() => import("./blog/blog.js").then(m=>m.default),outlet:'blog',children:[]},
        ]},
        {path:'icon',load:() => import("./icon/icon.js").then(m=>m.default),children:[]},
        {path:'emoji',load:() => import("./emoji/emoji.js").then(m=>m.default),children:[]},
        {path:'image',load:() => import("./image/image.js").then(m=>m.default),children:[]},
        {path:'button',load:() => import("./button/button.js").then(m=>m.default),children:[]},
        {path:'fab',load:() => import("./fab/fab.js").then(m=>m.default),children:[]},
        {path:'icon-button',load:() => import("./icon-button/icon-button.js").then(m=>m.default),children:[]},
        {path:'segmented-button',load:() => import("./segmented-button/segmented-button.js").then(m=>m.default),children:[]},
        {path:'chip',load:() => import("./chip/chip.js").then(m=>m.default),children:[]},
        {path:'chip-set',load:() => import("./chip-set/chip-set.js").then(m=>m.default),children:[]},
        {path:'checkbox',load:() => import("./checkbox/checkbox.js").then(m=>m.default),children:[]},
        {path:'radio-button',load:() => import("./radio-button/radio-button.js").then(m=>m.default),children:[]},
        {path:'switch',load:() => import("./switch/switch.js").then(m=>m.default),children:[]},
        {path:'badge',load:() => import("./badge/badge.js").then(m=>m.default),children:[]},
        {path:'list',load:() => import("./list/list.js").then(m=>m.default),children:[]},
        {path:'panel',load:() => import("./panel/panel.js").then(m=>m.default),children:[]},
        {path:'dialog',load:() => import("./dialog/dialog.js").then(m=>m.default),children:[]},
        {path:'drawer',load:() => import("./drawer/drawer.js").then(m=>m.default),children:[]},
        {path:'navigation-bar',load:() => import("./navigation-bar/navigation-bar.js").then(m=>m.default),children:[]},
        {path:'navigation-drawer',load:() => import("./navigation-drawer/navigation-drawer.js").then(m=>m.default),children:[]},
        {path:'navigation-rail',load:() => import("./navigation-rail/navigation-rail.js").then(m=>m.default),children:[]},
        {path:'tooltip',load:() => import("./tooltip/tooltip.js").then(m=>m.default),children:[]},
    ]},
    {path:'layout',load:() => import("./layout/layout.js").then(m=>m.default),children:[]},
    {path:'login',component:LoginComponent,children:[]},
    {path:'*',component:ErrorComponent,children:[]},
])