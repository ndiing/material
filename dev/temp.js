const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

/**
 * Converts a string to `camelCase` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camelCase.
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))

        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

function read(file, data) {
    try {
        data = fs.readFileSync(file, {
            encoding: "utf8",
        });
    } catch (error) {}
    return data;
}

function write(file, data) {
    let dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, {
            recursive: true,
        });
    }
    fs.writeFileSync(file, data);
}

function open(pathname, callback) {
    let dirs = fs.readdirSync(pathname, {
        withFileTypes: true,
    });

    for (let dir of dirs) {
        let pathname2 = `${pathname}/${dir.name}`;
        if (dir.isDirectory()) {
            open(pathname2, callback);
        } else {
            callback?.(pathname2);
        }
    }
}
// open("./src/material", console.log);

function parse(data) {
    let doc = {};

    data=data.replace(/\n+/gm,'\n')
    data=data.replace(/.*?\/\*\*/gm,m=>`\n${m}`)

    data = data.replace(/customElements\.define\("(.*?)", /gm, (...args) => {
        let [match, tagName] = args;
        doc.tagName = tagName;
        return match;
    });

    doc.methods = [];
    doc.emits = [];
    data = data.replace(/^    (static )?((get|set) )?(async )?(\w+)\((.*?)?\) \{([\s\S]+?)^    \}/gm, (...args) => {
        let [match, isStatic, , isAcc, isAsync, name, params, data2] = args;

        data2 = data2.replace(/this\.emit\("(\w+)", (\w+)\);/gm, (...args) => {
            let [match, name, params] = args;
            params = [params];
            doc.emits.push({ name, params });
            return match;
        });

        params = params?.split(",").map((string) => string.trim());
        doc.methods.push({ isStatic, isAcc, isAsync, name, params });
        return match;
    });

    data = data.replace(/class (\w+) (extends (\w+) )?\{/gm, (...args) => {
        let [match, className, , extendsName] = args;
        doc.className = className;
        doc.extendsName = extendsName;
        return match;
    });

    data = data.replace(/^    static properties = \{([\s\S]+?)^    \};/gm, (...args) => {
        let [match, data2] = args;
        let doc2 = [];

        data2 = data2.replace(/(\w+): \{ type: (\w+)/gm, (...args) => {
            let [match, name, type] = args;
            let doc3 = {};
            doc3.name = name;
            doc3.type = type;
            doc2.push(doc3);
            return match;
        });

        doc.properties = doc2;

        return match;
    });

    doc.functions = [];
    data = data.replace(/function (\w+)((.*?)?) \{[\s\S]+?\}/gm, (...args) => {
        let [match, name, , params] = args;
        params = params?.split(",").map((string) => string.trim());
        doc.functions.push({ name, params });
        return match;
    });

    return { doc, data };
}

let docs = [];
open("./src/material", (file) => {
    if (file.endsWith(".js")) {
        let data = read(file);
        let result = parse(data);
        docs.push(result.doc);
        // write(file,result.data)
    }
});
const docMap = new Map(docs.map((doc) => [doc.className, doc]));

function loop(doc) {
    const acc = [];
    while (doc && doc.extendsName) {
        doc = docMap.get(doc.extendsName);
        if (doc) acc.push(doc);
    }
    return acc;
}

let code = "";
for (const doc of docs) {

    if(![
        // /list-item$/,
        // /chip$/,
        /pagination$/,
        // /icon$/,
        // /button$/,
        // /fab$/,
        // /field$/,
        // /checkbox$/,
        // /radio-button$/,
        // /switch$/,
    ].some(reg=>reg.test(doc.tagName)))
        continue

    doc.parents = loop(doc);
    let properties = new Map(
        []
            .concat(
                doc.parents
                    .map((p) => p.properties)
                    .flat()
                    .filter(Boolean),
            )
            .concat(doc?.properties || [])
            .map((p) => [p.name, p]),
    );
    let methods = new Map(
        []
            .concat(
                doc.parents
                    .map((p) => p.methods)
                    .flat()
                    .filter(Boolean),
            )
            .concat(doc?.methods || [])
            .map((p) => [p.name, p]),
    );
    let emits = new Map(
        []
            .concat(
                doc.parents
                    .map((p) => p.emits)
                    .flat()
                    .filter(Boolean),
            )
            .concat(doc?.emits || [])
            .map((p) => [p.name, p]),
    );

    properties = Array.from(properties.values());
    methods = Array.from(methods.values());
    emits = Array.from(emits.values());

    // console.log(properties);
    // console.log(methods);
    // console.log(emits);

    if(doc.tagName){

        code += `${toCamelCase('render-'+(doc.tagName.replace('md-','')))}(item = {}) {\n`
        code += `    return html\`\n`
        code += `        <${doc.tagName}\n`;
        code += `            .data="\${item}"\n`;
        code += `            id="\${ifDefined(item.id)}"\n`;
        code += `            class="\${classMap({...item.classMap})}"\n`;
        code += `            style="\${styleMap({...item.styleMap})}"\n`;
        for(const {name} of properties){
            code += `            .${name}="\${ifDefined(item.${name})}"\n`;
        }
        for(const {name} of emits){
            code += `            @${name}="\${ifDefined(item.${name})}"\n`;
        }
        code += `        ></${doc.tagName}>\n`;
        code += `    \`\n`
        code += `}\n`
        code += `\n`
    }

}
write('./dev/template.js',code);
