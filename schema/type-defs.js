// typeDefs is a required argument and should be a GraphQL schema language string or an array of GraphQL schema language strings or a function that takes no arguments and returns an array of GraphQL schema language strings. The order of the strings in the array is not important, but it must include a schema definition.
const { gql } = require("apollo-server");

const typeDefs = gql`
type User {
    id: ID!
    name: String
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
}

type Movie {
    id: ID!
    name: String!
    year: Int!
    inTheatres: Boolean!
}

type Query {
    users: UsersResult
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
}

input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality!
}

input UpdateUsernameInput {
    id: ID!
    username: String!
}

type Mutation {
    createUser(input: CreateUserInput!): User #includes all variables like id, name, age etc.
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
}

type Subscription {
    userAdded: User!
}

enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    RUSSIA
    USA
}

type UsersSuccessfulResult {
    users: [User!]!
}

type UsersErrorResult {
    message: String!
}

union UsersResult = UsersSuccessfulResult | UsersErrorResult
`;
module.exports = {typeDefs};
