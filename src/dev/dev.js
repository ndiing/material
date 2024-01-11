import { MDNavigation } from "../material/foundation/navigation";

import MainComponent from "./navigation/main.js";
import LoginComponent from "./navigation/login.js";
import ErrorComponent from "./navigation/error.js";
import ExampleComponent from "./navigation/example.js";

const beforeLoad = (resolve, reject) => {
    if (!window.localStorage.access_token) {
        reject();
        MDNavigation.navigate("/login");
    } else resolve();
};

// prettier-ignore
MDNavigation.load([
    {path:'',component:MainComponent,children:[
        {path:'users',beforeLoad,load:() => import("./navigation/users.js").then(m=>m.default),children:[
            {path:':_id',load:() => import("./navigation/user.js").then(m=>m.default),children:[]},
        ]},
        {path:'blogs',load:() => import("./navigation/blogs.js").then(m=>m.default),children:[
            {path:':_id',load:() => import("./navigation/blog.js").then(m=>m.default),children:[]},
        ]},
        {path:'example',component:ExampleComponent,children:[]},
    ]},
    {path:'login',component:LoginComponent,children:[]},
    {path:'*',component:ErrorComponent,children:[]},
])

window.addEventListener("onCurrententrychange", console.log);
window.addEventListener("onNavigate", console.log);
window.addEventListener("onNavigateerror", console.log);
window.addEventListener("onNavigatesuccess", console.log);
