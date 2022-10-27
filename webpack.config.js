const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    plugins: [new MiniCssExtractPlugin({
      filename: 'styles.css'
    })],
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{ 
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          } 
        }, {
          test:/\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            "sass-loader",
          ],
        }],
      },
    devtool: env.production ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true
    },
    mode: env.production ? 'production' : 'development',
  }
}
