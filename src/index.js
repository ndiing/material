import "./md.scss";
import "./md.js";

// dev

import { Router } from "./lib/router.js";

import AppMain from "./dev/main.js";
import AppUsers from "./dev/users.js";
import AppUser from "./dev/user.js";
import AppError from "./dev/error.js";

const beforeLoad = async (resolve, reject) => {
    if (localStorage.isAuthenticated==="1") resolve()
    else {
        Router.navigate("/login");
        reject();
    }
};

// prettier-ignore
Router.init([
    {path:'',title:'Welcome',component:AppMain,children:[
        {path:'users',beforeLoad,title:'Users',component:AppUsers,children:[
            {path:':_id',title:'User',component:AppUser,children:[]},
        ]},
        {path:'blogs',title:'Blogs',load:() => import("./dev/blogs.js").then(m=>m.default),children:[
            {path:':_id',title:'Blog',load:() => import("./dev/blog.js").then(m=>m.default),children:[]},
        ]},
    ]},
    {path:'/login',title:'Login',load:() => import("./dev/login.js").then(m=>m.default),children:[]},
    {path:'*',title:'Error',component:AppError,children:[]},
]);

// window.addEventListener("onNavigationStart", console.log);
// window.addEventListener("onNavigation", console.log);
// window.addEventListener("onNavigationCancel", console.log);
// window.addEventListener("onNavigationEnd", console.log);