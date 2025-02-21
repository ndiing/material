export default {
    path: "docs",
    load: () => import("./main/main.js").then((module) => module.default),
    children: [{ path: ":name", load: () => import("./page/page.js").then((module) => module.default) }],
};
