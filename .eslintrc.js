/*
 * Severity should be one of the following: 0 = off, 1 = warn, 2 = error
 */

/**
 * @desc Disallow unnecessary constructors
 * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md}
 */
const noUselessConstructor = {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
};

const noDefaultExport = {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
};

const noUnusedVars = {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
};

module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        ...noUselessConstructor,
        ...noDefaultExport,
        ...noUnusedVars,
        'react/destructuring-assignment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': ['error', { some: ['nesting', 'id'] }],
        'class-methods-use-this': 'warn',
        'no-console': 'off',
        'no-debugger': 'warn',
    },
};
