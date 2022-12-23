const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const { VueLoaderPlugin } = require("vue-loader");

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
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
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
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(PROJ_ROOT, "src/assets/image"),
        type: "asset",
        generator: {
          filename: "image/[hash][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        include: path.resolve(PROJ_ROOT, "src/assets/font"),
        type: "asset/resource",
        generator: {
          filename: "font/[hash][ext]",
        },
      },
    ],
  },
};
