const fs = require("fs");
const path = require("path");
const {default:fetch} = require("C:/Users/Ndiing/Documents/ndiing/aws/src/lib/fetch.js");
/**
 * Checks if the given value is not undefined or null.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not undefined or null, otherwise false.
 */
function notNull(value) {
    return value !== undefined && value !== null;
}

/**
 * Checks if the given value is not empty.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not null, undefined, or an empty string, otherwise false.
 */
 function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * Attempts to parse the value into an integer.
 * @param {*} value - The value to parse.
 * @returns {?number} Returns the parsed integer if successful, otherwise null.
 */
 function parseNumber(value) {
    value = parseInt(value);
    return isNaN(value) ? null : value;
}

/**
 * Converts a string to PascalCase.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to PascalCase.
 */
 function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase()).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camelCase.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to camelCase.
 */
 function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $i) => ($i === 0 ? $2.toLowerCase() : $2.toUpperCase())).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to snake_case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to snake_case.
 */
 function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "_" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "_")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to kebab-case.
 */
 function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "-" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "-")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Converts a string to Title Case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to Title Case.
 */
 function toTitleCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase())
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}


const list = [
    // "src/material/material.scss",

    // // foundations
    // "src/material/foundation/color.scss",
    // "src/material/foundation/elevation.scss",
    // "src/material/foundation/icon.scss",
    // "src/material/foundation/motion.scss",
    // "src/material/foundation/shape.scss",
    // "src/material/foundation/typography.scss",
    // "src/material/foundation/layout.scss",

    // // router
    // "src/material/foundation/router.scss",
    // "src/material/foundation/router.js",
    // // outlet
    // "src/material/foundation/outlet.scss",
    // "src/material/foundation/outlet.js",
    // // component
    // "src/material/foundation/component.scss",
    // "src/material/foundation/component.js",
    // store
    // "src/material/foundation/store.scss",
    // "src/material/foundation/store.js",
    // popover
    // "src/material/foundation/popover.scss",
    // "src/material/foundation/popover.js",
    // // ripple
    // "src/material/foundation/ripple.scss",
    // "src/material/foundation/ripple.js",
    // // virtual-scroll
    // "src/material/foundation/virtual-scroll.scss",
    // "src/material/foundation/virtual-scroll.js",
    // // cdk (component dev kit)
    // "src/material/foundation/cdk.scss",
    // "src/material/foundation/cdk.js",

    // components
    "src/material/bottom-app-bar/bottom-app-bar.scss",
    "src/material/bottom-app-bar/bottom-app-bar.js",

    "src/material/top-app-bar/top-app-bar.scss",
    "src/material/top-app-bar/top-app-bar.js",

    "src/material/badge/badge.scss",
    "src/material/badge/badge.js",

    // "src/material/button/button.scss",
    // "src/material/button/button.js",

    "src/material/fab/fab.scss",
    "src/material/fab/fab.js",

    "src/material/extended-fab/extended-fab.scss",
    "src/material/extended-fab/extended-fab.js",

    "src/material/icon-button/icon-button.scss",
    "src/material/icon-button/icon-button.js",

    "src/material/segmented-button/segmented-button.scss",
    "src/material/segmented-button/segmented-button.js",

    "src/material/card/card.scss",
    "src/material/card/card.js",

    "src/material/carousel/carousel.scss",
    "src/material/carousel/carousel.js",

    "src/material/checkbox/checkbox.scss",
    "src/material/checkbox/checkbox.js",

    "src/material/chip/chip.scss",
    "src/material/chip/chip.js",

    "src/material/date-picker/date-picker.scss",
    "src/material/date-picker/date-picker.js",

    "src/material/dialog/dialog.scss",
    "src/material/dialog/dialog.js",

    "src/material/divider/divider.scss",
    "src/material/divider/divider.js",

    "src/material/list/list.scss",
    "src/material/list/list.js",

    "src/material/menu/menu.scss",
    "src/material/menu/menu.js",

    "src/material/navigation-bar/navigation-bar.scss",
    "src/material/navigation-bar/navigation-bar.js",

    "src/material/navigation-drawer/navigation-drawer.scss",
    "src/material/navigation-drawer/navigation-drawer.js",

    "src/material/navigation-rail/navigation-rail.scss",
    "src/material/navigation-rail/navigation-rail.js",

    "src/material/progress-indicator/progress-indicator.scss",
    "src/material/progress-indicator/progress-indicator.js",

    "src/material/radio-button/radio-button.scss",
    "src/material/radio-button/radio-button.js",

    "src/material/search/search.scss",
    "src/material/search/search.js",

    "src/material/bottom-sheet/bottom-sheet.scss",
    "src/material/bottom-sheet/bottom-sheet.js",

    "src/material/side-sheet/side-sheet.scss",
    "src/material/side-sheet/side-sheet.js",

    "src/material/slider/slider.scss",
    "src/material/slider/slider.js",

    "src/material/snackbar/snackbar.scss",
    "src/material/snackbar/snackbar.js",

    "src/material/switch/switch.scss",
    "src/material/switch/switch.js",

    "src/material/tab/tab.scss",
    "src/material/tab/tab.js",

    "src/material/text-field/text-field.scss",
    "src/material/text-field/text-field.js",

    "src/material/time-picker/time-picker.scss",
    "src/material/time-picker/time-picker.js",

    "src/material/tooltip/tooltip.scss",
    "src/material/tooltip/tooltip.js",
];

