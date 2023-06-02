module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['node_modules/', '*.js'],
    rules: {
        'indent': ['error', 2],
        'semi': ['error', 'always'],
        'quotes': ['error', 'double'],
    }
};