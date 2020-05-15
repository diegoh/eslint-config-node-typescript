module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    }
  },
  rules: {
    quotes: ['error', 'single'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        json: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js'] }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{ts,tsx,js,jsx}',
          'test-*.{ts,tsx,js,jsx}',
          '**/*{.,_}{test,spec}.{ts,tsx,js,jsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
          '**/karma.conf.js'
        ],
        optionalDependencies: false
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/test/helpers/**/*.ts'],
      rules: {
        'global-require': 0
      },
      env: {
        jest: true
      }
    }
  ]
};
