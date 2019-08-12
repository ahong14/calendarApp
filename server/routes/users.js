var express = require('express');
var router = express.Router();
var sequelize = require('../sequelize');
var validator = require('validator');
var bcrypt = require('bcrypt');
var uniqid = require('uniqid');
var jwt = require('jsonwebtoken');


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
    return res.status(200).json({
      success: false,
      message:"Invalid email"
    })
  }

  //check for valid password length
  if(validator.isLength(userPassword, {min: 7,max: 20}) === false)
  {
    return res.status(200).json({
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
      return res.status(200).json({
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
router.post('/login', (req, res) => {
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

  User.findOne({
    where: {
      email: userEmail
    },
    raw: true
  }).then( user => {
    if(user){
      console.log("user found: ", user);
      
      bcrypt.compare(userPassword, user.password, (err, password) => {
        if(err){
          return res.status(200).json({
            success: false,
            message: "Error comparing passwords"
          })
        }

        else if (password === false){
          return res.status(200).json({
            success: false,
            message: "Passwords do not match"
          })
        }

        //passwords match
        console.log("passwords match");

        //create JWT for successful login
        jwt.sign({
          data: {
            email: user.email
          }},
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if(err){
              return res.status(200).json({
                success: false,
                message: "Error signing token"
              })
            }

            //send back auth token
            return res.status(200).json({
              success: true,
              message: "Login successful",
              token: token
            })
          } 
          );
      })
    }

    else{
      return res.status(200).json({
        success: false,
        message: "User doesn't exist"
      })
    }
  }) //end of finding one user from database


})

module.exports = router;
