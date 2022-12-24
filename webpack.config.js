const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        header: './src/header.js',
        home: './src/modules/home/home.js',
        menu: './src/modules/menu/menu.js',
        contact: './src/modules/contact/contact.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                loader: 'svg-inline-loader',
            }
        ],
    },
};