const express = require('express')
const loginRouter = express.Router()
const loginController = require('../controllers/loginController')

app.use(
  '/login',
  loginController.authWithGithub,
  loginController.checkUser,
  (req, res) => {
    if (!req.query.userInfo) loginController.addUserToDatabase,
    next()
  },
  (req, res) => {
    res.status(200).send('/home')
  }
);