
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: "./src/index.ts",
        gui: './src/pp.ts'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts[x]?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: [".ts"]
    },
};