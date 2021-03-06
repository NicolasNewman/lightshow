module.exports = {
    extends: 'erb',
    rules: {
        // A temporary hack related to IDE not resolving correct package.json
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/static-property-placement': 'off',
        'react/prefer-stateless-function': 'warn',
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-plusplus': 'off',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
    },
    settings: {
        'import/resolver': {
            // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
            node: {},
            webpack: {
                config: require.resolve(
                    './.erb/configs/webpack.config.eslint.js'
                ),
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
