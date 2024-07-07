const fs = require("fs");
const path = require("path");

function read(file, data) {
    try {
        data = fs.readFileSync(file, {
            encoding: "utf8",
        });
    } catch (error) {}
    return data;
}
function write(file, data) {
    let dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, {
            recursive: true,
        });
    }
    fs.writeFileSync(file, data);
}

async function open(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
        for (let dirent of dirents) {
            let curr = path.join(dir, dirent.name);
            if (dirent.isDirectory()) {
                await open(curr); // Rekursi untuk direktori
            } else {
                let { ext, name } = path.parse(curr);
                let docs=read(curr)
                data[name]=docs
            }
        }
}
let data={}
open('./docs')

fs.writeFileSync('./docs/docs.json',JSON.stringify(data))