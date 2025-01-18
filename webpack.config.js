const path = require('path');

module.exports = {
  // ...existing code...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // ...existing code...
};
