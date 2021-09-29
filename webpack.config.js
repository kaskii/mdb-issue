require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    entry: path.resolve(__dirname, "./src/client/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist/client"),
        filename: "bundle.[fullhash].js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                isDevelopment && require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader"
                ],
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        compress: true,
        open: true,
        historyApiFallback: true,
        port: 9000,
        hot: true
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new Dotenv()
    ].filter(Boolean)
};
