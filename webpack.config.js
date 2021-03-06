var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './app/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  //自动打开浏览器插件
  // plugins: [
  //   new OpenBrowserPlugin({
  //     url: 'http://localhost:8080'
  //   })
  // ],
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]' //
      },
    ]
  }
};
