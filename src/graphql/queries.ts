import { gql } from './generated';

const getUsers = gql(`query getUsers {
  userCollection {
    edges {
      node {
        name
      }
    }
  }
}`);

export { getUsers };
