const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true }
        }
      })
    ]
  }
});
