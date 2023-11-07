module.exports = {
  mode: 'development',
  entry: './src/main.js',
  module: {
    rules: require('./webpack.rules'),
  },
};
