const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Function to dynamically generate entries
function generateEntries() {
  const componentsDir = path.resolve(__dirname, 'src/material');
  const componentFolders = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  const entries = {};
  componentFolders.forEach(folder => {
    const jsPath = path.resolve(componentsDir, `${folder}/${folder}.js`);
    const scssPath = path.resolve(componentsDir, `${folder}/${folder}.scss`);

    // Check if both JS and SCSS files exist
    // if (fs.existsSync(jsPath) && fs.existsSync(scssPath)) {
    //   entries[folder] = [jsPath, scssPath];
    // } else 
    if (fs.existsSync(jsPath)) {
      entries[folder] = jsPath;
    } 
    // else if (fs.existsSync(scssPath)) {
    //   entries[folder] = scssPath;
    // }
  });

  entries['material']=['./src/material/material.scss','./src/material/material.js']

  return entries;
}

module.exports = {
    experiments: {
        outputModule: true, // Aktifkan eksperimen output modul
      },
    
  entry: generateEntries(),
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        // name: '[name]Library',
        type: 'module', // Menggunakan 'module' untuk ES module
  
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
  ],
//   externals: {
//     lit: {
//       commonjs: 'lit',
//       commonjs2: 'lit',
//       amd: 'lit',
//       root: 'lit',
//     },
//   },
};
