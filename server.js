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


// var reservations = [];
// var waitlist = [];


// if (reservations.length >= 4) {
//     waitlist.push(reservation);
// }

// else {
//     reservations.push(reservation)
// }


// app.get("/api/reservations", function (req, res) {
//     return res.send(JSON.stringify(reservations));
// });

// app.get("/api/waitlist", function (req, res) {
//     return res.send(JSON.stringify(waitlist));
// });

// app.post("/api/reservations", function (req,res) {
//     var reservation = req.body;
    
//     if (reservations.length >= 4) {
//         waitlist.push(reservation);
//     }
//     ///need something to push the res to tables
//     else {
//         reservations.push(reservation)
//     }
// });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });