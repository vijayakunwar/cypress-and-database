const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');


module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.db = {

        userName: "localhost\\User",
        password: "",
        // server: "localhost\\SQLEXPRESS",
        // server: "localhost",
        server: "localhost",
        options: {
          database: "pubs",
          // port: 1433,
          encrypt: false,
          rowCollectionOnRequestCompletion: true
        }

      }


      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks)

      return config;
    },
  },
});
