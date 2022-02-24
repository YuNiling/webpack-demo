const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'author library',
        }),
    ],
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
};