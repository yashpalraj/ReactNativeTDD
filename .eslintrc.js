module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  plugins: ['detox', 'jest'],
  env: {
    'detox/detox': true,
    'jest/globals': true,
  },
  rules: {
    'react/prop-types': 'off',
  },
};
