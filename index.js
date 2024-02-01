const fs = require("fs");
const path = require("path");

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

// // Usage example
// var data={}
// data=read('./test.json',JSON.stringify(data))
// console.log(data)

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

// // Usage example
// write('./test.json',JSON.stringify({}))

function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2) => $2.toUpperCase()).replace(/[^a-zA-Z0-9]+$/g, "");
}

function toKebabCase(string) {
    return string
        .replace(/[^a-zA-Z0-9]+([a-zA-Z])/g, ($, $1) => $1.toUpperCase())
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "-" + $2)
        .replace(/[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

// // Usage example
// var data=[
//     'PascalCasePascalCase',
//     'kebab-case-kebab-case',
//     '-_PascalCasePascalCase_-',
//     '-_kebab-case--kebab-case_-',
//     ' _PascalCasePascalCase_ ',
//     '- kebab-case--kebab-case -',
// ]
// // data=data.map(toPascalCase)
// data=data.map(toKebabCase)
// console.log(data)

// // material
// write(`./src/material/material.scss`,'')
// write(`./src/material/material.js`,'')

// // base

// // controller
// write(`./src/material/base/controller.scss`,'')
// write(`./src/material/base/controller.js`,'')

// // example-controller
// write(`./src/material/base/example-controller.scss`,'')
// write(`./src/material/base/example-controller.js`,'')

// // component
// write(`./src/material/base/component.scss`,'')
// write(`./src/material/base/component.js`,'')

// // example-component
// write(`./src/material/base/example-component.scss`,'')
// write(`./src/material/base/example-component.js`,'')

// // example-dev
// write(`./src/material/base/example-dev.scss`,'')
// write(`./src/material/base/example-dev.js`,'')

// // dev
// write(`./src/dev/dev.scss`,'')
// write(`./src/dev/dev.js`,'')

function createComponent(name) {
    let material_scss = read(`./src/material/material.scss`, "");
    let material_js = read(`./src/material/material.js`, "");
    material_scss = material_scss.split(/\r\n/).filter(Boolean);
    material_js = material_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let material_scss_index = material_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let material_js_index = material_js.indexOf(`import "./${file_name}/${file_name}.js";`);
    if (material_scss_index !== -1 && material_js_index !== -1) {
        console.log("Components already exist");
        return;
    }
    material_scss.push(`@import "./${file_name}/${file_name}.scss";`);
    material_js.push(`import "./${file_name}/${file_name}.js";`);

    let example_component_scss = read(`./src/material/base/example-component.scss`);
    let example_component_js = read(`./src/material/base/example-component.js`);
    example_component_scss = example_component_scss.replaceAll("example", file_name).replaceAll("Example", class_name);
    example_component_js = example_component_js.replaceAll("example", file_name).replaceAll("Example", class_name);

    write(`./src/material/${file_name}/${file_name}.scss`, example_component_scss);
    write(`./src/material/${file_name}/${file_name}.js`, example_component_js);

    write(`./src/material/material.scss`, material_scss.join("\r\n"));
    write(`./src/material/material.js`, material_js.join("\r\n"));

    console.log("Components created");
}
function deleteComponent(name) {
    let material_scss = read(`./src/material/material.scss`, "");
    let material_js = read(`./src/material/material.js`, "");
    material_scss = material_scss.split(/\r\n/).filter(Boolean);
    material_js = material_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let material_scss_index = material_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let material_js_index = material_js.indexOf(`import "./${file_name}/${file_name}.js";`);
    if (material_scss_index == -1 && material_js_index == -1) {
        console.log(`There is no component`);
        return;
    }

    fs.rmSync(`./src/material/${file_name}`, { recursive: true });

    material_scss.splice(material_scss_index, 1);
    material_js.splice(material_js_index, 1);
    write(`./src/material/material.scss`, material_scss.join("\r\n"));
    write(`./src/material/material.js`, material_js.join("\r\n"));
    console.log("Component deleted");
}

function createController(name) {
    let material_scss = read(`./src/material/material.scss`, "");
    let material_js = read(`./src/material/material.js`, "");
    material_scss = material_scss.split(/\r\n/).filter(Boolean);
    material_js = material_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let material_scss_index = material_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let material_js_index = material_js.indexOf(`import "./${file_name}/${file_name}.js";`);
    if (material_scss_index !== -1 && material_js_index !== -1) {
        console.log("Controllers already exist");
        return;
    }
    material_scss.unshift(`@import "./${file_name}/${file_name}.scss";`);
    material_js.unshift(`import "./${file_name}/${file_name}.js";`);

    let example_controller_scss = read(`./src/material/base/example-controller.scss`);
    let example_controller_js = read(`./src/material/base/example-controller.js`);
    example_controller_scss = example_controller_scss.replaceAll("example", file_name).replaceAll("Example", class_name);
    example_controller_js = example_controller_js.replaceAll("example", file_name).replaceAll("Example", class_name);

    write(`./src/material/${file_name}/${file_name}.scss`, example_controller_scss);
    write(`./src/material/${file_name}/${file_name}.js`, example_controller_js);

    write(`./src/material/material.scss`, material_scss.join("\r\n"));
    write(`./src/material/material.js`, material_js.join("\r\n"));

    console.log("Controllers created");
}
function deleteController(name) {
    let material_scss = read(`./src/material/material.scss`, "");
    let material_js = read(`./src/material/material.js`, "");
    material_scss = material_scss.split(/\r\n/).filter(Boolean);
    material_js = material_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let material_scss_index = material_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let material_js_index = material_js.indexOf(`import ${class_name}Component from "./${file_name}/${file_name}.js";`);
    if (material_scss_index == -1 && material_js_index == -1) {
        console.log(`There is no controller`);
        return;
    }

    fs.rmSync(`./src/material/${file_name}`, { recursive: true });

    material_scss.splice(material_scss_index, 1);
    material_js.splice(material_js_index, 1);
    write(`./src/material/material.scss`, material_scss.join("\r\n"));
    write(`./src/material/material.js`, material_js.join("\r\n"));
    console.log("Controller deleted");
}

function createDev(name) {
    let dev_scss = read(`./src/dev/dev.scss`, "");
    let dev_js = read(`./src/dev/dev.js`, "");
    dev_scss = dev_scss.split(/\r\n/).filter(Boolean);
    dev_js = dev_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let dev_scss_index = dev_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let dev_js_index = dev_js.indexOf(`import ${class_name}Component from "./${file_name}/${file_name}.js";`);
    if (dev_scss_index !== -1 && dev_js_index !== -1) {
        console.log("Devs already exist");
        return;
    }
    dev_scss.unshift(`@import "./${file_name}/${file_name}.scss";`);
    dev_js.unshift(`import ${class_name}Component from "./${file_name}/${file_name}.js";`);

    let example_dev_scss = read(`./src/material/base/example-dev.scss`);
    let example_dev_js = read(`./src/material/base/example-dev.js`);
    example_dev_scss = example_dev_scss.replaceAll("example", file_name).replaceAll("Example", class_name);
    example_dev_js = example_dev_js.replaceAll("example", file_name).replaceAll("Example", class_name);

    write(`./src/dev/${file_name}/${file_name}.scss`, example_dev_scss);
    write(`./src/dev/${file_name}/${file_name}.js`, example_dev_js);

    write(`./src/dev/dev.scss`, dev_scss.join("\r\n"));
    write(`./src/dev/dev.js`, dev_js.join("\r\n"));

    console.log("Devs created");
}
function deleteDev(name) {
    let dev_scss = read(`./src/dev/dev.scss`, "");
    let dev_js = read(`./src/dev/dev.js`, "");
    dev_scss = dev_scss.split(/\r\n/).filter(Boolean);
    dev_js = dev_js.split(/\r\n/).filter(Boolean);
    let file_name = toKebabCase(name);
    let class_name = toPascalCase(name);
    let dev_scss_index = dev_scss.indexOf(`@import "./${file_name}/${file_name}.scss";`);
    let dev_js_index = dev_js.indexOf(`import ${class_name}Component from "./${file_name}/${file_name}.js";`);
    if (dev_scss_index == -1 && dev_js_index == -1) {
        console.log(`There is no dev`);
        return;
    }

    fs.rmSync(`./src/dev/${file_name}`, { recursive: true });

    dev_scss.splice(dev_scss_index, 1);
    dev_js.splice(dev_js_index, 1);
    write(`./src/dev/dev.scss`, dev_scss.join("\r\n"));
    write(`./src/dev/dev.js`, dev_js.join("\r\n"));
    console.log("Dev deleted");
}

const cli = {
    component: {
        create: createComponent,
        delete: deleteComponent,
    },
    controller: {
        create: createController,
        delete: deleteController,
    },
    dev: {
        create: createDev,
        delete: deleteDev,
    },
};

const [, , method = "", type = "", name = ""] = process.argv;

if (method && type && name) {
    console.log("running command", method, type, name);
    cli[type][method](name);
}
