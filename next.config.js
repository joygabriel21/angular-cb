const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          // emitError: true,
          emitWarning: true,
          // configFile: path.join(__dirname, '/../.eslintrc')

          configFile: path.join(__dirname, './.eslintrc.js')

        }
      });
    }
    return config
  }
}