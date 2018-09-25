import { gql } from 'apollo-server-express';
import resolvers from './resolvers.js';

const isMocks = false;

const typeDefs = gql`
type Author {
  id: String
  age: Int
  name: String
  books: [String]
}

# the schema allows the following query:
type Query {
  authors: [Author]
  author(id: String): Author
}

type Mutation {
  addAuthor(name: String!, age: Int!, books: [String]!): Author
  deleteAuthor(id: String!): Author
  updateAuthor(id: String!, name: String!): Author
}
`;

const schema = {
  typeDefs,
  resolvers,
  mocks: isMocks,
};

export default schema;
