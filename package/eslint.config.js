const { fixupConfigRules } = require('@eslint/compat');
const reactNative = require('@react-native/eslint-config/flat');

module.exports = [
  {
    ignores: [
      'lib/**',
      '**/build/**',
      '**/generated/**',
      '.yarn/**',
      'example/vendor/**',
      'example/ios/Pods/**',
    ],
  },
  ...fixupConfigRules(reactNative),
];
