const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: "@vue/compiler-sfc",
          },
        },
        diagnosticOptions: {
          syntactic: false,
          semantic: true,
          declaration: false,
          global: false,
        },
      },
    }),
  ],
});
