const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl":"https://www.cypress.io",
    "watchForFileChanges": false,
    //"defaultCommandTimeout": 20000,
    "pageLoadTimeout": 30000,
     viewportWidth: 1920,
     viewportHeight: 1080,
    "video": false,

    retries:{openMode:3, runMode:2},
    env:{
         
      "username": "Admin",
      "password":"admin123"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
