const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const axios = require('axios');
const port = process.env.PORT || 8000;
const loginRouter = require('./routes/loginRouter.js')
const app = express();
const { schema, resolvers } = require('./schema/databaseSchema.js');

// const userData = {
//   1: {
//       id: '1',
//       name: 'testUser',
//       email: 'test@gmail.com',
//   },
//   2: {
//       id: '2',
//       name: 'testUser2',
//       email: 'test2@gmail.com',
//   }
// }

// const projectsData = {
//   1: {
//       id: '1',
//       name: 'GitStop',
//   },
//   2: {
//       id: '2',
//       name: 'testProj',
//   }
// }


// const schema = gql`
// type Query{
//     users: [Users!]
//     user(id: ID!): Users
// }

// type Users{
//     id: ID!
//     name: String!
//     email: String!
// }
// `;

// const resolvers = {
//   Query: {
//     users: () => {
//       return Object.values(userData);
//       },
//     user: () => {
//       return name;
//     }
//   },
// };


// const server = new ApolloServer({
//   schema,
//   resolvers
// });


// try {
//   server.applyMiddleware({ app, path: '/graphql' });
// } catch(err){
//   console.log(err);
// }

//Serve landing page

//Routes
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


  // Construct a schema, using GraphQL schema languae
  // const typeDefs = gql`
  //   type Query {
  //     hello: String
  //   }
  // `;

  // // Provide resolver functions for your schema fields
  // const resolvers = {
  //   Query: {
  //     hello: () => 'Hello world!',
  //   },
  // };

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
})

