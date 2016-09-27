// webpack should be in the node_modules directory, install if not.
var webpack = require("webpack");

module.exports = {
    entry: "./js/index.js",
    output: {
        path: "./js",
        filename: "bundle.js",
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[loaders]'        
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "html"}
        ]
    },
    progress: true,
    colors: true
    // ,plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: true,
    //             drop_debugger: false
    //         }
    //     })
    // ]   
}