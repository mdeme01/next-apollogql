import { gql } from './generated';

const addUser = gql(`mutation addUser($id: UUID!, $name: String!) {
  insertIntoUserCollection(objects: [{id: $id, name: $name}]) {
    affectedCount
    records {
      id
      name
    }
  }
}`);

export { addUser };
