module.exports = {
  roots: ['./pages', './modules'],
  testMatch: ['**/?(*.)+(test).+(ts|js)'],
  setupFilesAfterEnv: ['./setup-tests.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 30,
      statements: 40,
    },
  },
  collectCoverage: true,
};
