var express = require('express');
var router = express.Router();
var sequelize = require('../sequelize');
var uniqid = require('uniqid');
var verifyJWT = require('../verifyJwtMiddleware');

var Event = sequelize.models.Event;

//allow user to create event
router.post('/', verifyJWT.verifyJWT, (req, res) => {
    //extract user email from JWT payload
    var payload = req.decoded;
    var ownerEmail = payload.data.email;

    //extract rest of event info
    var eventContent = req.data.content;
    var eventDate = req.data.date;
    var startTime = req.data.startTime;
    var endTime = req.data.endTime;

    //create new event, insert into database
    Event.create({
        id: uniqid(),
        ownerEmail: ownerEmail,
        content: eventContent,
        eventDate: eventDate,
        startTime: startTime,
        endTime: endTime
    }).then(event => {
        return res.status(200).json({
            success: true,
            message: "Event created!"
        })
    })
})

module.exports = router;