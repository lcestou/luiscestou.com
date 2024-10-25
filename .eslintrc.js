module.exports = {
  extends: ['react-app'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: ['SEO'] }],
  },
};
