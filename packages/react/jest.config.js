const { config } = require('@junhokims/jest-config');

module.exports = config({
  rootDir: __dirname,
  setupFilesAfterEnv: ['./jest.setup.js'],
});
