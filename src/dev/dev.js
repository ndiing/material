import { MdNavigation } from "../material/navigation/navigation";

import MainComponent from "./main/main.js";
import LoginComponent from "./login/login.js";
import ErrorComponent from "./error/error.js";
import ExampleComponent from "./example/example.js";

MdNavigation.load([
    {
        path: "",
        component: MainComponent,
        children: [
            {
                path: "users",
                load: () => import('./users/users.js').then(m=>m.default),
                children: [{ path: ":id", load: () => import('./user/user.js').then(m=>m.default), children: [] }],
            },
            {
                path: "blogs",
                load: () => import('./blogs/blogs.js').then(m=>m.default),
                children: [{ path: ":id", load: () => import('./blog/blog.js').then(m=>m.default), children: [] }],
            },
            { path: "example", component: ExampleComponent, children: [] },
        ],
    },
    { path: "login", component: LoginComponent, children: [] },
    { path: "*", component: ErrorComponent, children: [] },
]);

window.addEventListener('onCurrententrychange',console.log)
window.addEventListener('onNavigate',console.log)
window.addEventListener('onNavigateerror',console.log)
window.addEventListener('onNavigatesuccess',console.log)