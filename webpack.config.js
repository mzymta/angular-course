var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ["css-loader", "autoprefixer-loader", "sass-loader"]
            })
             },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },
                {
                    loader: "autoprefixer-loader"
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "url-loader"
                }, {
                    loader: "svg-fill-loader"
                }]
            }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        alias: {
            'shared': path.resolve(__dirname, './app/shared')
        }
    },
    watch: true
};