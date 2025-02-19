import AppMain from "./main/main.js";

import "../demo/demo.scss";
import DemoRoutes from "../demo/demo.js";

import "../docs/docs.scss";
import DocsRoutes from "../docs/docs.js";

export default {
    path: "",
    component: AppMain,
    children: [DemoRoutes, DocsRoutes],
};
