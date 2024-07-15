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



function open(pathname) {
    const dirents = fs.readdirSync(pathname, { withFileTypes: true });
    for (const dirent of dirents) {
        const curr = pathname + "/" + dirent.name;
        if (dirent.isDirectory()) {
            open(curr);
        } else {
            const extname = path.extname(curr);
            const {name} = path.parse(curr);
            if(extname==='.txt'){continue}
            const stat=fs.statSync(curr)
            code+=`[${name+extname}](${curr}) | **${Math.ceil(stat.size/1024)+'KB'}**\n`
        }
    }
}
let code=''
code+='## Bundle Sizes\n'
code+='\n'
code+='File | Size\n'
code+='--- | ---\n'
open("./dist");
console.log(code)