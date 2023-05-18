const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
// const mongoose = require("mongoose");
// var db2Connection = require('./database/db.js');


const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 8002;
// const url = `mongodb+srv://raviprakash01a:ethno@cluster0.gyv2ano.mongodb.net/?retryWrites=true&w=majority`;
// const connectionParams = {
//   useNewUrlParser: true,
// };

// database connection
// mongoose
//   .connect(url, connectionParams)
//   .then(() => {
//     console.log("Connected to the database ");
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. n${err}`);
//   });

// endpoint

app.get("/", (req, res) => {
  console.log("api called");
  res.send("api called");
});
// groups routes of home
app.get("/about", (req, res) => {
  res.send("This is Home Page");
});
app.get("/contact", (req, res) => {
  res.send("This is Contact Page");
});
app.get("/blog/lifestyle", (req, res) => {
  res.send("This is Lifestyle Page");
});
// authenticated apis
// jwt token

app.get("/add", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  // var result = num1 + num2;
  res.send({ result: add(num1, num2) });
});

// logical
function add(num1, num2) {
  return num1 + num2;
}

app.listen(port, () => {
  console.log("we started our server");
});

// nodemon
// bodyparser

// 3
// server index.js
// routes
// MVC
// flask
// Django
// laravel
// cakephp
// business logic
// m - mongodb
// v - react
// c - express
