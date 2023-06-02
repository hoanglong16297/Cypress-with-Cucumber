const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/integration/**/*.feature',
    video: false,
    baseUrl: 'https://staging-app.e-ra.io/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 30000,
    requestTimeout: 60000,
    responseTimeout: 30000,
    watchForFileChanges: true,
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false,
  },
});
