import jsdoc from "./jsdoc.json";

jsdoc = jsdoc.filter((item) => !item.undocumented);

jsdoc = Object.groupBy(jsdoc, (item) => item.meta?.filename);

const keys = Object.keys(jsdoc).map((key) => ({
    label: key,
    routerLink: "/docs/" + key,
}));

const values = Object.entries(jsdoc).map(([key, value]) => {
    value = Object.groupBy(value, (item) => item.kind);
    value.key = key;
    return value;
});

export { keys, values };
