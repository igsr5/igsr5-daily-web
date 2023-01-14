import { Resolvers } from '../__generated__/gql/resolvers';
import { getPost, getPosts } from './db';
import { serializePost } from './utils';

export const resolvers: Resolvers = {
  Query: {
    async posts(_parent, args) {
      const { limit, orderBy, offset } = args;
      const posts = await getPosts({ limit, orderBy, offset });
      return posts.map(post => serializePost(post));
    },
    async post(_parent, args) {
      const { id } = args;
      const post = await getPost(id);
      return serializePost(post);
    },
  },
};
