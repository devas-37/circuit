const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: "development",
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: "./src/index.ts",
        gui: './src/pp.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'element-[name].[ext]',
                            outputPath: 'assets/svg'
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },

            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.svg', '.sass']
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        title: 'Circuit',
        inject: 'head',
        template: './src/index.html'
    })]

};