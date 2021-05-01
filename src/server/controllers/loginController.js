const axios = require('axios');
const loginController = {};

const clientID =
const clientSecret =

loginController.authWithGithub(req, res){
    // The req.query object has the query params that were sent to this route.
    const requestToken = req.query.code
    
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      // Set the content type header, so that we get the response in JSON
      headers: {
           accept: 'application/json'
      }
    }).then((response) => {
      access_token = response.data.access_token
      res.redirect('/success');
  })
  
  app.get('/success', function(req, res) {
    axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: 'token ' + access_token
      }
    }).then((response) => {
        if(response.data) res.locals.userData = response.data;
    })
  });

  next()
}

exports.module = loginController