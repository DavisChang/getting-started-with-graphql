import { gql } from 'apollo-server-express';
import resolvers from './resolvers.js';

const isMocks = false;

const typeDefs = gql`
type Author {
  id: ID
  age: Int
  name: String
  books: [String]
}

# the schema allows the following query:
type Query {
  authors: [Author]
  author(id: Int): Author
}
`;

const schema = {
  typeDefs,
  resolvers,
  mocks: isMocks,
};

export default schema;
