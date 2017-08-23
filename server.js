const express = require("express");
const bodyParser = require("body-parser");

// Express app
let app = express();
let PORT = process.env.PORT || 8080;

// Require models for synching
let db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers-controller.js");

app.use("/", routes);

// Sequelize Sync
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
