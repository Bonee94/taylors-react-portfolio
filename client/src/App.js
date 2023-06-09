import PortfolioContainer from './components/PortfolioContainer';
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App () {
  return (
    <ApolloProvider client={client}>
       <PortfolioContainer/>
    </ApolloProvider>
  );
}

export default App;
