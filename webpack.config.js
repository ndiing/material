const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "demo"),
        filename: isProduction ? "[name].[contenthash].js" : "[name].js",
        clean: true,
    },
    devServer: {
        open: true,
        host: "localhost",
        historyApiFallback: true,
        static: "./",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: isProduction ? "[name].[contenthash].css" : "[name].css",
        }),
        new PurgeCSSPlugin({
            paths: glob.sync("./src/**/*.{js,jsx}", { nodir: true }),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: "single",
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
    cache: {
        type: "filesystem",
    },
    devtool: true ? "source-map" : "eval-cheap-module-source-map",
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};
