const fs = require("fs");
const path = require("path");

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
function clean(text){
    text=text
    .replace(/(^.*?\{)/gm,'\r\n$1')
    return text
}
function open(pathname) {
    const dirents = fs.readdirSync(pathname, { withFileTypes: true });
    for (const dirent of dirents) {
        const curr = pathname + "/" + dirent.name;
        if (dirent.isDirectory()) {
            open(curr);
        } else {
            const extname = path.extname(curr);
            if (extname === ".scss") {
                if (argvName && !curr.includes(argvName)) {
                    continue;
                }
                const text = read(curr);
                console.log('clean '+curr)
                write(curr,clean(text))
            }
        }
    }
}
open("./src/material");
