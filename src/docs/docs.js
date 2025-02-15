import DocsMain from "./main/main.js";
import DocsPage from "./page/page.js";

export default {
    path: "docs",
    component: DocsMain,
    children: [{ path: ":name", component: DocsPage }],
};
