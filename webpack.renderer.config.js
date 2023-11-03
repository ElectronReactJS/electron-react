const path = require('path');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'renderer.js',
  },
  module: {
    rules,
  },
};
