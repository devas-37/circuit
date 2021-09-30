module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    watchOptions: {
        ignored: /node_modules/
    },
    entry: "./src/index.ts",
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts"]
    }
};