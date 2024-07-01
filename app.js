require('dotenv').config();
//config
var express = require('express');
//server
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//what cookieparser does


//var SQliteStore = require('connect-sqlite3')(session);
//session store~~ more secure than memory store

var app = express();
//create an express app

app.locals.pluralise = require('pluralise');

module.exports = app;