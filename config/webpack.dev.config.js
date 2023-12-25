const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../demo/index.js"), // 项目入口，处理资源文件的依赖关系
  output: {
    filename: "index.js",
    path: path.join(__dirname, "../lib"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
    },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../demo/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "../lib")
    },
    compress: true,
    port: 3002,
    open: true,
  },

  resolve: {
    //后缀名自动补全，引入时可不必写后缀名
    extensions: [".js", ".ts", ".tsx",  ".jsx"],
  },
};