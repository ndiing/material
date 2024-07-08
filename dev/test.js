"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const response = execSync("jsdoc -X ./src/material/ripple/ripple.js");
const json = JSON.parse(response);

function groupBy(array, mapper) {
    return array.reduce((result, currentValue) => {
        const key = mapper(currentValue);
        if (!result.hasOwnProperty(key)) {
            result[key] = [];
        }
        result[key].push(currentValue);
        return result;
    }, {});
}

const grouped = groupBy(json, (item) => item.kind);

function generateMarkdown(grouped) {
    let markdown = "";
    
    for (const name in grouped) {
        const value = grouped[name];
        let extend = grouped.class?.[0]?.augments?.[0];

        if (name === "class") {
            for (const doc of value) {
                if (doc.undocumented) {
                    continue;
                }
                markdown += `# ${doc.name}\n`;
                if (doc.tags?.[0]?.value) {
                    markdown += `The \`${doc.name}\` interface represents a \`${doc.tags[0].value}\` element in the DOM. `;
                }
                markdown += `${doc.classdesc}\n\n`;

                if (doc.params?.length) {
                    markdown += `## Constructor\n`;
                    markdown += `${doc.description}\n`;
                    markdown += `\n`;
                    markdown += `name | type | desc\n`;
                    markdown += `--- | --- | --- \n`;
                    for(const par of doc.params){
                        markdown += `${par.name} | `;
                        markdown += `${par.type.names} | `;
                        markdown += `${par.description}\n`;
                    }
                    markdown += `\n`;
                }

                if (doc.augments?.length) {
                    markdown += `## Inheritance\n`;
                    markdown += doc.augments.map(ag => `${ag}\n`).join('');
                    markdown += `\n`;
                }

                if (doc.fires?.length) {
                    markdown += `## Events\n`;
                    markdown += `Listen to these events using \`addEventListener()\`, or by assigning an event listener to the \`@onEventName\` property of this interface.\n\n`;
                    markdown += `name | desc\n`;
                    markdown += `--- | ---\n`;
                    doc.fires.forEach(fire => {
                        const [longname, desc] = fire.split(" - ");
                        const [, name] = longname.split(":");
                        markdown += `${name} | ${desc}\n`;
                    });
                    markdown += `\n`;
                }

                if (doc.examples?.length) {
                    markdown += `## Examples\n\n`;
                    doc.examples.forEach(ex => markdown += `\`\`\`${ex}\`\`\`\n\n`);
                }
            }
        }

        if (name === "member") {
            for (const doc of value) {
                if (doc.undocumented || !doc.properties) {
                    continue;
                }
                markdown += `## Instance properties\n`;
                if (extend) {
                    markdown += `This interface also inherits properties from its parent, \`${extend}\`. `;
                }
                markdown += `${doc.description}\n\n`;

                markdown += `name | type | desc\n`;
                markdown += `--- | --- | ---\n`;
                doc.properties.forEach(prop => {
                    markdown += `${prop.name} | ${prop.type.names} | ${prop.description}\n`;
                });
            }

            for (const doc of value) {
                if (doc.undocumented || doc.properties?.length) {
                    continue;
                }
                markdown += `${doc.name} | Read only | ${doc.description}\n`;
            }
        }

        if (name === "function" && value.some(doc => !doc.undocumented)) {
            markdown += `## Instance methods\n`;
            if (extend) {
                markdown += `This interface also inherits methods from its parent, \`${extend}\`.\n\n`;
            }
            markdown += `name | params | desc\n`;
            markdown += `--- | --- | ---\n`;
            value.forEach(doc => {
                if (!doc.undocumented) {
                    markdown += `${doc.name} | ${doc.meta?.code?.paramnames} | ${doc.description}\n`;
                }
            });
        }

        markdown += `\n`;
        // Handle other cases like "constant", "package", etc. if needed
    }

    return markdown;
}

const md = generateMarkdown(grouped);
console.log(md);
