import { gql } from 'apollo-server-express';

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
  mocks: true,
};

export default schema;
