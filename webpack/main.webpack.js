module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './electron/main.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./rules.webpack'),
  },
  externals: {
    'sqlite3': 'commonjs sqlite3',
    'knex': 'commonjs knex'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
