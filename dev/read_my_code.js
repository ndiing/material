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
        [
            /babel.config\.json/,
            /dev/,
            /index\.html/,
            /node_modules/,
            /package-lock\.json/,
            /package\.json/,
            /postcss.config\.js/,
            /README\.md/,
            // /src/,
            /webpack.config\.js/,
        ],
        [
            // /.*/,
            /src\\material\\components\\text-field/,
            /src\\material\\components\\textarea/,
            // /src\\demo\\components\\button/,
        ],
    );

    let code = "";
    for (const name in result) {
        const value = result[name];

        code += `## ${name}\r\n`;
        code += `\r\n`;

        for (const { root, dir, base, ext, name, file, data } of value) {
            console.log(file);

            code += `### ${name}\r\n`;

            code += `${file}\r\n`;
            code += `\r\n`;

            code += `\`\`\`${ext.slice(1)}\r\n`;
            code += `${data}\r\n`;
            code += `\`\`\`\r\n`;
        }
    }

    write("./dev/read_my_code.md", code);
}

writeFiles();
