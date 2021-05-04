const axios = require('axios');

const loginController = {};

const clientID = process.env.GITHUB_AUTH_ID;
const clientSecret = process.env.GITHUB_AUTH_SECRET;

loginController.authWithGithub = (req, res, next) => {
  const body = {
    client_id: clientID,
    client_secret: clientSecret,
    code: req.query.code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios.post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((result) => result.data['access_token'])
    .then((token) => {
      console.log('My token:', token);
      res.json({ ok: 1 });
      next();
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

exports.module = loginController;
