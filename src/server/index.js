const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const axios = require('axios');
const loginRouter = require('./routes/loginRouter.js');
const schema = require('./schema/dbSchema.js');
const resolvers = require('./resolvers/resolvers.js');
const app = express();
const port = process.env.PORT || 8000;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
});

// Routes
// app.get('/api/login', loginRouter)

// app.get('*', (req, res, next) => {
//   res.status(404).send('Server Error')
//   return next();
// })

// app.use((err, req, res, next) => {
//   console.log('Global Err', err);
//   const defaultErr = {
//     log: 'Express error handler caught: Unknown middleware error',
//     status: 400,
//     message: {
//       err: 'Unexpected error occured',
//     }
//   }

//   const errObj = Object.assign(defaultError, err);
//   console.log('Server Error:', errObj.log);
//   return res.status(errObj.status).json(errObj.message);
// })
