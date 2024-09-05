module.exports = {
  '**/*.md': ['prettier --write'],
  '**/*.ts?(x)': ['prettier --write', 'eslint --fix'],
  /**
   * @note
   * To avoid getting "error TS5042: parameter 'project' cannot be mixed with source files in command",
   * we should use a function here without any arguments (staged files).
   * https://github.com/lint-staged/lint-staged/issues/829
   * https://github.com/lint-staged/lint-staged/issues/829#issuecomment-618649288
   */
  '**/*.(ts)?(x)': () => 'npm run ts:check',
};
