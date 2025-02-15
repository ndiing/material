import AppMain from "./main/main.js";
import DemoRoutes from "../demo/demo.js";
import DocsRoutes from "../docs/docs.js";

export default {
    path: "",
    component: AppMain,
    children: [DemoRoutes, DocsRoutes],
};
