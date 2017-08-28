var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

// GET messages from mongo
router.get('/', function (req, res) {
    Message.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data from GET', data);
            res.send(data);
        }
    });
});

// POST messages to mongo
router.post('/', function (req, res) {
    var messageToAdd = new Message(req.body);

    messageToAdd.save(function (err, data) {
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});

module.exports = router;