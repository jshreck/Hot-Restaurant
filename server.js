var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var table = [
//     {
//         id: 0,
//         reservedBy: "Julia"
//     }
// ];

var reservations = [];
var waitlist = [];
var tables = [
    {
        id: 1,
        seated: 'Joe'
    }, 
    {
        id: 2,
        seated: 'Suzy'
    },
    {
        id: 3,
        seated: 'Sally'
    },
    {
        id: 4,
        seated: 'Greg'
    }, 
    {
        id: 5,
        seated: 'Jim'
    }
];

app.get("/api/reservations", function (req, res) {
    return res.send(JSON.stringify(reservations));
});

app.post("/api/reservations", function (req,res) {
    var reservation = req.body;
    
    //count = 0;
    // reservations.forEach(reservation, function () {
    //     if (count < 5) {
    //         //seat at tables
    //     count++;
    //     }

    //     else {
    //         //put on waitlist
    //     }
    // });
    
    if (reservations.length >= 4) {
        waitlist.push(reservation);
    }
    else {
        reservations.push(reservation)
    }
});

