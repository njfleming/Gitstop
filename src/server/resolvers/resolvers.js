/* eslint-disable arrow-body-style */

const { userData, projectsData } = require('../models/dummyData.js')

const resolvers = {
  Query: {
    users: () => {
      return Object.values(userData);
    },
    user: (parent, { id }) => {
      return userData[id];
    },
  },
};

module.exports = resolvers;
