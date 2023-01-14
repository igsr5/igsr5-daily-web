import { CategoryResolvers } from '../../__generated__/gql/resolvers';
import { getPostsByCategoryId } from '../db/post';

export const categoryResolvers: CategoryResolvers = {
  id: category => category.id,
  name: category => category.name,
  posts: async category => await getPostsByCategoryId(category.id),
};
