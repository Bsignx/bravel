module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@translations(.*)$': '<rootDir>/src/translations$1',
  },
}
