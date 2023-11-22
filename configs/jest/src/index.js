const path = require('path');

exports.config = function generateJestConfig({ rootDir, ...rest }) {
  const packageJSON = require(path.join(rootDir, 'package.json'));

  const getTestEnvironment = (packageJSON) => {
    const devDependencies = Object.keys(packageJSON.devDependencies || {});
    const isWebapp = devDependencies.some(
      (devDependency) => devDependency === '@testing-library/react',
    );

    return isWebapp ? 'jsdom' : 'node';
  };

  const getDefaultSetupFilesAfterEnv = () => {
    try {
      require(path.join(rootDir, 'jest.setup.js'));
      return [`${rootDir}/jest.setup.js`];
    } catch (e) {
      return [];
    }
  };

  return {
    rootDir,
    displayName: packageJSON.name,
    setupFilesAfterEnv: getDefaultSetupFilesAfterEnv(),
    testEnvironment: getTestEnvironment(packageJSON),
    moduleNameMapper: {
      '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    ...rest,
  };
};
