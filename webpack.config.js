module.exports = {
    entry: "./www/js/index.js",
    output: {
        path: "./www/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
}