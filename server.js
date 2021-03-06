const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Express app
// =======================================================
let app = express();
let PORT = process.env.PORT || 8080;

// Require models for synching
// =======================================================
let db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
// =======================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
// =======================================================
app.use(express.static("public"));

// Set Handlebars
// =======================================================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// =======================================================
let routes = require("./controllers/burgers-controller.js");
app.use("/", routes);

// Sequelize Sync
// =======================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
