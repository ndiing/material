import fs from "fs";
import path from "path";

function read(file) {
    try {
        return fs.readFileSync(file, "utf8");
    } catch (error) {
        return null;
    }
}

function write(file, data) {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(file, data);
}

function readFiles(parentPath = "./", blacklist = [], whitelist = [], result = {}) {
    const dirents = fs.readdirSync(parentPath, { withFileTypes: true });

    for (const dirent of dirents) {
        const currentPath = path.join(dirent.parentPath, dirent.name);

        if (blacklist.some((regexp) => regexp.test(currentPath))) {
            continue;
        }

        if (dirent.isDirectory()) {
            result = readFiles(currentPath, blacklist, whitelist, result);
            continue;
        }

        if (!whitelist.some((regexp) => regexp.test(currentPath))) {
            continue;
        }

        const file = currentPath;
        const data = read(file);
        const { root, dir, base, ext, name } = path.parse(file);

        if (!result[dir]) {
            result[dir] = [];
        }

        result[dir].push({ root, dir, base, ext, name, file, data });
    }

    return result;
}

function writeFiles() {
    const result = readFiles(
        "./",
        [],
        [
            // /.*/,
            /src\\material\\base\\.*\.js/,
            /src\\material\\components\\.*\.js/,
        ],
    );

    var temp = {};
    for (const name in result) {
        const value = result[name];

        for (const { root, dir, base, ext, name, file, data } of value) {
            const className = data.match(/class (\w+)/)[1];
            temp[className] = {
                properties: {},
                extendsName: null,
                events: [],
            };

            const extendsName = data.match(/extends (\w+)/)[1];
            temp[className].extendsName = extendsName;

            const propertiesString = data.match(/    static properties = \{([\s\S\n]+?)    \};/)?.[1];
            if (propertiesString) {
                var properties;
                var converter;
                var MdListElement = temp.MdListElement;
                var MdTextField = temp.MdListElement;
                eval(`properties={${propertiesString}}`);
                temp[className].properties = properties;
            }

            const events = [...data.matchAll(/this\.emit\("(\w+)", .*?\);/gm)].map(([, eventName]) => eventName);
            temp[className].events = new Set(events);
            temp[className].methodName = `render${className.slice(2)}`;

            const localName = data.match(/customElements\.define\("([\w-]+?)", .*?\);/)?.[1];
            if (localName) {
                temp[className].localName = localName;
                temp[className].componentName = localName.slice(3);
            }
        }
    }

    let code = "";
    code += `import { html, nothing } from "lit";\r\n`;
    code += `import { choose } from "lit/directives/choose.js";\r\n`;
    code += `import { classMap } from "lit/directives/class-map.js";\r\n`;
    code += `import { ifDefined } from "lit/directives/if-defined.js";\r\n`;
    code += `import { styleMap } from "lit/directives/style-map.js";\r\n`;
    code += `\r\n`;

    for (const className in temp) {
        if (className.endsWith("Element")) {
            continue;
        }
        const data = temp[className];
        code += `/* prettier-ignore */\r\n`;
        code += `function ${data.methodName}(properties = {}) {\r\n`;
        code += `    return html\`\r\n`;
        code += `        <${data.localName}\r\n`;
        code += `            class="\${classMap(properties.classMap ?? {})}"\r\n`;
        code += `            style="\${styleMap(properties.styleMap ?? {})}"\r\n`;
        for (const name in data.properties) {
            const value = data.properties[name];
            if (value?.state) {
                continue;
            }
            code += `            .${name}="\${ifDefined(properties.${name})}"\r\n`;
        }
        for (const eventName of data.events) {
            code += `            @${eventName}="\${ifDefined(properties.${eventName})}"\r\n`;
        }
        code += `        ></${data.localName}>\r\n`;
        code += `    \`\r\n`;
        code += `}\r\n`;
        code += `\r\n`;
    }

    code += `/* prettier-ignore */\r\n`;
    code += `function renderComponent(component, properties = {}) {\r\n`;
    code += `    return choose(component,[\r\n`;
    for (const className in temp) {
        if (className.endsWith("Element")) {
            continue;
        }
        const data = temp[className];
        code += `        ["${data.componentName}", () => ${data.methodName}(component, properties)],\r\n`;
    }

    code += `    ], () => nothing,);\r\n`;
    code += `}\r\n`;
    code += `\r\n`;

    code += `/* prettier-ignore */\r\n`;
    code += `export { \r\n`;
    for (const className in temp) {
        if (className.endsWith("Element")) {
            continue;
        }
        const data = temp[className];
        code += `    ${data.methodName},\r\n`;
    }

    code += `};\r\n`;

    write(path.join("src/material/utils/render-component.js"), code);
}

writeFiles();
