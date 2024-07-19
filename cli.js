const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

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

    data = data.replace(/\n+?/gm, (...args) => {
        return `\n`;
    });
    data = data.replace(/.*?\(.*?\).*?\{[\s\S]+?\}\n/gm, (...args) => {
        return `${args[0]}\n`;
    });
    data = data.replace(/.*?\(.*?\);\n/gm, (...args) => {
        return `\n${args[0]}\n`;
    });
    data = data.replace(/.*?\=.*?;\n/gm, (...args) => {
        return `\n${args[0]}\n`;
    });

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

    return { doc, data };
}


// open('./src/material',(file) => {
//     var data = read(file);
//     var result = parse(data);
//     write(file,result.data)
// })