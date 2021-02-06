module.exports = {
  roots: ['./pages', './modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(test).+(ts|js)'],
  setupFiles: ['./setup-tests.js'],
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
