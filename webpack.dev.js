const path = require("path");
const dotenv = require("dotenv");
const merge = require("webpack-merge");
const common = require("./webpack.common");

dotenv.config();
const { PORT } = process.env;
if (!PORT) {
  throw new Error("missing environment variables");
}

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    clientLogLevel: "error",
    contentBase: path.join(__dirname, "dist"),
    open: true,
    port: PORT,
    stats: "errors-only",
  }
});
