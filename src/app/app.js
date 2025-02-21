import "../demo/demo.scss";
import DemoRoutes from "../demo/demo.js";

import "../docs/docs.scss";
import DocsRoutes from "../docs/docs.js";

export default [
    {
        path: "",
        load: () => import("./main/main.js").then((module) => module.default),
        children: [DemoRoutes, DocsRoutes],
    },
    {
        path: "*",
        load: () => import("./error/error.js").then((module) => module.default),
    },
];
