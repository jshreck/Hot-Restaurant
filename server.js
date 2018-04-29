var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//including these in server file and app passing in to use is express
//api first because that's where we're pulling data to display inside of html pages
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });