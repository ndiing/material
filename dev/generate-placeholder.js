const fs = require("fs");
const path = require("path");

function read(pathname, data) {
    try {
        data = fs.readFileSync(pathname, {
            encoding: "utf8",
        });
    } catch (error) {}
    return data;
}
function write(pathname, data) {
    let dirname = path.dirname(pathname);
    try {
        fs.readdirSync(dirname);
    } catch (error) {
        fs.mkdirSync(dirname, {
            recursive: true,
        });
    }
    fs.writeFileSync(pathname, data);
}
function parse(data) {
    const doc = {};
    doc.methods = [];
    doc.fires = [];
    doc.properties = [];
    doc.functions = [];

    data = data.replace(/\/\*\*[\s\S]+?\*\//gm, "");

    data = data.replace(/customElements\.define\("(.*?)", \w+\);/, (...args) => {
        let [text, tagName] = args;
        doc.tagName = tagName;
        return text;
    });

    data = data.replace(/^(async )?function (\w+)\((.*?)?\) \{[\s\S]+?^\}/gm, (...args) => {
        let [text, ,methodName,methodParams] = args;
        doc.functions.push({methodName,methodParams});
        let code = "";
        code+=`/**\n`
        code+=` * {{description}}\n`
        code+=` */\n`
        code += text;
        return code;
    });

    data = data.replace(/^    (static )?((get|set) )?(async )?(\w+)\((.*?)?\) \{([\s\S]+?)^    \}/gm, (...args) => {
        let [text, , static, acc, async, methodName, methodParams, body] = args;
        methodParams = methodParams?.split(",");
        let fires = [];
        body = body.replace(/this\.emit\("(\w+)", (\w+)\);/gm, (...args) => {
            let [text, name, params] = args;
            params = params.split(",");
            fires.push({ name, params });
            doc.fires.push({ name, params });
            return text;
        });
        // console.log(body)
        doc.methods.push({ static, acc, async, methodName, methodParams, fires });
        let code = "";
        code+=`    /**\n`
        if(![
            /^on$/,
            /^off$/,
            /^emit$/,
            /^hostConnected$/,
            /^hostDisconnected$/,
            /^handle/,
            /^createRenderRoot/,
            /^firstUpdate/,
            /^updated/,
            /^connectedCallback/,
            /^disconnectedCallback/,
            /^render/,
        ].some(r=>r.test(methodName))){
            code+=`     * {{description}}\n`
        }else{
            code+=`     * @private\n`
        }
        code+=`     */\n`
        code += text;
        return code;
    });

    data = data.replace(/^    static properties = \{([\s\S]+?)^    \}/m, (...args) => {
        let [text, body] = args;
        let properties = [];
        body = body.replace(/(\w+): { type: (\w+)/gm, (...args) => {
            let [text, name, type] = args;
            properties.push({ name, type });
            doc.properties.push({ name, type });
            return text;
        });
        let code = "";
        code += `    /**\n`;
        code += `     * {{description}}\n`;
        for (const p of properties) {
            code += `     * @property {${p.type}} ${p.name} - {{description}}\n`;
        }
        code += `     */\n`;
        code += text;
        return code;
    });

    data = data.replace(/class (\w+)( extends (\w+))? \{/, (...args) => {
        let [text, className, , extendName] = args;
        doc.className = className;
        doc.extendName = extendName;
        let code = "";
        code += `/**\n`;
        code += ` * {{description}}\n`;
        if (doc.tagName) code += ` * @element ${doc.tagName}\n`;
        if (doc.extendName) code += ` * @extends ${doc.extendName}\n`;
        if (doc.fires?.length) {
            for (const f of doc.fires) {
                code += ` * @fires ${doc.className}#${f.name} - {{description}}\n`;
            }
        }
        code += ` */\n`;
        code += text;
        return code;
    });

    // console.log(data);
    // console.log(doc);
    return {doc,data}
}
const [,,argvName] = process.argv
function open(pathname) {
    const dirents = fs.readdirSync(pathname, { withFileTypes: true });
    for (const dirent of dirents) {
        const curr = pathname + "/" + dirent.name;
        if (dirent.isDirectory()) {
            open(curr);
        } else {
            const extname = path.extname(curr);
            if (extname === ".js") {
                if(argvName&&!curr.includes(argvName)){
                    continue
                }
                console.log('generate '+curr)
                const text = read(curr);
                let {doc,data}=parse(text);
                // break
                write(curr,data)
            }
        }
    }
}
open("./src/material");
