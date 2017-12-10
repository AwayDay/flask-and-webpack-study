var webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'static/js/[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })  
    ]
};