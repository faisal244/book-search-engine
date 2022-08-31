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
		id: ID!
		username: String!
		email: String!
		password: String!
		bookCount: Int!
		savedBooks: [Book]
	}

	type AuthResponse {
		token: string!
		user: User!
	}

	input SingupInput {
		username: String!
		email: String!
		password: String!
	}

	input loginInput {
		email: String!
		password: String!
	}

	input SaveBookInput {
		bookId: String!
		authors: [String]
		image: String
		title: String
		description: String
		link: String
	}

	type Query {
		me: User!
	}

	type mutation {
		signup(input: SingupInput!): AuthResponse
		login(input: loginInput!): AuthResponse
		saveBook(input: SaveBookInput!): User
		removeBook(bookId: String!): User
	}
`;

module.exports = typeDefs;
