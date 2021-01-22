const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"]
      },
      {
        test: /\.(jpg|png|jpeg)/,
        use: ["url-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: { loader: "url-loader" }
      }
    ]
  },
  devServer: {
    historyApiFallback:true,
  },
  mode: "development",
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
