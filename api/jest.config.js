/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: './jest-preset.js',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
}
