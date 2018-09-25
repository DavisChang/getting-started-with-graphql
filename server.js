import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import schema from './schema.js';

const server = new ApolloServer(schema);

const connection = mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
});

connection.then((result) => {
  console.log('connections success!');
})

const app = express();
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});