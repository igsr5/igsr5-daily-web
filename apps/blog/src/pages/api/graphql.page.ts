import fs from 'fs';
import { createSchema, createYoga } from 'graphql-yoga';
import path from 'path';

import { resolvers } from '../../server/resolvers';

const typeDefs = fs.readFileSync(path.join(process.cwd(), 'src', 'schema.graphql'), 'utf8');

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
