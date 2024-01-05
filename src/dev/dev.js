import { MDRouter } from "../material/foundation/router";
import MainComponent from "./router/main";
import UsersComponent from "./router/users";
import UserComponent from "./router/user";
// import BlogsComponent from "./router/blogs";
// import BlogComponent from "./router/blog";
import ErrorComponent from "./router/error";
import LoginComponent from "./router/login";

const beforeLoad = (resolve, reject) => {
    if (localStorage.isAuthenticated === "1") resolve();
    else {
        reject();
        MDRouter.navigate("/login");
    }
};

// prettier-ignore
MDRouter.init([
    {path:'',component:MainComponent,children:[
        {path:'users',beforeLoad,component:UsersComponent,children:[
            {path:':_id',component:UserComponent,children:[]},
        ]},
        {path:'blogs',/* component:BlogsComponent, */load:() => import("./router/blogs").then(m=>m.default),children:[
            {path:':_id',/* component:BlogComponent, */load:() => import("./router/blog").then(m=>m.default),children:[]},
        ]},

        {path:"badge",load:() => import("./badge/badge").then(m=>m.default)},
        {path:"bottom-app-bar",load:() => import("./bottom-app-bar/bottom-app-bar").then(m=>m.default)},
        {path:"bottom-sheet",load:() => import("./bottom-sheet/bottom-sheet").then(m=>m.default)},
        {path:"button",load:() => import("./button/button").then(m=>m.default)},
        {path:"card",load:() => import("./card/card").then(m=>m.default)},
        {path:"carousel",load:() => import("./carousel/carousel").then(m=>m.default)},
        {path:"checkbox",load:() => import("./checkbox/checkbox").then(m=>m.default)},
        {path:"chip",load:() => import("./chip/chip").then(m=>m.default)},
        {path:"date-picker",load:() => import("./date-picker/date-picker").then(m=>m.default)},
        {path:"dialog",load:() => import("./dialog/dialog").then(m=>m.default)},
        {path:"divider",load:() => import("./divider/divider").then(m=>m.default)},
        {path:"extended-fab",load:() => import("./extended-fab/extended-fab").then(m=>m.default)},
        {path:"fab",load:() => import("./fab/fab").then(m=>m.default)},
        {path:"icon-button",load:() => import("./icon-button/icon-button").then(m=>m.default)},
        {path:"list",load:() => import("./list/list").then(m=>m.default)},
        {path:"menu",load:() => import("./menu/menu").then(m=>m.default)},
        {path:"navigation-bar",load:() => import("./navigation-bar/navigation-bar").then(m=>m.default)},
        {path:"navigation-drawer",load:() => import("./navigation-drawer/navigation-drawer").then(m=>m.default)},
        {path:"navigation-rail",load:() => import("./navigation-rail/navigation-rail").then(m=>m.default)},
        {path:"progress-indicator",load:() => import("./progress-indicator/progress-indicator").then(m=>m.default)},
        {path:"radio-button",load:() => import("./radio-button/radio-button").then(m=>m.default)},
        {path:"search",load:() => import("./search/search").then(m=>m.default)},
        {path:"segmented-button",load:() => import("./segmented-button/segmented-button").then(m=>m.default)},
        {path:"side-sheet",load:() => import("./side-sheet/side-sheet").then(m=>m.default)},
        {path:"slider",load:() => import("./slider/slider").then(m=>m.default)},
        {path:"snackbar",load:() => import("./snackbar/snackbar").then(m=>m.default)},
        {path:"switch",load:() => import("./switch/switch").then(m=>m.default)},
        {path:"tab",load:() => import("./tab/tab").then(m=>m.default)},
        {path:"text-field",load:() => import("./text-field/text-field").then(m=>m.default)},
        {path:"time-picker",load:() => import("./time-picker/time-picker").then(m=>m.default)},
        {path:"tooltip",load:() => import("./tooltip/tooltip").then(m=>m.default)},
        {path:"top-app-bar",load:() => import("./top-app-bar/top-app-bar").then(m=>m.default)},
    ]},
    {path:'/login',component:LoginComponent,children:[]},
    {path:'*',component:ErrorComponent,children:[]},
])
