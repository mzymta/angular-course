var webpack = require('webpack');
var path = require('path');

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
            use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "autoprefixer-loader"
                }, {
                    loader: "sass-loader"
                }]
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
                test: /\.(png|jpg|svg)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }]
    },
    resolve: {
        alias: {
            'shared': path.resolve(__dirname, './app/shared')
        }
    },
    watch: true
};