var bodyParser = require('body-parser')
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbURL = "mongodb+srv://supply:impact@production-8khym.mongodb.net/test?retryWrites=true&w=majority";
// on se connecte à la base de données
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  
app.use(logger("dev"));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
