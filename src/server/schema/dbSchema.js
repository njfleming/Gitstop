const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema languae
const schema = gql`
  type Query {
    users: [User!]
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }
`;

module.exports = schema;
