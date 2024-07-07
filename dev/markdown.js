const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Fungsi untuk melakukan pengelompokan data berdasarkan kunci
function groupBy(array, keyGetter) {
    return array.reduce((result, item) => {
        const key = keyGetter(item);
        (result[key] = result[key] || []).push(item);
        return result;
    }, {});
}

// Fungsi untuk menghasilkan markdown dari data terkelompok
function generateMarkdown(groupedData) {
    let markdown = "";

    // Menambahkan judul utama berdasarkan nama kelas atau interface
    if (groupedData.class && groupedData.class.length > 0) {
        const className = groupedData.class[0];
        markdown += `# ${className.name}\n`;

        // Menambahkan deskripsi kelas atau interface
        if (className.classdesc) {
            markdown += `\n`;
            if (className.tags && className.tags.length > 0) {
                markdown += `The \`${className.name}\` interface represents a \`${className.tags[0].value}\` element in the DOM.`;
            }
            markdown += `${className.classdesc}\n\n`;
        }

        // Menambahkan contoh penggunaan jika tersedia
        if (className.examples) {
            markdown += `## Examples\n`;
            markdown += "```\n" + className.examples + "\n```\n\n";
        }
    }

    // Menambahkan properti instance jika ada
    if (groupedData.member && groupedData.member.filter((doc) => !doc.undocumented).length > 0) {
        markdown += `## Instance Properties\n`;
        if (groupedData.class[0].augments && groupedData.class[0].augments.length > 0) {
            markdown += `This interface also inherits properties from its parent, \`${groupedData.class[0].augments && groupedData.class[0].augments.length > 0 ? groupedData.class[0].augments[0] : ""}\`.\n\n`;
        }
        markdown += `| Name | Type | Description |\n`;
        markdown += `| --- | --- | --- |\n`;

        for (const doc of groupedData.member.filter((doc) => !doc.undocumented)) {
            markdown += `| ${doc.name} | ${doc.properties && doc.properties.length > 0 ? `\`${doc.properties[0].type.names[0]}\`` : ""} | ${doc.description || ""} |\n`;
        }
        markdown += `\n`;
    }

    // Menambahkan metode instance jika ada
    if (groupedData.function && groupedData.function.filter((doc) => !doc.undocumented).length > 0) {
        markdown += `## Instance Methods\n`;
        if (groupedData.class[0].augments && groupedData.class[0].augments.length > 0) {
            markdown += `This interface also inherits methods from its parent, \`${groupedData.class[0].augments && groupedData.class[0].augments.length > 0 ? groupedData.class[0].augments[0] : ""}\`.\n\n`;
        }
        markdown += `| Name | Parameters | Description |\n`;
        markdown += `| --- | --- | --- |\n`;

        for (const doc of groupedData.function.filter((doc) => !doc.undocumented)) {
            markdown += `| ${doc.name} | ${doc.meta && doc.meta.code.paramnames ? doc.meta.code.paramnames.map((param) => `\`${param}\``).join(", ") : ""} | ${doc.description || ""} |\n`;
        }
        markdown += `\n`;
    }

    // Menambahkan event jika ada
    if (groupedData.class && groupedData.class.length > 0 && groupedData.class[0].fires && groupedData.class[0].fires.length > 0) {
        markdown += `## Events\n`;
        markdown += `Listen to these events using \`addEventListener()\`, or by assigning an event listener to the @onEventName property of this interface.\n\n`;
        markdown += `| Name | Description |\n`;
        markdown += `| --- | --- |\n`;

        for (const doc of groupedData.class[0].fires) {
            const [longname, desc] = doc.split(" - ");
            const [, name] = longname.split("#event:");
            markdown += `| \`${name}\` | ${desc} |\n`;
        }
        markdown += `\n`;
    }

    // Menambahkan informasi inheritance jika ada
    if (groupedData.class && groupedData.class.length > 0 && groupedData.class[0].augments && groupedData.class[0].augments.length > 0) {
        markdown += `## Inheritance\n`;
        markdown += `\`${groupedData.class[0].augments[0]}\`\n\n`;
    }

    return markdown;
}

// Fungsi untuk membuka direktori dan menghasilkan dokumen markdown dari file-file JavaScript di dalamnya
async function open(dir) {
    try {
        for (let dirent of fs.readdirSync(dir, { withFileTypes: true })) {
            let curr = path.join(dir, dirent.name);
            if (dirent.isDirectory()) {
                await open(curr); // Rekursi untuk direktori
            } else {
                let { ext, name } = path.parse(curr);
                if (ext == ".js") {
                    console.log("Generating docs for " + name);
                    let data = execSync(`jsdoc -X ${curr}`);
                    try {
                        data = JSON.parse(data.toString());
                        const groupedData = groupBy(data, (doc) => doc.kind);
                        const generatedMarkdown = generateMarkdown(groupedData);

                        fs.writeFileSync(`./docs/${name}.md`, generatedMarkdown);
                    } catch (error) {
                        console.error(`Error parsing data for ${curr}: ${error.message}`);
                    }
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}: ${error.message}`);
    }
}

// Memulai proses generasi dokumentasi pada direktori tertentu
open("./src/material");
