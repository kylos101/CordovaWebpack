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
            {test: /\.css$/, loader: "style!css"}
            ,{test: /\.html$/, loader: "html"} 
            ,{test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]"}
        ]
    },
    progress: true,
    colors: true
    ,plugins: [
        new webpack.ProvidePlugin({
        "$":"jquery",
        "jQuery":"jquery",
        "window.jQuery":"jquery"
        }) 
    ],
    resolve : {
        alias: {              
            "bootstrap-css": "../css/vendor/bootstrap/bootstrap.min.css",
            // "bootstrap-fonts": "../css/vendor/bootstrap/fonts/*",
        }
    }
}