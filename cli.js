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

function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => $2.toUpperCase())
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

function parse(data, options = {}, replacer = false) {
    let doc = {};
    options = {
        methods: [],
        emits: [],
        functions: [],
        properties: [],
        ...options,
    };
    doc.methods = new Map(options.methods);
    doc.emits = new Map(options.emits);
    doc.functions = new Map(options.functions);
    doc.properties = new Map(options.properties);

    if (replacer) {
        data = data.replace(/\n+/gm, "\n");
        data = data.replace(/\/\*\*[\s\S]+?\*\//gm, "");
    }

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
            doc.emits.set(name, { name, params });
            return match;
        });
        params = params?.split(",").map((string) => string.trim());
        // methods
        doc.methods.set(name, { isStatic, isAcc, isAsync, name, params });
        if (replacer) {
            let code = "";
            code += `    /**\n`;
            code += `     * {{desc}}\n`;
            // params?.forEach(param=>{
            //     code += `     * @param {type} ${param} - {{desc}}\n`;
            // })
            code += `     */\n`;
            code += match;
            return code;
        }
        return match;
    });

    data = data.replace(/^    static properties = \{([\s\S]+?)^    \};/gm, (...args) => {
        let [match, data2] = args;
        data2 = data2.replace(/(\w+): \{ type: (\w+)/gm, (...args) => {
            let [match, name, type] = args;
            // properties
            doc.properties.set(name, { name, type });
            return match;
        });
        if (replacer) {
            let code = "";
            code += `    /**\n`;
            code += `     * {{desc}}\n`;
            doc.properties.forEach((value) => {
                if (value) {
                    code += `     * @property {${value.type}} ${value.name} - {{desc}}\n`;
                }
            });
            code += `     */\n`;
            code += match;
            return code;
        }
        return match;
    });

    data = data.replace(/class (\w+) (extends (\w+) )?\{/gm, (...args) => {
        let [match, className, , extendsName] = args;
        // className
        doc.className = className;
        // extendsName
        doc.extendsName = extendsName;
        if (replacer) {
            let code = "";
            code += `/**\n`;
            code += ` * {{desc}}\n`;
            code += ` * @extends ${doc.extendsName}\n`;
            code += ` * @element ${doc.tagName}\n`;
            doc.emits.forEach((value) => {
                if (value) {
                    code += ` * @fires ${doc.className}#${value.name} - {{desc}}\n`;
                }
            });
            code += ` */\n`;
            code += match;
            return code;
        }
        return match;
    });

    data = data.replace(/.*?function (\w+)((.*?)?) \{[\s\S]+?\}/gm, (...args) => {
        let [match, name, , params] = args;
        params = params?.split(",").map((string) => string.trim());
        // functions
        doc.functions.set(name, { name, params });
        if (replacer) {
            let code = "";
            code += `/**\n`;
            code += ` * {{desc}}\n`;
            code += ` */\n`;
            code += match;
            return code;
        }
        return match;
    });
    return { doc, data };
}

let docs = [];
open("./src/material", (file) => {
    let data = read(file);
    let result = parse(data);
    result.doc.file = file;
    docs.push(result.doc);
});
function parent(doc) {
    return [doc].reduce((acc, curr) => {
        if (curr.extendsName) {
            let doc2 = docs.find((doc2) => doc2.className === curr.extendsName);
            if (doc2) {
                acc.push(...parent(doc2));
            }
        }
        acc.push(curr);
        return acc;
    }, []);
}
for (const doc of docs) {
    if (doc.tagName) {
        doc.parents = [];
        if (doc.extendsName) {
            doc.parents = parent(doc);
        }
        doc.emits = Array.from(new Map(doc.parents.map((p) => Array.from(p.emits.entries())).flat()).values()).filter(Boolean);
        doc.properties = Array.from(new Map(doc.parents.map((p) => Array.from(p.properties.entries())).flat()).values()).filter(Boolean);
    }
}

// // create placeholder
// open("./src/material", (file) => {
//     if (file.endsWith(".js")) {
//         let data = read(file);
//         let doc = docs.find((doc) => doc.file === file);
//         let result = parse(data, doc, true);
//         write(file,result.data)
//     }
// });
