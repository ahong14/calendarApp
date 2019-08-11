var express = require('express');
var router = express.Router();
var sequelize = require('../sequelize');
var validator = require('validator');
var bcrypt = require('bcrypt');
var uniqid = require('uniqid');

var User = sequelize.models.User;
const saltRounds = 10;

router.get('/', (req, res) => {
  return res.status(200).send("In user route");
})

//signup user
router.post('/signup', (req, res) => {
  var userEmail = "";
  var userPassword = "";

  //extract email/password params from request
  if(req.body.params){
    userEmail = req.body.params.email;
    userPassword = req.body.params.password;
  }

  else if(req.body){
    userEmail = req.body.email;
    userPassword = req.body.password;
  }

  //check for valid email
  if(validator.isEmail(userEmail) === false){
    res.status(200).json({
      success: false,
      message:"Invalid email"
    })
  }

  //check for valid password length
  if(validator.isLength(userPassword, {min: 7,max: 20}) === false)
  {
    res.status(200).json({
      success: false,
      message:"Password must be minimum 8 characters, max 20 characters"
    })
  }

  //hash user password
  bcrypt.hash(userPassword, saltRounds, (err, hash) => {
    if(err){
      res.status(200).json({
        success: false,
        message: "Error hashing password"
      })
    }

    //after hashing password, create user record and insert into database
    User.create({
      id: uniqid(),
      email: userEmail,
      password: hash
    })
    .then(user => {
      res.status(200).json({
        success: true,
        message: "User created!"
      })
    })
  })
})

//get all users from database
router.get('/getUsers', (req, res) => {
  User.findAll({
    raw: true
  }).then((users) => {    
    //return all users from database
    return res.status(200).json({
      success: true,
      users: users
    })
  })
})

//login user

module.exports = router;
