/* eslint-disable no-unused-expressions */
const express = require('express');
const loginController = require('../controllers/loginController');
const dbController = require('../controllers/dbController');
require('dotenv').config();

const router = express.Router();

const clientID = process.env.GITHUB_AUTH_ID;
const clientSecret = process.env.GITHUB_AUTH_SECRET;

router.get('/', (req, res) => {
  // loginController.githubRedirect;
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo`);
  res.status(200).send('Redirect Success');
  // loginController.authWithGithub;
  // dbController.checkUser;
  // res.status(200).send('/home');
});

router.get('/oauth-callback', (req, res) => {
  loginController.authWithGithub;
  res.status(200).send('OAuth Success');
  // dbController.
});

router.post('/checkuser', (req, res) => {
  dbController.checkUser;
});

// router.route('/login')
//   .get(loginController.authWithGithub,
//     dbController.checkUser)
//   .post(dbController.addUser);

module.exports = router;
