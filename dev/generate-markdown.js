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
                if (doc.undocumented) {
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
                        markdown += `${par.type.names.map(a=>`\`${a}\``)} | `;
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
                    doc.examples.forEach((ex) => (markdown += `\`\`\`${ex}\`\`\`\n\n`));
                }
            }
        }

        if (name === "member") {
            let hasHeader;
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
                hasHeader = true;
                doc.properties.forEach((prop) => {
                    markdown += `\`${prop.name}\` | ${prop.type.names.map((na) => `\`${na}\``)} | ${prop.description}\n`;
                });
            }

            if (!hasHeader && value.filter((doc) => !(doc.undocumented || doc.properties?.length)).length > 0) {
                markdown += `## Instance properties\n`;
                if (extend) {
                    markdown += `This interface also inherits properties from its parent, \`${extend}\`. \n\n`;
                }
                // markdown += `${doc.description}\n\n`;

                markdown += `name | type | desc\n`;
                markdown += `--- | --- | ---\n`;
            }
            for (const doc of value) {
                if (doc.undocumented || doc.properties?.length) {
                    continue;
                }
                markdown += `\`${doc.name}\` | \`ReadOnly\` | ${doc.description}\n`;
            }
        }

        if (name === "function" && value.some((doc) => !doc.undocumented)) {
            markdown += `## Instance methods\n`;
            if (extend) {
                markdown += `This interface also inherits methods from its parent, \`${extend}\`.\n\n`;
            }
            markdown += `name | params | desc\n`;
            markdown += `--- | --- | ---\n`;
            value.forEach((doc) => {
                if (!doc.undocumented) {
                    markdown += `\`${doc.name}\` | ${doc.meta?.code?.paramnames.map((na) => `\`${na}\``)} | ${doc.description}\n`;
                }
            });
        }

        markdown += `\n`;
        // Handle other cases like "constant", "package", etc. if needed
    }

    return markdown;
}
let docs = {};

// Fungsi untuk membuka direktori dan menghasilkan dokumen markdown dari file-file JavaScript di dalamnya
async function open(dir) {
    try {
        const dirents = fs.readdirSync(dir, { withFileTypes: true });
        for (let dirent of dirents) {
            let curr = path.join(dir, dirent.name);
            if (dirent.isDirectory()) {
                await open(curr); // Rekursi untuk direktori
            } else {
                let { ext, name } = path.parse(curr);
                if (ext == ".js") {
                    if (argvName && !name.includes(argvName)) continue;
                    console.log("Generating docs for " + name);
                    let data = execSync(`jsdoc -X ${curr}`);
                    try {
                        data = JSON.parse(data.toString());
                        if (!Array.isArray(data) || data.length === 0) {
                            console.error(`No valid data found for ${curr}`);
                            continue;
                        }

                        const grouped = groupBy(data, (item) => item.kind);
                        const md = generateMarkdown(grouped);
                        // console.log(md);

                        // console.log(docs)
                        docs[name] = md;
                        // fs.writeFileSync("./docs/docs.json", JSON.stringify(docs));

                        // fs.writeFileSync(`./docs/${name}.md`, md);
                    } catch (error) {
                        console.log(error);
                        console.error(`Error parsing data for ${curr}: ${error.message}`);
                    }
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}: ${error.message}`);
    }
}

(async () => {
    // Memulai proses generasi dokumentasi pada direktori tertentu
    await open("./src/material", docs);

    fs.writeFileSync("./docs/docs.json", JSON.stringify(docs));
})();
