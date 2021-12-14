module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    Config: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-props-no-spreading': ['error', {custom: 'ignore'}],
    'arrow-body-style': 'warn', // https://eslint.org/docs/rules/arrow-body-style
    'arrow-parens': 'off', // https://eslint.org/docs/rules/arrow-parens
    'comma-dangle': ['warn', 'always-multiline'], // https://eslint.org/docs/rules/comma-dangle
    'consistent-return': 'off', // https://eslint.org/docs/rules/consistent-return
    curly: ['off', 'all'],
    'eol-last': 'off', // https://eslint.org/docs/rules/eol-last
    'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
    'implicit-arrow-linebreak': 'off', // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'import/no-cycle': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/prefer-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'jsx-a11y/anchor-is-valid': ['error', {components: ['Link'], specialLink: ['to']}], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/label-has-associated-control': 'off', // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-for': 'off', // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md [DEPRECATED]
    'jsx-quotes': ['warn', 'prefer-double'], // https://eslint.org/docs/rules/jsx-quotes
    'linebreak-style': ['warn', 'unix'], // https://eslint.org/docs/rules/linebreak-style
    'max-len': ['off', 120, {tabWidth: 4, ignoreUrls: true}], // https://eslint.org/docs/rules/max-len
    'no-alert': 'off', // https://eslint.org/docs/rules/no-alert
    'no-confusing-arrow': 'off', // https://eslint.org/docs/rules/no-confusing-arrow
    'no-console': ['error', {allow: ['error', 'warn']}], // https://eslint.org/docs/rules/no-console
    'no-debugger': 'error', // https://eslint.org/docs/rules/no-debugger
    'no-else-return': ['error', {allowElseIf: true}], // https://eslint.org/docs/rules/no-else-return
    'no-extra-bind': 'error', // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-semi': 'error', // https://eslint.org/docs/rules/no-extra-semi
    'no-lone-blocks': 'error', // https://eslint.org/docs/rules/no-lone-blocks
    'no-mixed-operators': 'error', // https://eslint.org/docs/rules/no-mixed-operators
    'no-nested-ternary': 'off', // https://eslint.org/docs/rules/no-nested-ternary
    'no-param-reassign': ['error', {props: false}], // https://eslint.org/docs/rules/no-param-reassign
    'no-plusplus': 'off', // https://eslint.org/docs/rules/no-plusplus
    'no-restricted-syntax': [
      'error',
      {
        selector: ':matches(ImportNamespaceSpecifier, ExportAllDeclaration, ExportNamespaceSpecifier)',
        message: 'Wildcard import/export not allowed',
      },
    ], // https://eslint.org/docs/rules/no-restricted-syntax
    'no-sequences': 'error', // https://eslint.org/docs/rules/no-sequences
    'no-trailing-spaces': 'warn', // https://eslint.org/docs/rules/no-trailing-spaces
    'no-underscore-dangle': ['warn', {allow: ['__get__', '__set__', '__Rewire__', '__ResetDependency__']}], // https://eslint.org/docs/rules/no-underscore-dangle
    'no-unneeded-ternary': 'error', // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unused-vars': [
      'warn',
      {vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: false, caughtErrors: 'none'},
    ], // https://eslint.org/docs/rules/no-unused-vars
    'no-useless-escape': 'error', // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-rename': 'error', // https://eslint.org/docs/rules/no-useless-rename
    'no-var': 'error', // https://eslint.org/docs/rules/no-var
    'object-curly-newline': 'off', // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-spacing': ['error', 'never'], // https://eslint.org/docs/rules/object-curly-spacing
    'object-shorthand': 'error', // https://eslint.org/docs/rules/object-shorthand
    'operator-linebreak': 'off', // https://eslint.org/docs/rules/operator-linebreak
    'prefer-const': 'warn', // https://eslint.org/docs/rules/prefer-const
    'prefer-destructuring': 'warn', // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-object-spread': 'warn', // https://eslint.org/docs/rules/prefer-object-spread
    'prettier/prettier': ['warn'], // https://eslint.org/docs/rules/prettier/prettier
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/display-name': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/forbid-prop-types': ['error', {forbid: ['any']}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/jsx-boolean-value': ['error', 'always'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-closing-bracket-location': 'warn', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-curly-spacing': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.tsx']}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-indent': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent-props': ['warn', 2], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-key': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-max-props-per-line': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-no-bind': ['error', {allowArrowFunctions: true}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-literals': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-undef': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-one-expression-per-line': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-pascal-case': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-sort-props': ['warn', {callbacksLast: true}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-uses-react': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-vars': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-wrap-multilines': ['error', {declaration: 'ignore'}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/no-array-index-key': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-danger': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-did-mount-set-state': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-update-set-state': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-direct-mutation-state': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-find-dom-node': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-multi-comp': ['error', {ignoreStateless: true}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-set-state': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-unknown-property': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unused-prop-types': 'warn', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-will-update-set-state': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/prefer-es6-class': 'warn', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prop-types': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/react-in-jsx-scope': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/require-default-props': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/self-closing-comp': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/sort-comp': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-prop-types': 'warn', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ], // https://eslint.org/docs/rules/space-before-function-paren
    indent: 'off', // https://eslint.org/docs/rules/indent
    quotes: ['warn', 'single'], // https://eslint.org/docs/rules/quotes
    radix: ['warn', 'as-needed'], // https://eslint.org/docs/rules/radix
    semi: ['error', 'always'], // https://eslint.org/docs/rules/semi
  },
};
