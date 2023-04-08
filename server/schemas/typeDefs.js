const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Message {
    message: String
    error: Boolean
  }

  type Query {
    console: String
  }

  type Mutation {
    sendMessage(emailInput: String, fromInput: String, messageInput: String): Message
  }
`;

module.exports = typeDefs;
