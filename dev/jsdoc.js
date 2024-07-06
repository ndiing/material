const fs = require("fs");
const path = require("path");

const [, , name] = process.argv;

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

let content = read("./src/material/" + name + "/" + name + ".js");

content = content.replace(/\/\*\*[\s\S]+?\*\//gm, ($) => {
    return "";
});

let emits = new Set();

content = content.replace(/(^    (static )?(async )?((get|set) )?(\w+)\((.*?)\) \{([\s\S]+?)^    \})/gm, ($, text, staticFunction, asyncFunction, x, accessorFunction, methodName, methodParameter, methodBody) => {
    let fires = [];
    for (let [, eventName, eventParameter] of methodBody.matchAll(/this\.emit\("(\w+)", (.*?)\)/gm)) {
        fires.push({
            eventName,
            eventParameter,
        });
        emits.add(eventName);
    }
    let code = "";
    code += `    /**\r\n`;
    code += `     * {{desc}}\r\n`;
    code += `     */\r\n`;
    code += text;
    if (
        ![
            //
            /^render/,
            /^handle/,
            /^firstUpdate/,
            /^updated/,
            /^connected/,
            /^disconnected/,
            /^constructor/,
            /style$/i,
            /^on$/,
            /^off$/,
            /^emit$/,
            /^createRenderRoot$/,
            /^once$/,
            /^hostConnected/,
            /^hostDisconnected/,
        ].some((regexp) => regexp.test(methodName))
    ) {
        return code;
    }
    return text;
});

content = content.replace(/(^    (static )?(\w+) = \{([\s\S]+?)^    \})/gm, ($, text, staticProperty, propertyName, propertyBody) => {
    let props = [];
    for (let [, propertyName, propertyType] of propertyBody.matchAll(/(\w+)\: \{ type: (\w+)/gm)) {
        props.push({
            propertyName,
            propertyType,
        });
    }
    let code = "";
    code += `    /**\r\n`;
    for (let doc of props) {
        code += `     * @property {${doc.propertyType}} ${doc.propertyName} - {{desc}}\r\n`;
    }
    code += `     */\r\n`;
    code += text;
    return code;
});

let inheritName = content.match(/extends (\w+)/)?.[1];
let tagName = content.match(/define\("(.*?)"/)?.[1];
content = content.replace(/(class (\w+))/, ($, text, className) => {
    let code = "";
    code += `/**\r\n`;

    code += ` * {{desc}}\r\n`;
    if (inheritName) code += ` * @extends ${inheritName}\r\n`;
    if (tagName) code += ` * @tagname ${tagName}\r\n`;
    for (let eventName of emits.keys()) {
        code += ` * @fires ${className}#${eventName} - {{desc}}\r\n`;
    }
    code += ` */\r\n`;
    code += text;
    return code;
});

content = content.replace(/((async )?function (\w+)\((.*?)\) \{([\s\S]+?)\})/gm,($,text,asyncFunction,methodName,methodParameter,methodBody)=>{
    let code = "";
    code += `/**\r\n`;
    code += ` * {{desc}}\r\n`;
    code += ` */\r\n`;
    code += text;
    return code;
})

write("./src/material/" + name + "/" + name + ".js", content);
// console.log(content)
