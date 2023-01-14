import { Resolvers } from '../__generated__/gql/resolvers';
import { getCategoryByPostId } from './db/category';
import { getPost, getPosts, getPostsByCategoryId } from './db/post';

export const resolvers: Resolvers = {
  Query: {
    async posts(_parent, args) {
      return await getPosts(args);
    },
    async post(_parent, args) {
      return await getPost(args.id);
    },
  },
  Post: {
    id: post => post.id,
    title: post => post.title,
    published_at: post => post.published_at,
    subtitle: post => post.subtitle,
    category: async post => await getCategoryByPostId(post.id),
  },
  Category: {
    id: category => category.id,
    name: category => category.name,
    posts: async category => await getPostsByCategoryId(category.id),
  },
};
