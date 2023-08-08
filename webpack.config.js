const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "index.js",
        },

        plugins: [
            new HtmlWebpackPlugin({
                template:"./src/index.html",
            }),
        ],

        resolve: {
            extensions: [".js",".ts",".tsx",".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node-modules/,
                    use: 'ts-loader'
                },

                {
                    test: /\.(js|jsx)$/,
                    exclude: /node-modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                        }
                    }
                },

                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node-modules/,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ]
                },

                {
                    test: /\.(png|svg|ttf)$/,
                    type: "asset/resource",
                },
            ]
        }
    }
]