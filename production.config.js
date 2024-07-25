const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function generateEntries() {
    const componentsDir = path.resolve(__dirname, "src/material");
    const componentFolders = fs
        .readdirSync(componentsDir, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);

    const entries = {};
    componentFolders.forEach((folder) => {
        const jsPath = path.resolve(componentsDir, `${folder}/${folder}.js`);
        const scssPath = path.resolve(componentsDir, `${folder}/${folder}.scss`);

        if (fs.existsSync(jsPath)) {
            entries[folder] = jsPath;
        }
    });

    entries["material"] = ["./src/material/material.scss", "./src/material/material.js"];

    return entries;
}

module.exports = {
    experiments: {
        outputModule: true,
    },

    entry: generateEntries(),
    output: {
        filename: "[name]/[name].js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "module",
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/[name].css",
        }),
    ],
    optimization: {
        minimize: true,
    },
};
