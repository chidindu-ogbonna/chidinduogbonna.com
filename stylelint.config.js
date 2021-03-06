module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'length-zero-no-unit': null,
    'selector-pseudo-element-colon-notation': null,
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
  },
}
