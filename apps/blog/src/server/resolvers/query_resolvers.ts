import { QueryResolvers } from '../../__generated__/gql/resolvers';
import { getCategories, getCategoryById } from '../db/category';
import { getPost, getPosts } from '../db/post';

export const queryResolvers: QueryResolvers = {
  async posts(_parent, args) {
    return await getPosts(args);
  },
  async post(_parent, args) {
    return await getPost(args.id);
  },
  async categories() {
    return await getCategories();
  },
  async category(_parent, args) {
    return await getCategoryById(args.id);
  },
};
