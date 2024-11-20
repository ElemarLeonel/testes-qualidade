/** @type { import('ts-jest').JestConfigWithTsJest } */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['<rootDir>/src/tests/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
}