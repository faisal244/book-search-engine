const { gql } = require("apollo-server");

const typeDefs = gql`
type Book {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}
type User {
  id:ID!
  username: String!
  email: String!
  password: String!
  bookCount: Int!
  savedBooks: [Book]
}

type SignupResponse {
  token: string
  user: User
}

input SingupInput {
  username: String!
  email: String!
  password: String!
  

}

mutation{
  signup(input:SingupInput!): SignupResponse
}
`;

module.exports = typeDefs;
