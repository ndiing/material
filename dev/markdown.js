const fs = require("fs");
const { execSync } = require("child_process");

execSync("jsdoc -X -r src/material > dev/jsdoc.json");
let jsdoc = require("./jsdoc.json");

Object.groupBy = function (array, keyFunction) {
    return array.reduce((result, item) => {
        const key = keyFunction(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};

jsdoc = jsdoc.filter((doc) => !(doc.undocumented || doc.access === "private" || doc.inherited));

// console.log(jsdoc)

let grouped = Object.groupBy(jsdoc, (doc) => doc.meta?.filename);

let json = {};

for (let name in grouped) {
    let grouped2 = Object.groupBy(grouped[name], (doc) => doc.kind);

    // if(name!=='store.js'){continue}

    let markdown = "";

    if (grouped2["class"]) {
        let value = grouped2["class"];
        for (let val of value) {
            markdown += `# ${val.name}\r\n`;
            if (val.tags?.[0]?.value) {
                markdown += `The \`${val.name}\` interface represents an HTML \`<${val.tags?.[0]?.value}>\` element, `;
            }
            markdown += `${val.classdesc}\r\n`;
            markdown += `\r\n`;

            if (val?.description) {
                markdown += `## Constructor\r\n`;
                markdown += `${val.description}\r\n`;
                markdown += `\r\n`;
                if (val?.params?.length) {
                    markdown += `Name | Type | Default | Description\r\n`;
                    markdown += `--- | --- | --- | ---\r\n`;
                    for (let param of val?.params || []) {
                        markdown += `${[`\`${param.name}\``, param.type.names.map((name) => `\`${name}\``), param.defaultvalue,param.description].join(" | ")}\r\n`;
                    }
                    markdown += `\r\n`;
                }
                if (val?.properties?.length) {
                    markdown += `Name | Type | Default | Description\r\n`;
                    markdown += `--- | --- | --- | ---\r\n`;
                    for (let param of val?.properties || []) {
                        markdown += `${[`\`${param.name}\``, param.type.names.map((name) => `\`${name}\``),param.defaultvalue, param.description].join(" | ")}\r\n`;
                    }
                    markdown += `\r\n`;
                }
            }

            if (val?.augments?.length) {
                markdown += `## Inheritance\r\n`;
                markdown += `\`${val.augments?.[0]}\`\r\n`;
                markdown += `\r\n`;
            }

            if (val?.fires?.length) {
                markdown += `## Events\r\n`;
                markdown += `Listen to these events using \`addEventListener()\`, or by assigning an event listener to the \`@onEventName\` property of this interface.\r\n`;
                markdown += `\r\n`;
                markdown += `Name | Description\r\n`;
                markdown += `--- | ---\r\n`;
                for (let fire of val?.fires || []) {
                    let [longname, desc] = fire.split(" - ");
                    let [, name] = longname.split(":");
                    markdown += `${[`\`${name}\``, desc].join(" | ")}\r\n`;
                }
                markdown += `\r\n`;
            }

            if (val?.examples?.length) {
                markdown += `## Examples\r\n`;
                for (let example of val?.examples || []) {
                    markdown += `\`\`\`\r\n`;
                    markdown += `${example}\r\n`;
                    markdown += `\`\`\`\r\n`;
                }
                markdown += `\r\n`;
            }
        }
    }
    if (grouped2["member"]) {
        let value = grouped2["member"];

        if (grouped2?.["class"]?.[0]?.augments?.[0]) {
            markdown += `## Instance properties\r\n`;
            markdown += `This interface also inherits properties from its parent, \`${grouped2?.["class"]?.[0]?.augments?.[0]}\`.\r\n`;
        } else {
            markdown += `## Properties\r\n`;
        }
        markdown += `\r\n`;
        markdown += `Name | Type | Default | Description\r\n`;
        markdown += `--- | --- | --- | ---\r\n`;

        for (let val of value) {
            // markdown += `### ${val.name}\r\n`;
            // markdown += `${val.description}\r\n`;
            // markdown += `\r\n`;
            if (val?.properties?.length) {
                // markdown += `Name | Type | Default | Description\r\n`;
                // markdown += `--- | --- | --- | ---\r\n`;
                for (let prop of val?.properties || []) {
                    markdown += `${[`\`${prop.name}\``, prop.type.names.map((name) => `\`${name}\``),prop.defaultvalue, prop.description].join(" | ")}\r\n`;
                }
                // markdown += `\r\n`;
            } else {
                let acc = val.meta.code.paramnames?.length ? "set" : "get";
                markdown += `${[`\`${val.name}\``, `\`${acc}\``, '',val.description].join(" | ")}\r\n`;
            }
        }
    }
    if (grouped2["function"]) {
        let value = grouped2["function"];
        if (grouped2?.["class"]?.[0]?.augments?.[0]) {
            markdown += `## Instance methods\r\n`;
            markdown += `This interface also inherits methods from its parent, \`${grouped2?.["class"]?.[0]?.augments?.[0]}\`.\r\n`;
        } else {
            markdown += `## Methods\r\n`;
        }
        markdown += `\r\n`;
        for (let val of value) {
            markdown += `### \`${val.name}(${val.params?.map((param) => param.name)})\`\r\n`;
            markdown += `${val.description}\r\n`;
            markdown += `\r\n`;

            if (val?.params?.length) {
                markdown += `Name | Type | Default | Description\r\n`;
                markdown += `--- | --- | --- | ---\r\n`;
                for (let param of val?.params || []) {
                    console.log(param)
                    markdown += `${[`\`${param.name}\``, param.type.names.map((name) => `\`${name}\``),param.defaultvalue, param.description].join(" | ")}\r\n`;
                }
                markdown += `\r\n`;
            }
            markdown += `\r\n`;
            if (val?.properties?.length) {
                markdown += `Name | Type | Default | Description\r\n`;
                markdown += `--- | --- | --- | ---\r\n`;
                for (let param of val?.properties || []) {
                    markdown += `${[param.name, param.type.names.map((name) => `\`${name}\``),param.defaultvalue, param.description].join(" | ")}\r\n`;
                }
                markdown += `\r\n`;
            }
            if (val.returns?.length) {
                markdown += `${["Return", val.returns?.[0]?.type?.names.map((name) => `\`${name}\``),'', val.returns?.[0]?.description].join("\r\n")}\r\n`;
                markdown += `\r\n`;
            }
            if (val?.examples?.length) {
                markdown += `#### Examples\r\n`;
                for (let example of val?.examples || []) {
                    markdown += `\`\`\`\r\n`;
                    markdown += `${example}\r\n`;
                    markdown += `\`\`\`\r\n`;
                }
                markdown += `\r\n`;
            }
        }
    }
    if (grouped2["constant"]) {
        let value = grouped2["constant"];
        markdown += `## Constants\r\n`;
        if (grouped2?.["class"]?.[0]?.augments?.[0]) {
            markdown += `This interface also inherits methods from its parent, \`${grouped2?.["class"]?.[0]?.augments?.[0]}\`.\r\n`;
        }
        markdown += `\r\n`;
        for (let val of value) {
            markdown += `### \`${val.name}\`\r\n`;
            markdown += `${val.description}\r\n`;
            markdown += `\r\n`;

            if (val?.params?.length) {
                markdown += `Name | Type | Default | Description\r\n`;
                markdown += `--- | --- | --- | ---\r\n`;
                for (let param of val?.params || []) {
                    markdown += `${[`\`${param.name}\``, param.type.names.map((name) => `\`${name}\``),param.defaultvalue, param.description].join(" | ")}\r\n`;
                }
                markdown += `\r\n`;
            }
            markdown += `\r\n`;
            if (val?.properties?.length) {
                markdown += `Name | Type | Default | Description\r\n`;
                markdown += `--- | --- | --- | ---\r\n`;
                for (let param of val?.properties || []) {
                    markdown += `${[param.name, param.type.names.map((name) => `\`${name}\``), param.defaultvalue, param.description].join(" | ")}\r\n`;
                }
                markdown += `\r\n`;
            }
            if (val.returns?.length) {
                markdown += `${["Return", val.returns?.[0]?.type?.names.map((name) => `\`${name}\``), '',val.returns?.[0]?.description].join("\r\n")}\r\n`;
                markdown += `\r\n`;
            }
            if (val?.examples?.length) {
                markdown += `#### Examples\r\n`;
                for (let example of val?.examples || []) {
                    markdown += `\`\`\`\r\n`;
                    markdown += `${example}\r\n`;
                    markdown += `\`\`\`\r\n`;
                }
                markdown += `\r\n`;
            }
        }
    }

    json[name] = markdown;
}

fs.writeFileSync("./src/assets/jsdoc.json", JSON.stringify(json));
