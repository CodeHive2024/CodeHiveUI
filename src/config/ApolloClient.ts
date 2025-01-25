// ApolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3001/graphql", // replace with your backend GraphQL API URL
  }),
  cache: new InMemoryCache(),
});

export default client;
