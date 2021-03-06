//for data -> determining what data to deliver/receive

//pull in data we want 
var tableData = require("../data/table-data");
var waitlistData = require("../data/waitlist-data");

//when going to specific route, display certain info
module.exports = function (app) {
    app.get("/api/tables", (req, res) => {
        res.json(tableData);
    });

    app.get("/api/waitlist", (req, res) => {
        res.json(waitlistData);
    });

    //when reserving, posts to tables
    app.post("/api/tables", (req, res) => {
        //if tables available, gets reservation
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }

        //else added on waitlist
        else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });
}
