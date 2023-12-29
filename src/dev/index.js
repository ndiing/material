
import { Router } from "../lib/router.js";

import AppMain from "./main.js";
import AppUsers from "./users.js";
import AppUser from "./user.js";
import AppError from "./error.js";

const beforeLoad = (resolve, reject) => {
    if (localStorage.isAuthenticated) resolve();
    else {
        Router.navigate("/login");
        reject();
    }
};

// prettier-ignore
Router.init([
    {path:'',component:AppMain,children:[
        {path:'users',beforeLoad,component:AppUsers,children:[
            {path:':_id',component:AppUser,children:[]},
        ]},
        {path:'blogs',load:() => import("./blogs.js").then(m=>m.default),children:[
            {path:':_id',load:() => import("./blog.js").then(m=>m.default),children:[]},
        ]},
    ]},
    {path:'/login',load:() => import("./login.js").then(m=>m.default),children:[]},
    {path:'*',component:AppError,children:[]},
]);

// window.addEventListener("onNavigationStart", console.log);
// window.addEventListener("onNavigation", console.log);
// window.addEventListener("onNavigationCancel", console.log);
// window.addEventListener("onNavigationEnd", console.log);
