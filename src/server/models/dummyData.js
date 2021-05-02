const userData = {
  1: {
    id: '1',
    username: 'testUser',
    email: 'test@gmail.com',
  },
  2: {
    id: '2',
    username: 'testUser2',
    email: 'test2@gmail.com',
  },
};

const projectsData = {
  1: {
    id: '1',
    name: 'GitStop',
    userId: '1',
  },
  2: {
    id: '2',
    name: 'testProj',
    userId: '1',
  },
  3: {
    id: '3',
    name: 'greatRepoBro',
    userId: '2',
  },
};

const issueData = {
  1: {
    id: '1',
    body: 'hello world ERROR',
    projectId: '1',
  },
  2: {
    id: '2',
    body: 'ERROR goodbye world',
    projectId: '1',
  },
  3: {
    id: '3',
    body: '01010010 BINARY ERROR',
    projectId: '3',
  },
};

const commentData = {
  1: {
    id: '1',
    body: 'try this solution',
    issueId: '1',
    resolved: false,
  },
  2: {
    id: '2',
    body: 'this is not an error',
    issueId: '2',
    resolved: false,
  },
  3: {
    id: '3',
    body: 'looks like a syntax issue',
    issueId: '3',
    resolved: false,
  },
};

module.exports = {
  userData, projectsData, issueData, commentData,
};
