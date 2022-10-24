
module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  modulePathIgnorePatterns: ["__mocks__"],
  collectCoverageFrom: [
    'src/__tests__/unit-tests/*.js',
  ],
}
