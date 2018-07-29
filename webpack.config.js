let htmlWebPackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        port: 3000,
        hot: true
    }
}
