import fs from 'fs';
import { createSchema, createYoga } from 'graphql-yoga';

const typeDefs = fs.readFileSync('../server/schema.graphql', 'utf8');

const resolvers = {
  Query: {
    users() {
      return [{ name: 'Nextjs' }];
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
});
