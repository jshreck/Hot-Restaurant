//for helping direct user -> what page to deliver\

var path = require("path");

//bringing data from here into other files
module.exports = function (app) {
    app.get("/tables", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/tables.html"));
    });
    app.get("/reserve", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/reserve.html"));
    });
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}