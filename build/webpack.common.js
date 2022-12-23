const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const PROJ_ROOT = path.resolve(__dirname, "..");

module.exports = {
  entry: {
    main: path.resolve(PROJ_ROOT, "src/index.js"),
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(PROJ_ROOT, "dist"),
    chunkFilename: "js/[name].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack5+ts+vue3",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(PROJ_ROOT, "src"),
    },
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv()],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
