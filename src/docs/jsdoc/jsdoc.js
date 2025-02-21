import jsdoc from "./jsdoc.json";

const entries = Object.groupBy(
    jsdoc.filter((item) => !item.undocumented),
    (item) => item.meta?.filename,
);

const keys = Object.keys(entries).map((key) => ({
    label: key,
    routerLink: "/docs/" + key,
}));

const values = Object.entries(entries).map(([key, value]) => {
    value = Object.groupBy(value, (item) => item.kind);
    value.key = key;
    return value;
});

export { keys, values };
