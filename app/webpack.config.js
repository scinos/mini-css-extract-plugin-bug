const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "index.js",
  plugins: [new MiniCssExtractPlugin()],
};
