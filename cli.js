const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const jsdoc2md = require("jsdoc-to-markdown");

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

function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => " " + $2.toUpperCase())
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
            params?.forEach((param) => {
                code += `     * @param {Any} ${param} - {{desc}}\n`;
            });
            if ([/^handle/, /^render/, /^createRenderRoot/, /^createRenderRoot/, /^connectedCallback/, /^firstUpdated/, /^updated/, /^on$/, /^off$/, /^once$/, /^emit$/].some((reg) => reg.test(name))) {
                code += `     * @private\n`;
            }
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
            if (doc.extendsName) {
                code += ` * @extends ${doc.extendsName}\n`;
            }
            if (doc.tagName) {
                code += ` * @element ${doc.tagName}\n`;
            }
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

    data = data.replace(/.*?function (\w+)\((.*?)?\) \{[\s\S]+?\}/gm, (...args) => {
        let [match, name, params] = args;
        params = params?.split(",").map((string) => string.trim());
        // functions
        doc.functions.set(name, { name, params });
        if (replacer) {
            let code = "";
            code += `/**\n`;
            code += ` * {{desc}}\n`;
            params?.forEach((param) => {
                code += ` * @param {Any} ${param} - {{desc}}\n`;
            });
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
        doc.emits = new Map(doc.parents.map((p) => Array.from(p.emits.entries())).flat());
        doc.properties = new Map(doc.parents.map((p) => Array.from(p.properties.entries())).flat());
    }
}

let [, , argvMethod, argvName, ...argvFiles] = process.argv;

let cli = {
    create: {
        placeholder: () => {
            // create placeholder
            open("./src/material", (file) => {
                if ((argvFiles.length && argvFiles.some((filename) => file.endsWith(filename))) || !argvFiles.length) {
                    let data = read(file);
                    let doc = docs.find((doc) => doc.file === file);
                    let result = parse(data, doc, true);
                    write(file, result.data);
                }
            });
        },
        template: () => {
            // create template
            let code = "";
            let code2 = "";
            let code3 = "";
            code += `import { html, nothing } from "lit";\n`;
            code += `import { choose } from "lit/directives/choose.js";\n`;
            code += `import { classMap } from "lit/directives/class-map.js";\n`;
            code += `import { ifDefined } from "lit/directives/if-defined.js";\n`;
            code += `import { styleMap } from "lit/directives/style-map.js";\n`;
            code += `\n`;

            for (const doc of docs) {
                //     const tags = ["md-pane",
                //     "md-block",
                //     "md-textfield",
                //     "md-card",
                //     "md-data-table-item",
                //     "md-datetime-picker",
                //     "md-tree",
                //     "md-chip",
                //     "md-list-item",
                //     "md-divider",
                //     "md-list",
                //     "md-button",
                //     "md-tree-item",
                // ]

                if (doc.tagName) {
                    let name = doc.tagName.replace("md-", "");
                    let methodName = toCamelCase("render-" + name);

                    code += `/**\n`;
                    code += ` * ${toTitleCase(methodName)}\n`;
                    code += ` * @param {Object} item - {{desc}}\n`;
                    doc.properties.forEach((value) => {
                        if (value && value.name) {
                            code += ` * @property {${value.type}} [item.${value.name}] - {{desc}}\n`;
                        }
                    });
                    doc.emits.forEach((value) => {
                        if (value) {
                            code += ` * @property {Function} [item.${value.name}] - {{desc}}\n`;
                        }
                    });
                    code += ` */\n`;
                    code += `function ${methodName}(item = {}) {\n`;
                    code += `    /* prettier-ignore */\n`;
                    code += `    return html\`\n`;
                    code += `        <md-${name}\n`;
                    code += `            .data="\${item}"\n`;
                    code += `            id="\${ifDefined(item.id)}"\n`;
                    code += `            class="\${classMap({...item.classMap})}"\n`;
                    code += `            style="\${styleMap({...item.styleMap})}"\n`;
                    doc.properties.forEach((value) => {
                        if (
                            value &&
                            ![
                                //
                                "id",
                                "name",
                                "classMap",
                                "styleMap",
                                "data",
                            ].includes(value.name)
                        ) {
                            code += `            .${value.name}="\${ifDefined(item.${value.name})}"\n`;
                        }
                    });
                    doc.emits.forEach((value) => {
                        if (value) {
                            code += `            @${value.name}="\${ifDefined(item.${value.name})}"\n`;
                        }
                    });
                    if (
                        [
                            //
                            "icon",
                            "emoji",
                            "button",
                            "icon-button",
                            "fab",
                            "chip",
                            "list-item",
                            "tree-item",
                            "block",
                        ].includes(name)
                    ) {
                        code += `            @click="\${ifDefined(item.${toCamelCase(`on-${name}-Click`)})}"\n`;
                    }
                    code += `        ></md-${name}>\n`;
                    code += `    \`\n`;
                    code += `}\n`;
                    code += `\n`;

                    code2 += `        ["${name}", () => ${methodName}(item)],\n`;

                    code3 += `    ${methodName},\n`;
                }
            }

            code += `/**\n`;
            code += ` * {{desc}}\n`;
            code += ` */\n`;
            code += `function renderComponent(item) {\n`;
            code += `    /* prettier-ignore */\n`;
            code += `    return choose(item.component, [\n`;
            code += code2;
            code += `    ], () => nothing)\n`;
            code += `}\n`;
            code += `\n`;
            code += `export {\n`;
            code += code3;
            code += `    renderComponent,\n`;
            code += `};\n`;

            write("./src/material/template/template.js", code);
        },
        docs: () => {
            // Direktori sumber dan tujuan
            const srcDir = "./src/material";
            const docsDir = "./docs";

            // Buat direktori docs jika belum ada
            if (!fs.existsSync(docsDir)) {
                fs.mkdirSync(docsDir);
            }

            // Fungsi untuk menghasilkan dokumentasi
            function generateDocs(file) {
                const output = path.join(docsDir, path.basename(file, ".js") + ".md");
                jsdoc2md
                    .render({ files: file })
                    .then((doc) => {
                        fs.writeFileSync(output, doc);
                        console.log(`Documentation for ${file} generated at ${output}`);
                    })
                    .catch((error) => {
                        console.error(`Error generating documentation for ${file}:`, error);
                    });
            }

            // Dapatkan semua file JavaScript di direktori sumber
            function getJavaScriptFiles(dir) {
                let results = [];
                const list = fs.readdirSync(dir);
                list.forEach(function (file) {
                    file = path.join(dir, file);
                    const stat = fs.statSync(file);
                    if (stat && stat.isDirectory()) {
                        results = results.concat(getJavaScriptFiles(file));
                    } else if (file.endsWith(".js")) {
                        results.push(file);
                    }
                });
                return results;
            }

            // Generate dokumentasi untuk setiap file
            const files = getJavaScriptFiles(srcDir);
            files.forEach(generateDocs);
        },
        sample: () => {
        }
    },
};

cli[argvMethod][argvName]();
