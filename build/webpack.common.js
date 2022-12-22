const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
};
