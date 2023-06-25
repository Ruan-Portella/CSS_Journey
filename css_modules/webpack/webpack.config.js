const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: [
              {
              loader: 'style-loader',
              options: {
                esModule: true,
              },
            }, 
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  namedExport: true,
                  localIdentName: "[name]-[local]-[hash:base64:5]",
                },
              },
            }]
          },
        ]
      }
};