import * as React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import Routes from "./routes";
import ThemeContext, { Color } from "./theme-context";
// import "./App.css";
// import "./scss/bootstrap.css";

const link = new HttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

class App extends React.Component<{}, { theme: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: Color.LIGHT
    };
  }
  toggleTheme = () => {
    const theme = this.state.theme === Color.DARK ? Color.LIGHT : Color.DARK;
    document.body.classList.remove(`bp3-${this.state.theme.toLowerCase()}`);
    document.body.classList.add(`bp3-${theme.toLowerCase()}`);
    this.setState({
      theme
    });
  };
  public render() {
    return (
      <ApolloProvider client={client}>
        <ThemeContext.Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          <Routes />
        </ThemeContext.Provider>
      </ApolloProvider>
    );
  }
}

export default App;
