module.exports = {
  rootDir: '.',
  preset: 'react-native',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
  moduleNameMapper: {
    '@gorhom/portal': '<rootDir>/src',
  },
};
