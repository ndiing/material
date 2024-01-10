// Usage example

import { MDRouter } from "../material/foundation/router";
import MainComponent from "./router/main";
import LoginComponent from "./router/login";
import ErrorComponent from "./router/error";

const beforeLoad = (resolve, reject) => {
    if (window.localStorage.access_token) resolve();
    else {
        reject();
        MDRouter.navigate("/login");
    }
};

// prettier-ignore
MDRouter.init([
    {path:'',component:MainComponent,children:[
        {path:'users',beforeLoad,load:() => import('./router/users.js').then(m=>m.default),children:[
            {path:':_id',load:() => import('./router/user.js').then(m=>m.default),children:[]},
        ]},
        {path:'blogs',load:() => import('./router/blogs.js').then(m=>m.default),children:[
            {path:':_id',load:() => import('./router/blog.js').then(m=>m.default),children:[]},
        ]},
        {path:'example',load:() => import("./example/example.js").then(m=>m.default),children:[]},
        {path:"layout",load:() => import("./layout/layout.js").then(m=>m.default)},
        {path:"ripple",load:() => import("./ripple/ripple.js").then(m=>m.default)},
        {path:"store",load:() => import("./store/store.js").then(m=>m.default)},
        {path:"scroll",load:() => import("./scroll/scroll.js").then(m=>m.default)},
        {path:"popover",load:() => import("./popover/popover.js").then(m=>m.default)},
        {path:"moveable",load:() => import("./moveable/moveable.js").then(m=>m.default)},
        {path:"color",load:() => import("./color/color.js").then(m=>m.default)},
        {path:"elevation",load:() => import("./elevation/elevation.js").then(m=>m.default)},
        {path:"icon",load:() => import("./icon/icon.js").then(m=>m.default)},
        {path:"motion",load:() => import("./motion/motion.js").then(m=>m.default)},
        {path:"shape",load:() => import("./shape/shape.js").then(m=>m.default)},
        {path:"typography",load:() => import("./typography/typography.js").then(m=>m.default)},
        {path:"bottom-app-bar",load:() => import("./bottom-app-bar/bottom-app-bar.js").then(m=>m.default)},
        {path:"top-app-bar",load:() => import("./top-app-bar/top-app-bar.js").then(m=>m.default)},
        {path:"badge",load:() => import("./badge/badge.js").then(m=>m.default)},
        {path:"button",load:() => import("./button/button.js").then(m=>m.default)},
        {path:"fab",load:() => import("./fab/fab.js").then(m=>m.default)},
        {path:"icon-button",load:() => import("./icon-button/icon-button.js").then(m=>m.default)},
        {path:"segmented-button",load:() => import("./segmented-button/segmented-button.js").then(m=>m.default)},
        {path:"card",load:() => import("./card/card.js").then(m=>m.default)},
        {path:"carousel",load:() => import("./carousel/carousel.js").then(m=>m.default)},
        {path:"checkbox",load:() => import("./checkbox/checkbox.js").then(m=>m.default)},
        {path:"chip",load:() => import("./chip/chip.js").then(m=>m.default)},
        {path:"date-picker",load:() => import("./date-picker/date-picker.js").then(m=>m.default)},
        {path:"dialog",load:() => import("./dialog/dialog.js").then(m=>m.default)},
        {path:"divider",load:() => import("./divider/divider.js").then(m=>m.default)},
        {path:"list",load:() => import("./list/list.js").then(m=>m.default)},
        {path:"menu",load:() => import("./menu/menu.js").then(m=>m.default)},
        {path:"navigation-bar",load:() => import("./navigation-bar/navigation-bar.js").then(m=>m.default)},
        {path:"navigation-drawer",load:() => import("./navigation-drawer/navigation-drawer.js").then(m=>m.default)},
        {path:"navigation-rail",load:() => import("./navigation-rail/navigation-rail.js").then(m=>m.default)},
        {path:"progress-indicator",load:() => import("./progress-indicator/progress-indicator.js").then(m=>m.default)},
        {path:"radio-button",load:() => import("./radio-button/radio-button.js").then(m=>m.default)},
        {path:"search",load:() => import("./search/search.js").then(m=>m.default)},
        {path:"bottom-sheet",load:() => import("./bottom-sheet/bottom-sheet.js").then(m=>m.default)},
        {path:"side-sheet",load:() => import("./side-sheet/side-sheet.js").then(m=>m.default)},
        {path:"slider",load:() => import("./slider/slider.js").then(m=>m.default)},
        {path:"snackbar",load:() => import("./snackbar/snackbar.js").then(m=>m.default)},
        {path:"switch",load:() => import("./switch/switch.js").then(m=>m.default)},
        {path:"tab",load:() => import("./tab/tab.js").then(m=>m.default)},
        {path:"text-field",load:() => import("./text-field/text-field.js").then(m=>m.default)},
        {path:"time-picker",load:() => import("./time-picker/time-picker.js").then(m=>m.default)},
        {path:"tooltip",load:() => import("./tooltip/tooltip.js").then(m=>m.default)},
    ]},
    {path:'login',component:LoginComponent,children:[]},
    {path:'*',component:ErrorComponent,children:[]},
])
