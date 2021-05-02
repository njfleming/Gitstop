const { gql } = require('apollo-server-express');


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
