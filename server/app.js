var express = require('express');
var app = express();

// Requires
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var messages = require('./routes/messages.js');

// Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.json());

// Routing
app.use('/messages', messages);

// Mongoose connection
var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connect(databaseUrl, { useMongoClient: true });

// Optional, but nice to have
mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

// server listen
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Running on port', port);
});