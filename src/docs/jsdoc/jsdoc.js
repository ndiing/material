import jsdoc from "../jsdoc.json";
const docs = Object.groupBy(
    jsdoc.filter((item) => !item.undocumented&&item.meta?.filename),
    (item) => item.meta.filename,
);
const keys = Object.keys(docs);
const values = Object.values(docs).map((doc) => Object.groupBy(doc, (item) => item.kind));
export { keys, values };
