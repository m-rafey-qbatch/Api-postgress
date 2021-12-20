
let indexRouter = require("../controller/index");
let userRoute = require("../controller/users");
let postRoute = require("../controller/posts");
let commentRoute=require('../controller/comments')
let teacherRoute = require("../controller/teachers");
let studentRoute=require('../controller/students')
const express = require("express");
const app = express();


let bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())


// Index route
app.use("/", indexRouter);

// User routes
app.use("/users",userRoute );

// Posts routes
app.use("/posts",postRoute );

// // Comments routes
app.use("/comments",commentRoute );

// // Teacher routes
app.use("/teachers",teacherRoute );

// // Student routes
app.use("/students",studentRoute );

module.exports = app;