var express = require('express');
var router = express.Router();
var sequelize = require('../sequelize');
var uniqid = require('uniqid');
var verifyJWT = require('../verifyJwtMiddleware');

var Event = sequelize.models.Event;

//allow user to create event
router.post('/createEvent', verifyJWT.verifyJWT, (req, res) => {
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

//get events for logged in user
router.get("/getEvents", verifyJWT.verifyJWT, (req, res) => {
    //extract user email from JWT payload
    var payload = req.decoded;
    var ownerEmail = payload.data.email;

    //get all events from database owned by user's email
    Event.findAll({
        where: {
            ownerEmail: ownerEmail
        },

        raw: true
    }).then(events => {
        console.log("all user events: ", events);
        //TODO: sort by date
        return res.status(200).json({
            success: true,
            data: events
        })
    })
})

//TODO delete event
router.delete("/deleteEvent", verifyJWT.verifyJWT, (req, res) => {
    var deletedEventId = req.data.id;

    //find event based on matching ID
    Event.findOne({
        where: {
            id: deletedEventId
        }
    }).then(event => {
        //if event was found based on matching ID, remove event from database
        if(event){
            event.destroy();
            return res.status(200).json({
                success: true,
                message: "Event deleted!"
            })
        }

        else{
            return res.status(200).json({
                success:false,
                message: "Error deleting event"
            })
        }
    })
})



//TODO update event
router.put("/updateEvent", verifyJWT.verifyJWT, (req, res) => {

})



module.exports = router;