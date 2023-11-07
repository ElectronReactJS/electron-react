module.exports = [
  {
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }
    }
  },
  {
    test: /\.(jpg|jpeg|png|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
          outputPath: 'images',
        },
      },
    ],
  }
];
