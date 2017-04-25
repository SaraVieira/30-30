const path = require('path');

const dir = path.join(__dirname, 'components');

module.exports = {
  components: 'components/**/*.js',
  styleguideDir: '/',
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.css/,
          include: dir,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]__[name]--[hash:base64:5]',
                camelCase: true,
                minimize: true
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /(\.jsx?)$/,
          include: [dir].concat(path.join(__dirname, 'Icons')).concat(path.join(__dirname, 'Colors')),
          loader: 'babel-loader'
        },
        {
          test: /\.svg$/,
          include: path.join(__dirname, 'Icons'),
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /\.svg$/,
          include: [dir].concat(path.join(__dirname, 'assets')),
          exclude: path.join(__dirname, 'Icons'),
          loader: 'react-svg-loader',
        },
        {
          test: /\.(png|jpg)$/,
          loaders: 'url-loader?limit=10000',
          include: path.join(__dirname, 'assets/images'),
        }
      ]
    }
  }
};
