const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    const config = {
        mode: argv.mode,
        entry: {
            index: [
                "@babel/polyfill",
                "./Scripts/Index.tsx"
            ],
        },
        output: {
            path: path.join(__dirname, "wwwroot/lib"),
            filename: "[name].js?v=[hash]",
            publicPath: "lib"
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.tsx?$/],
                    loader: "awesome-typescript-loader"
                },
                {
                    test: /\.css?$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.(jpe?g|png|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)$/i,
                    use: [
                        "url-loader",
                        {
                            loader: "img-loader",
                            options: {
                                plugins: [
                                    require("imagemin-gifsicle")({
                                        interlaced: false
                                    }),
                                    require("imagemin-mozjpeg")({
                                        progressive: true,
                                        quality: 80,
                                        arithmetic: false
                                    }),
                                    require("imagemin-pngquant")({
                                        floyd: 0.5,
                                        quality: [0.8, 0.9],
                                        speed: 2
                                    }),
                                    require("imagemin-svgo")({
                                        plugins: [
                                            { removeTitle: true },
                                            { convertPathData: false }
                                        ]
                                    })
                                ]
                            }
                        }
                    ]
                },
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "src"),
            compress: true,
            publicPath: "/lib",
            port: 8000,
            historyApiFallback: true,
            hot: true,
            open: false,
            proxy: {
                "**": "http://localhost:5000"
            }
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        optimization: {
            mangleWasmImports: true,
            minimizer: [
                new TerserPlugin({
                    sourceMap: true
                })
            ],
            splitChunks: {
                cacheGroups: {
                    common: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "../../Views/Home/Index.cshtml",
                template: "./Views/Home/Home.cshtml",
                minify: false
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        ]
    }

    return config;
}