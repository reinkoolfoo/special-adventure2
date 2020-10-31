module.exports = {
    extends: [ 
        // 'standard',
        // 'airbnb',
        'react',
        'react-jsx',
        // 'eslint-config-airbnb',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    settings: {
      'import/parsers': {
        'babel-eslint': ['.js', '.jsx'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': [0, 0],
      'no-undef': 0,
      'linebreak-style': 0,
      'semi': 0
      
      // '@typescript-eslint/indent': [2, 2],

    },
  };