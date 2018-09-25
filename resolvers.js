import mongoose from 'mongoose';
import authorModel from './models/author.js';

const resolvers = {
  Query: {
    authors: () => {

    },
    author: (root, { id }) => {

    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ age: age, name: name, books: books });
      return author.save();
    }
  }
};

export default resolvers;
