const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Helper function to get all entry points
const getEntryPoints = (dir) => {
  const entryPoints = {};
  const components = fs.readdirSync(dir);

  components.forEach(component => {
    const componentPath = path.join(dir, component);
    if (fs.statSync(componentPath).isDirectory()) {
      const jsFile = path.resolve(componentPath, `${component}.js`);
      const scssFile = path.resolve(componentPath, `${component}.scss`);

      if (fs.existsSync(jsFile) && fs.existsSync(scssFile)) {
        entryPoints[component] = jsFile;
      }
    }
  });

  return entryPoints;
};


module.exports = {
  entry: getEntryPoints('./src/material'),
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  esmodules: true
                },
                useBuiltIns: 'entry',
                corejs: 3
              }]
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
  ],
  mode: 'production'
};
