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
    ]},
    {path:'/login',component:LoginComponent,children:[]},
    {path:'*',component:ErrorComponent,children:[]},
])
