module.exports = {
  module: {
    rules: require('./rules.webpack'),
  },
  plugins: require('./plugins.webpack'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
