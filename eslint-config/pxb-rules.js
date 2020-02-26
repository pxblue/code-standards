const pxbRules = {
    '@typescript-eslint/array-type':                    ['error', {default: 'array-simple'}],
    '@typescript-eslint/consistent-type-definitions':   ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/interface-name-prefix':         'off',
    '@typescript-eslint/no-array-constructor':          'off',
    '@typescript-eslint/no-explicit-any':               'off',
    '@typescript-eslint/no-require-imports':            'off',
    '@typescript-eslint/no-unnecessary-condition':      'off',
    '@typescript-eslint/no-unnecessary-qualifier':      'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unused-vars':                'error',
    '@typescript-eslint/prefer-function-type':          'error',
    '@typescript-eslint/prefer-namespace-keyword':      'off',
    '@typescript-eslint/prefer-readonly':               'error',
    '@typescript-eslint/promise-function-async':        'off',
    '@typescript-eslint/restrict-plus-operands':        'error',
    '@typescript-eslint/unbound-method':                'off',
    '@typescript-eslint/ban-ts-ignore':                 'off',
    'default-case':                                     'error',
    'eqeqeq':                                           'error',
    'no-alert':                                         'error',
    'no-await-in-loop':                                 'error',
    'no-empty-function':                                ['error', { 'allow': ['constructors'] }],
    'no-empty-constructor':                             'off',
    'no-console':                                       ['error', { allow: ['error'] }],
    'no-import-assign':                                 'error',
    'no-caller':                                        'error',
    'no-else-return':                                   'error',
    'no-eq-null':                                       'error',
    'no-eval':                                          'error',
    'no-floating-decimal':                              'error',
    'no-implied-eval':                                  'error',
    'no-lone-blocks':                                   'error',
    'no-multi-str':                                     'error',
    'no-new':                                           'error',
    'no-new-func':                                      'error',
    'no-octal-escape':                                  'error',
    'no-param-reassign':                                'error',
    'no-proto':                                         'error',
    'no-return-assign':                                 'error',
    'no-self-compare':                                  'error',
    'no-sequences':                                     'error',
    'no-shadow':                                        'error',
    'no-throw-literal':                                 'error',
    'no-unused-expressions':                            'error',
    'no-useless-call':                                  'error',
    'no-undef-init':                                    'error',
    'no-undefined':                                     'off',
    'no-use-before-define':                             'error',
    'prefer-regex-literals':                            'error',
    'require-await':                                    'error',
    'yoda':                                             'error',
    'arrow-body-style':                                 ['error', 'as-needed'],
    'arrow-parens':                                     ['error', 'always'],
    'no-duplicate-imports':                             'error',
    'no-useless-computed-key':                          'error',
    'no-var':                                           'error',
    'prefer-arrow-callback':                            'error',
    'prefer-const':                                     'error',
    'prefer-spread':                                    'error',
    'prefer-template':                                  'error',
    'sort-imports':                                     'off',
};

module.exports = pxbRules;
