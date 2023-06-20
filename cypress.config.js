const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://dashboard-release.socialvenu.com/",
    email:"arthurp@doublecoconut.com",
    password:"123456",
  },
});
