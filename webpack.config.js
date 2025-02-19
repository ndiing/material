const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    cache: {
        type: "filesystem",
        buildDependencies: { config: [__filename] },
    },
    optimization: {
        usedExports: true,
        splitChunks: { chunks: "all" },
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        open: true,
        host: "localhost",
        compress: true,
        historyApiFallback: true,
        static: "./",
        hot: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new MiniCssExtractPlugin()],
    module: {
        rules: [
            { test: /\.(js|jsx)$/i, exclude: /node_modules/, use: ["thread-loader", { loader: "babel-loader", options: { cacheDirectory: true } }] },
            { test: /\.s[ac]ss$/i, use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"] },
            { test: /\.css$/i, use: [stylesHandler, "css-loader", "postcss-loader"] },
            { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: "asset" },
            { test: /\.html$/i, use: ["html-loader"] },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
        config.devtool = "eval-cheap-module-source-map";
    }
    return config;
};
