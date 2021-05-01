const { gql } = require('apollo-server-express')
const { ApolloServer } = require('apollo-server-express');


// const userData = {
//     1: {
//         id: '1',
//         name: 'testUser',
//         email: 'test@gmail.com',
//     },
//     2: {
//         id: '2',
//         name: 'testUser2',
//         email: 'test2@gmail.com',
//     }
// }

// const projectsData = {
//     1: {
//         id: '1',
//         name: 'GitStop',
//     },
//     2: {
//         id: '2',
//         name: 'testProj',
//     }
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

  // Construct a schema, using GraphQL schema languae
  const schema = gql`
    type Query {
      hello: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

module.exports = { schema, resolvers };

