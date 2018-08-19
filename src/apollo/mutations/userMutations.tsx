import gql from "graphql-tag";

export const CREATE_ACCESS_TOKEN = gql`
  mutation createAccessToken($input: CreateAccessTokenInput!) {
    createAccessToken(input: $input)
  }
`;

export default {};
