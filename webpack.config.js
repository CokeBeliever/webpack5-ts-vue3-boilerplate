const path = require("path");

const PROJ_ROOT = path.resolve(__dirname);

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
};
