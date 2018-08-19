import * as React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import Routes from "./routes";
// import "./App.css";
import "./scss/bootstrap.css";

const link = new HttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
