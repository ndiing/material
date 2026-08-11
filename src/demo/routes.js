import DemoError from "./error/error.js";
import DemoMain from "./main/main.js";

// import DemoA from "./a/a.js";
// import DemoB from "./a/b.js";
// import DemoC from "./a/c.js";
// import DemoD from "./a/d.js";

const beforeLoad = (router, next) => {
    setTimeout(next, 1000 * 3);
};

/* prettier-ignore */
export const routes = [
    {
        path: "/", component: DemoMain, children: [
            // // Test
            // { path: "/users", beforeLoad, load: () => import("./users/users.js").then((module) => module.default), children: [{ path: "/:id", load: () => import("./users/user.js").then((module) => module.default), children: [] }] },
            // { path: "/blogs", load: () => import("./blogs/blogs.js").then((module) => module.default), children: [{ path: "/:id", outlet: "main", load: () => import("./blogs/blog.js").then((module) => module.default), children: [] }] },
            // { path: "/a", component: DemoA, children: [
            //     { path: "/b", component: DemoB, children: [
            //         { path: "/c", component: DemoC, children: [
            //             { path: "/:id", component: DemoD, children: [] }
            //         ] }
            //     ] }
            // ] },

            // { path: "/controller/ripple", load: () => import("./controller/ripple.js").then((module) => module.default), children: [] },

            { path: "/components/grid", load: () => import("./components/grid.js").then((module) => module.default), children: [] },
            { path: "/components/grid-expanded", load: () => import("./components/grid-expanded.js").then((module) => module.default), children: [] },
            { path: "/components/grid-medium", load: () => import("./components/grid-medium.js").then((module) => module.default), children: [] },
            { path: "/components/grid-compact", load: () => import("./components/grid-compact.js").then((module) => module.default), children: [] },

            { path: "/components/layout", load: () => import("./components/layout.js").then((module) => module.default), children: [] },
            { path: "/components/layout-docked", load: () => import("./components/layout-docked.js").then((module) => module.default), children: [] },
            { path: "/components/layout-modal", load: () => import("./components/layout-modal.js").then((module) => module.default), children: [] },
            { path: "/components/layout-docked-modal", load: () => import("./components/layout-docked-modal.js").then((module) => module.default), children: [] },
            { path: "/components/layout-nested", load: () => import("./components/layout-nested.js").then((module) => module.default), children: [] },

            { path: "/components/typography", load: () => import("./components/typography.js").then((module) => module.default), children: [] },
            { path: "/components/icon", load: () => import("./components/icon.js").then((module) => module.default), children: [] },
            { path: "/components/image", load: () => import("./components/image.js").then((module) => module.default), children: [] },
            { path: "/components/badge", load: () => import("./components/badge.js").then((module) => module.default), children: [] },

            { path: "/components/button", load: () => import("./components/button.js").then((module) => module.default), children: [] },
            { path: "/components/icon-button", load: () => import("./components/icon-button.js").then((module) => module.default), children: [] },
            { path: "/components/fab", load: () => import("./components/fab.js").then((module) => module.default), children: [] },
            { path: "/components/split-button", load: () => import("./components/split-button.js").then((module) => module.default), children: [] },

            { path: "/components/card", load: () => import("./components/card.js").then((module) => module.default), children: [] },
            { path: "/components/dialog", load: () => import("./components/dialog.js").then((module) => module.default), children: [] },
            { path: "/components/sheet", load: () => import("./components/sheet.js").then((module) => module.default), children: [] },

            { path: "/components/tooltip", load: () => import("./components/tooltip.js").then((module) => module.default), children: [] },
            { path: "/components/snackbar", load: () => import("./components/snackbar.js").then((module) => module.default), children: [] },

            { path: "/components/data-table", load: () => import("./components/data-table.js").then((module) => module.default), children: [] },

            { path: "/components/checkbox", load: () => import("./components/checkbox.js").then((module) => module.default), children: [] },
            { path: "/components/radio-button", load: () => import("./components/radio-button.js").then((module) => module.default), children: [] },
            { path: "/components/switch", load: () => import("./components/switch.js").then((module) => module.default), children: [] },
            { path: "/components/text-field", load: () => import("./components/text-field.js").then((module) => module.default), children: [] },
            { path: "/components/textarea", load: () => import("./components/textarea.js").then((module) => module.default), children: [] },
            { path: "/components/slider", load: () => import("./components/slider.js").then((module) => module.default), children: [] },
            { path: "/components/form", load: () => import("./components/form.js").then((module) => module.default), children: [] },

            { path: "/components/list", load: () => import("./components/list.js").then((module) => module.default), children: [] },
            { path: "/components/list-configurations", load: () => import("./components/list-configurations.js").then((module) => module.default), children: [] },

            { path: "/components/list-interactions", load: () => import("./components/list-interactions.js").then((module) => module.default), children: [] },
            { path: "/components/tree", load: () => import("./components/tree.js").then((module) => module.default), children: [] },
            { path: "/components/push-menu", load: () => import("./components/push-menu.js").then((module) => module.default), children: [] },

            // { path: "/components/list-style", load: () => import("./components/list-style.js").then((module) => module.default), children: [] },

            { path: "/components/navigation-bar", load: () => import("./components/navigation-bar.js").then((module) => module.default), children: [] },
            { path: "/components/navigation-bar-horizontal", load: () => import("./components/navigation-bar-horizontal.js").then((module) => module.default), children: [] },

            { path: "/components/navigation-drawer", load: () => import("./components/navigation-drawer.js").then((module) => module.default), children: [] },
            { path: "/components/navigation-drawer-modal", load: () => import("./components/navigation-drawer-modal.js").then((module) => module.default), children: [] },

            { path: "/components/navigation-rail", load: () => import("./components/navigation-rail.js").then((module) => module.default), children: [] },
            { path: "/components/navigation-rail-modal", load: () => import("./components/navigation-rail-modal.js").then((module) => module.default), children: [] },
            
            { path: "/components/datetime-picker", load: () => import("./components/datetime-picker.js").then((module) => module.default), children: [] },

            // { path: "/components/test", load: () => import("./components/test.js").then((module) => module.default), children: [] },

        ],
    },
    { path: "*", component: DemoError, children: [] },
];
