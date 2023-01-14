import { Resolvers } from '../../__generated__/gql/resolvers';
import { categoryResolvers } from './category_resolvers';
import { mutationResolvers } from './mutation_resolvers';
import { postResolvers } from './post_resolvers';
import { queryResolvers } from './query_resolvers';
import { scalars } from './scalars';

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  Post: postResolvers,
  Category: categoryResolvers,
  ...scalars,
};
