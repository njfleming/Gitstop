const express = require('express');
const axCios = require('axios');
const port = process.env.PORT || 3000;
const loginRouter = require('./routes/loginRouter.js')
const app = express();

app.use(express.json());

//Serve landing page

//Routes
app.get('/api/login', loginRouter)


app.get('*', (req, res, next) => {
  res.status(404).send('Server Error')
  return next();
})

app.use((err, req, res, next) => {
  console.log('Global Err', err);
  const defaultErr = {
    log: 'Express error handler caught: Unknown middleware error',
    status: 400,
    message: {
      err: 'Unexpected error occured',
    }
  }

  const errObj = Object.assign(defaultError, err);
  console.log('Server Error:', errObj.log);
  return res.status(errObj.status).json(errObj.message);
})

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
})