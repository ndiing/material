const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

function read(file, data) {
    try {
        data = fs.readFileSync(file, { encoding: "utf8" });
    } catch (error) {}
    return data;
}

function write(file, data) {
    let dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(file, data);
}

function open(pathname, callback) {
    let dirs = fs.readdirSync(pathname, { withFileTypes: true });
    for (let dir of dirs) {
        let pathname2 = `${pathname}/${dir.name}`;
        if (dir.isDirectory()) {
            open(pathname2, callback);
        } else {
            callback?.(pathname2);
        }
    }
}

function parse(data) {
    let doc = {};
    doc.methods = [];
    doc.emits = [];
    doc.functions = [];
    doc.properties = [];

    data = data.replace(/customElements\.define\("(.*?)", /gm, (...args) => {
        let [match, tagName] = args;
        // tagName
        doc.tagName = tagName;
        return match;
    });

    data = data.replace(/^    (static )?((get|set) )?(async )?(\w+)\((.*?)?\) \{([\s\S]+?)^    \}/gm, (...args) => {
        let [match, isStatic, , isAcc, isAsync, name, params, data2] = args;
        data2 = data2.replace(/this\.emit\("(\w+)", (\w+)\);/gm, (...args) => {
            let [match, name, params] = args;
            params = [params];
            // emits
            doc.emits.push({ name, params });
            return match;
        });
        params = params?.split(",").map((string) => string.trim());
        // methods
        doc.methods.push({ isStatic, isAcc, isAsync, name, params });
        return match;
    });

    data = data.replace(/class (\w+) (extends (\w+) )?\{/gm, (...args) => {
        let [match, className, , extendsName] = args;
        // className
        doc.className = className;
        // extendsName
        doc.extendsName = extendsName;
        return match;
    });

    data = data.replace(/^    static properties = \{([\s\S]+?)^    \};/gm, (...args) => {
        let [match, data2] = args;
        data2 = data2.replace(/(\w+): \{ type: (\w+)/gm, (...args) => {
            let [match, name, type] = args;
            // properties
            doc.properties.push({ name, type });
            return match;
        });
        return match;
    });

    data = data.replace(/function (\w+)((.*?)?) \{[\s\S]+?\}/gm, (...args) => {
        let [match, name, , params] = args;
        params = params?.split(",").map((string) => string.trim());
        // functions
        doc.functions.push({ name, params });
        return match;
    });
    return { doc, data };
}

let docs = [];
open("./src/material", (file) => {
    if (file.endsWith("button.js")) {
        let data = read(file);
        let result = parse(data);
        docs.push(result.doc);
    }
});
console.log(docs);