const remove_list = [];

function read(file, data) {
    try {
        data = fs.readFileSync(file, {
            encoding: "utf8",
        });
    } catch (error) {
        write(file, data);
    }
    return data;
}
function write(file, data) {
    const dir = path.dirname(file);
    try {
        fs.readdirSync(dir);
    } catch (error) {
        fs.mkdirSync(dir, {
            recursive: true,
        });
    }
    fs.writeFileSync(file, data);
}

function init() {
    const cwd = process.cwd();

    for (const item of remove_list) {
        const exist = fs.existsSync(path.join(cwd, item));
        if (exist) {
            fs.unlinkSync(path.join(cwd, item));
        }
    }

    let scss_code = "";
    let js_code = "";

    // let overwrite=1
    for (const item of list) {
        // const exist=fs.existsSync(path.join(cwd, item))
        // if(!exist){
            // console.log(path.join(cwd, item))
        // write(path.join(cwd, item), "");
        // }

        const item2 = item.replace(/src\/[^/]+\//, "");
        const item3=item2
        .replace(/^[\w-]+?\//,'')
        .replace(/\.scss$/,'')
        .replace(/\.js$/,'')
        if (["material.scss"].includes(item2)) continue;
        if (item2.endsWith(".scss")) {
            scss_code += `@import "./${item2}";\r\n`;

            let code = read(path.join(cwd,'src/material/button/button.scss'))
            code=code.replaceAll('button',toKebabCase(item3))

            write(path.join(cwd, item), code);
        }
        if (item2.endsWith(".js")) {
            js_code += `import "./${item2}";\r\n`;

            let code = read(path.join(cwd,'src/material/button/button.js'))
            code=code.replaceAll('button',toKebabCase(item3))
            code=code.replaceAll('Button',toPascalCase(item3))

            write(path.join(cwd, item), code);
        }
    }
    // // if(overwrite)
    // write(path.join(cwd, list[0]), scss_code);
    // write(path.join(cwd, list[0].replace(/\.scss$/, ".js")), js_code);
}
// init();

async function fonts(){
    const list=[
        "https://fonts.gstatic.com/s/materialsymbolsoutlined/v156/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.0.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.1.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.2.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.3.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.4.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.5.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.6.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.7.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.8.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.9.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.10.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9X6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9e6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9b6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9W6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9Z6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9V6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9U6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9a6VI.woff2",
    ]

    let count=0
    for(const item of list){
        try {
            const url=new URL(item)
            const [,s,family,v,name]=(url.pathname.split('/'))
            // console.log(family,name)
            write('./src/material/foundation/fonts/'+family+'/'+v+'/'+name,'')
            const response=await fetch(url.toString())
            const stream=fs.createWriteStream('./src/material/foundation/fonts/'+family+'/'+v+'/'+name)
            response.body.pipe(stream)
            console.log(family,name,count,list.length)
            ++count
        } catch (error) {
            console.log(error)
        }
    }
}
// fonts()