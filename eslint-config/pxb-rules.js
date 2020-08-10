const pxbRules = {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "default",
            "format": ["camelCase"]
        },
        {
            "selector": "variable",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"]
        },
        {
            "selector": "property",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"]
        },
        {
            "selector": "enumMember",
            "format": ["UPPER_CASE"]
        },
        {
            "selector": "parameter",
            "format": ["camelCase"],
            "leadingUnderscore": "allow"
        },
        {
            "selector": "memberLike",
            "modifiers": ["private"],
            "format": ["camelCase"],
            "leadingUnderscore": "require"
        },

        {
            "selector": "typeLike",
            "format": ["PascalCase"]
        }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/explicit-module-boundary-types': ['error', { allowArgumentsExplicitlyTypedAsAny: true }],
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowAny: true }],
    'default-case': 'error',
    'eqeqeq': 'error',
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-empty-function': 'off',
    'no-empty-constructor': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-import-assign': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-use-before-define': 'error',
    'prefer-regex-literals': 'error',
    'require-await': 'error',
    'yoda': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': 'off',
};

module.exports = pxbRules;
