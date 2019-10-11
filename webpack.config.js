/* eslint-disable no-undef */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js/"
  },
  devServer: {
    open: true,
    port: 9000,
    contentBase: "./public"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],
  module: {
    // babel-loaderの設定
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]]
            }
          }
        ],
        exclude: /node_modules/
      },
      // CSS取り込み設定
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss"),
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        include: path.resolve(__dirname, "src/images"),
        loader: "url-loader"
      }
    ]
  }
};
