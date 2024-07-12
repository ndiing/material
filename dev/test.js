const fs = require("fs");
const path = require("path");

let template=`import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevExample extends MDComponent {
    render() {
        return html\`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
`

let template2=`
                    </div>
                </div>
            </div>
        \`;
    }
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
`

/**
 * Converts a string to `PascalCase` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to PascalCase.
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

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

/**
 * Converts a string to `snake_case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to snake_case.
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `kebab-case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to kebab-case.
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `flatcase` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to flatcase.
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `UPPERFLATCASE` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to UPPERFLATCASE.
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `Pascal_Snake_Case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Pascal_Snake_Case.
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `camel_Snake_case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camel_Snake_case.
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => "_" + ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `SCREAMING_SNAKE_CASE` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to SCREAMING_SNAKE_CASE.
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `Train-Case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Train-Case.
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `COBOL-CASE` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to COBOL-CASE.
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to `Title Case` format.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Title Case.
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
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

const [, , argvName] = process.argv;
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
            /^once$/,
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

    data = data.replace(/variants = \[(.*?)\]/, (...args) => {
        let [text, ] = args;
        doc.variants=(args[1].split(',').map(s=>s.replace(/"/g,'').trim()))
        return text;
    });

    // console.log(data);
    // console.log(doc);
    return {doc,data}
}
function open(pathname) {
    const dirents = fs.readdirSync(pathname, { withFileTypes: true });
    for (const dirent of dirents) {
        const curr = pathname + "/" + dirent.name;
        if (dirent.isDirectory()) {
            open(curr);
        } else {
            const extname = path.extname(curr);
            const {name} = path.parse(curr);
            if (extname === ".js") {
                if (argvName && !curr.includes(argvName)) {
                    continue;
                }
                const text = read(curr);
                const {doc} = parse(text)

                let className=toPascalCase('dev-'+name)
                let tagName=toKebabCase('dev-'+name)
                let tagName2=toKebabCase('md-'+name)
                // if(doc.variants){
                //     doc.variants.forEach(variant=>{
                //         console.log(name+'-'+variant)
                //     })
                // }

                let temp=template
                .replaceAll('DevExample',className)
                .replaceAll('dev-example',tagName)

                let temp2=template2
                .replaceAll('DevExample',className)
                .replaceAll('dev-example',tagName)

                let code=''
                code+=temp
                let space='    '.repeat(6)

                code+=`${space}<div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">\r\n`
                code+=`${space}    <${tagName2}\r\n`
                if(doc.properties){
                    doc.properties.forEach(prop => {
                        if(prop.name=='variant'&&doc.variants){
                            code+=`${space}        ${prop.name}="${doc.variants[0]}"\r\n`

                        }else{
                            code+=`${space}        ${prop.name}${prop.type!=='Boolean'?`=""`:``}\r\n`

                        }
                    })
                }
                code+=`${space}    ></${tagName2}>\r\n`
                code+=`${space}</div>\r\n`
                
                if(doc.variants){
                    doc.variants.slice(1).forEach(variant=>{
                        code+=`${space}<div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">\r\n`
                        code+=`${space}    <${tagName2}\r\n`
                        if(doc.properties){
                            doc.properties.forEach(prop => {
                                if(prop.name=='variant'){
                                    code+=`${space}        ${prop.name}="${variant}"\r\n`
    
                                }else{
                                    code+=`${space}        ${prop.name}${prop.type!=='Boolean'?`=""`:``}\r\n`
    
                                }
                            })
                        }
                        code+=`${space}    ></${tagName2}>\r\n`
                        code+=`${space}</div>\r\n`
                    })
                }

                code+=temp2

                // console.log(code)
                write('./src/dev/'+name+'/'+name+'.js',code)

            }
        }
    }
}
open("./src/material");
