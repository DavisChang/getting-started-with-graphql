// Provide resolver functions for your schema fields
const authors = [{
  id: 1,
  name: 'Kevin',
  age: 11,
  books: [
    'Kevin book1',
    'Kevin book2'
  ]
},{
  id: 2,
  name: 'Henry',
  age: 22,
  books: [
    'Henry book1',
    'Henry book2'
  ]
},{
  id: 3,
  name: 'Davis',
  age: 22,
  books: [
    'Davis book1',
    'Davis book2'
  ]
}];

const resolvers = {
  Query: {
    authors: () => authors,
    author: (root, { id }) => {
      return authors.find(author => author.id === id);
    }
  },
};

export default resolvers;
