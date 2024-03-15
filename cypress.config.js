const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "C:/Users/vinic/Desktop/GrowthMachine/cypress/integration/**/*"
  }
});