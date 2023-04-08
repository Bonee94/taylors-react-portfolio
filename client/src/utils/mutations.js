import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation sendMessage($emailInput: String, $fromInput: String, $messageInput: String) {
    sendMessage(emailInput: $emailInput, fromInput: $fromInput, messageInput: $messageInput) {
    message
    error
  }
  }
`;