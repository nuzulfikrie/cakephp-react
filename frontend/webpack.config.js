const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        'events-index': path.resolve(__dirname, 'src/events-index/index.js'),
        'events-view': path.resolve(__dirname, 'src/events-view/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../app/webroot/js/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
module.exports = config;
