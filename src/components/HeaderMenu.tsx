import * as React from "react";
import { Container } from "reactstrap";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import ThemeContext, { Color } from "../theme-context";

export default class HeaderMenu extends React.PureComponent<any, any> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Navbar>
            <Container className="clearfix">
              <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
              </Navbar.Group>
              <Navbar.Group align={Alignment.RIGHT}>
                <Button minimal={true} icon="moon" onClick={toggleTheme}>
                  {theme === Color.DARK ? "Dark" : "Light"} mode
                </Button>
              </Navbar.Group>
            </Container>
          </Navbar>
        )}
      </ThemeContext.Consumer>
    );
  }
}
