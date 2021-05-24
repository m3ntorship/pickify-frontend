module.exports = {
  roots: ['./pages', './modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'jest.tsconfig.json',
    },
  },
  testMatch: ['**/?(*.)+(test).+(ts|js|tsx)'],
  setupFilesAfterEnv: ['./setup-tests.ts'],
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
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
