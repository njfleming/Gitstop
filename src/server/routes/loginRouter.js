const express = require('express')
const loginRouter = express.Router()
const loginController = require('../controllers/loginController')
const dbController = require('./dbController')

loginRouter.use(
  '/login',
  loginController.authWithGithub,
  loginController.checkUser,
  dbController.checkUserInDatabase,
  (req, res) => {
    if (!req.query.userInfo) dbController.addUserToDatabase,
    next()
  },
  (req, res) => {
    res.status(200).send('/home')
  }
);