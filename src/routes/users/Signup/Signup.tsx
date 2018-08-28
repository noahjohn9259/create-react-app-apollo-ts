import * as React from "react";
import { Container } from "reactstrap";
import { Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormSignup from "./FormSignup";
import Helmet from "react-helmet";
import ThemeContext, { Color } from "../../../theme-context";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

class Signup extends React.PureComponent<any, any> {
  handleSubmit = async (values: any) => {
    return values;
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <div>
              <Helmet>
                <title>Sign Up</title>
              </Helmet>
              <Container className="py-5">
                <Wrapper>
                  <p className="text-center mb-4">
                    <img
                      width="246"
                      height="60"
                      src={
                        theme !== Color.DARK
                          ? `${process.env.PUBLIC_URL}/img/logo@1x.png`
                          : `${process.env.PUBLIC_URL}/img/logo-dark@1x.png`
                      }
                      srcSet={
                        theme !== Color.DARK
                          ? `${process.env.PUBLIC_URL}/img/logo@2x.png 2x`
                          : `${process.env.PUBLIC_URL}/img/logo-dark@2x.png 2x`
                      }
                      alt="reitscreener logo"
                    />
                  </p>
                  <Card elevation={Elevation.ONE}>
                    <FormSignup submit={this.handleSubmit} />
                    <div className="text-center">
                      Already have an account? <Link to="/signin">Sign in</Link>
                    </div>
                  </Card>
                </Wrapper>
              </Container>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Signup;
