import jsdoc from "./jsdoc.json";
const modules = ["polyfill", "util", "localization", "color", "store", "layout", "router", "ripple", "popper", "movable", "virtual-scroll", "component", "progress"];
const docs = Object.groupBy(
    jsdoc.filter((item) => !item.undocumented && item.meta?.filename && !item.inherited),
    (item) => item.meta.filename,
);
const keys = Object.keys(docs).map((key) => {
    const name = key.replace(/\.js$/, "");
    return {
        label: name.replace(/(^|[^a-zA-Z])([a-zA-Z])/g, ($, $1, $2, $$) => ($$ === 0 ? "" : " ") + $2.toUpperCase()),
        routerLink: `/docs/${name}`,
        type: modules.some((module) => module === name) ? "module" : "component",
    };
});
console.log(keys);
const values = Object.values(docs).map((doc) => Object.groupBy(doc, (item) => item.kind));
export { keys, values };
