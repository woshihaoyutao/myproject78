const path = require("path");
console.log("webpack.config.js模块被执行了");
module.exports = {
  entry: {
    index: "./src/index.js",
    one: "./src/one.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].main.js",
  },
  mode: "development",
};
