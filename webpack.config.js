const path = require("path");

module.exports = {
  entry: "./src/client/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  target: "node",
  mode: "development",
  devServer: {
    publicPath: '/dist/',
    contentBase: './src/client'
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
