var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var table = [
    {
        id: 0,
        reservedBy: "Julia"
    }
];

var reservations = [];

app.get("/api/reservations", function (req, res) {
    return res.send(JSON.stringify(reservations));
});

app.post("/api/reservations", function (req,res) {
    var reservation = req.body;
    reservations.push(reservation)
});

