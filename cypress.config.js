const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/integration/**/*.feature',
    video: false,
    baseUrl: process.env.REACT_APP_BASE_URL,
    // baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 60000,
    responseTimeout: 30000,
    watchForFileChanges: true,
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false,
  },
});
