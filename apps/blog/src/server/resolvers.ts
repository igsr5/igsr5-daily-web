import { Post } from '../__generated__/gql/graphql';
import { Resolvers } from '../__generated__/gql/resolvers';
import { getPosts } from './db';
import { serializePost } from './utils';

export const resolvers: Resolvers = {
  Query: {
    async posts(_parent, args) {
      const { limit, orderBy, offset } = args;
      const posts = await getPosts({ limit, orderBy, offset });
      const returnPosts: Post[] = posts.map(post => serializePost(post));

      return returnPosts;
    },
  },
};
