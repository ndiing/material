import jsdoc from "./jsdoc.json";
const modules = ["polyfill", "util", "localization", "color", "store", "layout-observer", "router", "ripple", "popper", "movable", "virtual", "component", "progress", "scheme-observer"];
const docs = Object.groupBy(
    jsdoc.filter((item) => !item.undocumented && item.meta?.filename && !item.inherited),
    (item) => item.meta.filename,
);
let keys = Object.entries(
    Object.groupBy(
        Object.keys(docs).map((key) => {
            const name = key.replace(/\.js$/, "");
            return {
                label: name.replace(/(^|[^a-zA-Z])([a-zA-Z])/g, ($, $1, $2, $$) => ($$ === 0 ? "" : " ") + $2.toUpperCase()),
                routerLink: `/docs/${name}`,
                group: modules.some((module) => module === name) ? "Module" : "Component",
            };
        }),
        (item) => item.group,
    ),
).map(([name, value]) => ({ label: name, children: value }));
const values = Object.entries(docs).map(([key, value]) => {
    value = Object.groupBy(value, (item) => item.kind);

    value.key = key;
    return value;
});
export { keys, values };
