import { ApolloServer } from 'apollo-server-express';

const resolvers = {
  Query: {
    user: (args) => {
      if (user.name === args.name) {
        return {
          user
        }
      }
    }
  },
  Issues: {
    body,
    comments
  }
}

export default resolvers;