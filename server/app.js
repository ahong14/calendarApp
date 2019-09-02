//libraries
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var bodyParser = require('body-parser');
var { Pool, Client } = require('pg');

//postgres setup
require('dotenv').config();

var client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT
});

//connect to postgres database hosted at another port
client.connect();

//express setup
var app = express();
var router = express.Router();

//enable cross origin
// app.use(cors);

//body parser, parse body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

//routes
var users = require('./routes/users');
var events = require('./routes/events');

app.use('/api/users', users);
app.use('/api/events', events);

app.get('/', (req,res) => {
  return res.status(200).send("Hello!");
});

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log("running on port ", PORT);
});

