import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import schema from './schema.js';

const server = new ApolloServer(schema);
const app = express();
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});