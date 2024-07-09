const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const [, , argvName] = process.argv;

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

function generateMarkdown(grouped) {
    let markdown = "";

    for (const name in grouped) {
        const value = grouped[name];
        let extend = grouped.class?.[0]?.augments?.[0];

        if (name === "class") {
            for (const doc of value) {
                if (doc.undocumented || doc.access == "private") {
                    continue;
                }
                markdown += `# ${doc.name}\n`;
                if (doc.tags?.[0]?.value) {
                    markdown += `The \`${doc.name}\` interface represents a \`<${doc.tags[0].value}>\` element in the DOM. `;
                }
                markdown += `${doc.classdesc}\n\n`;

                if (doc.params?.length) {
                    markdown += `## Constructor\n`;
                    markdown += `${doc.description}\n`;
                    markdown += `\n`;
                    markdown += `name | type | desc\n`;
                    markdown += `--- | --- | --- \n`;
                    for (const par of doc.params) {
                        markdown += `\`${par.name}\` | `;
                        markdown += `${par.type.names.map((a) => `\`${a}\``)} | `;
                        markdown += `${par.description}\n`;
                    }
                    markdown += `\n`;
                }

                if (doc.augments?.length) {
                    markdown += `## Inheritance\n`;
                    markdown += doc.augments.map((ag) => `\`${ag}\`\n`).join("");
                    markdown += `\n`;
                }

                if (doc.fires?.length) {
                    markdown += `## Events\n`;
                    markdown += `Listen to these events using \`addEventListener()\`, or by assigning an event listener to the \`@onEventName\` property of this interface.\n\n`;
                    markdown += `name | desc\n`;
                    markdown += `--- | ---\n`;
                    doc.fires.forEach((fire) => {
                        const [longname, desc] = fire.split(" - ");
                        const [, name] = longname.split(":");
                        markdown += `\`${name}\` | ${desc}\n`;
                    });
                    markdown += `\n`;
                }

                if (doc.examples?.length) {
                    markdown += `## Examples\n\n`;
                    for (const ex of doc.examples) {
                        markdown += `\`\`\`\n`;
                        markdown += `${ex}\n`;
                        markdown += `\`\`\`\n`;
                    }
                    markdown += `\n`;
                }
            }
        }

        if (name === "member") {
            let hasHeader;
            for (const doc of value) {
                if (doc.undocumented || doc.access == "private" || !doc.properties) {
                    continue;
                }
                markdown += `## Instance properties\n`;
                if (extend) {
                    markdown += `This interface also inherits properties from its parent, \`${extend}\`. `;
                }
                markdown += `${doc.description}\n\n`;

                markdown += `name | type | desc\n`;
                markdown += `--- | --- | ---\n`;
                hasHeader = true;
                doc.properties.forEach((prop) => {
                    markdown += `\`${prop.name}\` | ${prop.type.names.map((na) => `\`${na}\``)} | ${prop.description}\n`;
                });
            }

            if (!hasHeader && value.filter((doc) => !(doc.undocumented || doc.access == "private" || doc.properties?.length)).length > 0) {
                markdown += `## Instance properties\n`;
                if (extend) {
                    markdown += `This interface also inherits properties from its parent, \`${extend}\`. \n\n`;
                }

                markdown += `name | type | desc\n`;
                markdown += `--- | --- | ---\n`;
            }
            for (const doc of value) {
                if (doc.undocumented || doc.access == "private" || doc.properties?.length) {
                    continue;
                }
                markdown += `\`${doc.name}\` | \`ReadOnly\` | ${doc.description}\n`;
            }
        }

        if (name === "function" && value.some((doc) => !doc.undocumented && doc.access !== "private")) {
            markdown += `## Instance methods\n`;
            if (extend) {
                markdown += `This interface also inherits methods from its parent, \`${extend}\`.\n\n`;
            }
            markdown += `name | params | desc\n`;
            markdown += `--- | --- | ---\n`;
            value.forEach((doc) => {
                if (!doc.undocumented && doc.access !== "private") {
                    markdown += `\`${doc.name}\` | ${doc.meta?.code?.paramnames.map((na) => `\`${na}\``)} | ${doc.description}\n`;
                }
            });
        }

        markdown += `\n`;
    }

    return markdown;
}
let docs = JSON.parse(fs.readFileSync("./docs/docs.json", { encoding: "utf8" }) || "{}");

async function open(dir) {
    try {
        const dirents = fs.readdirSync(dir, { withFileTypes: true });
        for (let dirent of dirents) {
            let curr = path.join(dir, dirent.name);
            if (dirent.isDirectory()) {
                await open(curr);
            } else {
                let { ext, name } = path.parse(curr);
                if (ext == ".js") {
                    if (argvName && !name.includes(argvName)) continue;
                    let data = execSync(`jsdoc -X ${curr}`);
                    try {
                        data = JSON.parse(data.toString());
                        if (!Array.isArray(data) || data.length === 0) {
                            continue;
                        }

                        const grouped = groupBy(data, (item) => item.kind);
                        const md = generateMarkdown(grouped);

                        docs[name] = md;

                        fs.writeFileSync(`./docs/${name}.md`, md);
                    } catch (error) {}
                }
            }
        }
    } catch (error) {}
}

(async () => {
    await open("./src/material", docs);

    fs.writeFileSync("./src/assets/docs.json", JSON.stringify(docs));
})();
