// Provide resolver functions for your schema fields
const authers = [{
  name: 'Hello World',
  age: 46,
  Books: [
    'Hello World',
    'Hello World'
  ]
},{
  name: 'Hello World2',
  age: 22,
  Books: [
    'Hello World2',
    'Hello World2'
  ]
}];

const resolvers = {
  Query: {
    auther: () => authers,
  },
};

export default resolvers;
