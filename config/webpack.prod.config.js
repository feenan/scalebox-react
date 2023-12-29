const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../lib"),
    library: 'lib',
    libraryTarget: "umd",
    libraryExport: 'default'
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({   // 创建该插件的实例
      filename: 'index.css'  // 指定输出的css文件的文件名
  })
  ],
  resolve: {
    //后缀名自动补全，引入时可不必写后缀名
    extensions: [".js",".ts", ".tsx",  ".jsx", ".less", ".css"],
  },
  externals: ["react", "react-dom", nodeExternals()],
};
