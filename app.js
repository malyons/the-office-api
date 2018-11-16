const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const process = require("process");
const app = express();

//Must remain here above security checks
app.get("/status", (req, res, next) => {
    res.status(200).send({status: "OK"});
});

//Must be placed above following middleware to allow CORS preflight
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access_token, partner_app_key, partner_app_signature, request_timestamp, start, page_size, fuzion_partner_id");
    next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    let pathfinder = require("express-pathfinder");
    let routes = pathfinder(app._router.stack, ["GET","HEAD","POST","PUT","DELETE"]);
    res.status(200).send({status: "OK", data: routes});
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    //send error
    res.status(err.status || 500).send(err.message);
});

module.exports = app;
