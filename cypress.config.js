const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.edu.goit.global/account/login',
    viewportHeight: 720,
    viewportWidth: 1280,
    video: true,
  },
});
