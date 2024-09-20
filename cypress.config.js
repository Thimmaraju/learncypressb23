const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    //specPattern: "cypress/e2e/**/*.dbsqa.{js,jsx,ts,tsx}",

    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "watchForFileChanges": false,
   // "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 30000,
     viewportWidth: 1920,
     viewportHeight: 1080,
    "video": true,
    //videosFolder: "cypress/raju",
    
    //retries:{openMode:3, runMode:2},
    env:{
         
      "username": "Admin",
      "password":"admin123"

    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
