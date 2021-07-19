module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    // globals: {
    //     __non_webpack_require__: true,
    // },
    ignorePatterns: ['dist/'],
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'object-curly-spacing': ['error', 'always'],
        'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-undef': 2,
        indent: ['error', 4],
        'comma-dangle': 0,
        'prefer-promise-reject-errors': 0,
        'no-extend-native': 0,
    },
};
