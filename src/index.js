import "./md.scss";
import "./md.js";

// dev

import { MdRouter } from "./lib/router/router.js";

import AppMain from "./dev/router/main.js";
import AppUsers from "./dev/router/users.js";
import AppUser from "./dev/router/user.js";
import AppError from "./dev/router/error.js";

const beforeLoad = async (resolve, reject) => {
    if (localStorage.isAuthenticated==="1") resolve()
    else {
        MdRouter.navigate("/login");
        reject();
    }
};

// prettier-ignore
MdRouter.init([
    {path:'',title:'Welcome',component:AppMain,children:[
        {path:'users',beforeLoad,title:'Users',component:AppUsers,children:[
            {path:':_id',title:'User',component:AppUser,children:[]},
        ]},
        {path:'blogs',title:'Blogs',load:() => import("./dev/router/blogs.js").then(m=>m.default),children:[
            {path:':_id',title:'Blog',load:() => import("./dev/router/blog.js").then(m=>m.default),children:[]},
        ]},
    ]},
    {path:'/login',title:'Login',load:() => import("./dev/router/login.js").then(m=>m.default),children:[]},
    {path:'*',title:'Error',component:AppError,children:[]},
]);

// window.addEventListener("onNavigationStart", console.log);
// window.addEventListener("onNavigation", console.log);
// window.addEventListener("onNavigationCancel", console.log);
// window.addEventListener("onNavigationEnd", console.log);