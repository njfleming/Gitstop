const { gql } = require('apollo-server')

const schema = gql`
type Users{
    id: ID!
    name: String
    email: String 
    organizations: [Organizations]
    projects: [Projects]
}
type Organizations {
    id: ID!
    name: String
}
type Projects {
    id: ID!
    name: String
    issues: [Issues]
}
type Issues{
    id: ID!
    body: String
    comments: [Comments]
}
type Comments{
    id: ID!
    body: String
    date: Date
    status: Boolean
}
type Query{
    user(name: String): Users
}
`

export default schema;

// query Users {
//   projects {
//     id
//     name
//     issues {
//       id
//       body
//       comments {
//         id
//         body
//       }
//     }
//   }
// }

module.exports = schema
