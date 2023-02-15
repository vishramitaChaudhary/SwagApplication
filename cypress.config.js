const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't3o7ad',
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 10000,
    chromeWebSecurity: false,

    
      "reporter": "mochawesome",
      
      "reporterOptions":{
                           "chats":true,
                 "overwrite":false,
                 "html":false,
                 "json":true,
                 "reportDir": "cypress/reports"
                 
                },
    //reporter: 'mochawesome',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here



  



      
      }
    },
  },
);
