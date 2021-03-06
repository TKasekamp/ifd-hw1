var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './styles/app.css'
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    devtool: "inline-source-map",
    output: {
        filename: 'dist/bundle.js',
        path: path.join(__dirname, '/'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader'),
            },
            {
                test: /\.js/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/app.css',
            allChunks: true
        })
    ]
};
