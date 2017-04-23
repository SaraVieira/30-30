/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext')()
  ],
};
