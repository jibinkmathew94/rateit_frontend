const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

module.exports = {
  entry:"./src/js/client.js",
  output:{
    path:path.join(__dirname,'src','dist'),
    filename:"index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: path.join(__dirname,'src','dist'),
    compress: true,
    port: 3000
  }

};