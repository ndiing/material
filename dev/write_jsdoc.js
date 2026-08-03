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
            //
            /src\\material\\base.*\.js/,
            /src\\material\\components.*\.js/,
            /src\\material\\controller.*\.js/,
            /src\\material\\core.*\.js/,
            /src\\material\\shared.*\.js/,
        ],
    );

    for (const name in result) {
        const value = result[name];

        for (const { root, dir, base, ext, name, file, data } of value) {
            console.log();
            console.log(file);
            const className=(data.match(/class (\w+)/)?.[1])
            const extendName = (data.match(/extends (\w+)/)?.[1])
            const eventNameSet=new Set()
            for(const [,eventName] of data.matchAll(/this\.emit\("(\w+)", \{(.*)\}\)/gm)){
                eventNameSet.add(eventName)
            }
            console.log({
                className,
                extendName,
                eventNameSet
            })

            // break;
        }

        // break;
    }
}

writeFiles();
