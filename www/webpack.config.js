module.exports = {
    entry: "./js/index.js",
    output: {
        path: "./js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "html"}
        ]
    },
    progress: true,
    colors: true
}