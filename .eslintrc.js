module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-param-reassign': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 0,
    'linebreak-style': 0,
    'react/prop-types': 'off',
    'object-curly-newline': 0,
  },
};
