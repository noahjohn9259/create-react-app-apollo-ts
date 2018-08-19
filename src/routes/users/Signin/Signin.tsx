import * as React from "react";
import { Container, Card, CardBody } from "reactstrap";
import styled from "styled-components";
import FormSignin from "./FormSignin";
import { graphql } from "react-apollo";
import { pick } from "lodash";
import { CREATE_ACCESS_TOKEN } from "./../../../apollo/mutations/userMutations";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

class Signin extends React.PureComponent<any, any> {
  handleSubmit = (values: any) => {
    try {
      const res = this.props.createAccessToken({
        variables: { input: pick(values, ["username", "password"]) }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    return values;
  };
  render() {
    return (
      <Container className="py-5">
        <Wrapper>
          <p className="text-center mb-4">
            <img
              width="279"
              height="68"
              src={`${process.env.PUBLIC_URL}/img/logo-dark@2x.png`}
              alt="reitscreener logo"
            />
          </p>
          <Card>
            <CardBody>
              <FormSignin submit={this.handleSubmit} />
            </CardBody>
          </Card>
        </Wrapper>
      </Container>
    );
  }
}

export default graphql(CREATE_ACCESS_TOKEN, { name: "createAccessToken" })(
  Signin
);
