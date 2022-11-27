const db = require("./config/db");
const inquirer = require("inquirer");
require("console.table");

// connect db
db.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("db connection success");
    start();
  }
});
