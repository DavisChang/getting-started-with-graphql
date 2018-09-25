import { gql } from 'apollo-server-express';
import resolvers from './resolvers.js';

const isMocks = false;

const typeDefs = gql`
type Auther {
  age: Int
  name: String
  Books: [String]
}

# the schema allows the following query:
type Query {
  auther: [Auther]
}
`;

const schema = {
  typeDefs,
  resolvers,
  mocks: isMocks,
};

export default schema;
