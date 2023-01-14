import { Category as DBCategory, Post as DBPost, PrismaClient } from '@prisma/client';

import { Post } from '../__generated__/gql/graphql';
import { Resolvers } from '../__generated__/gql/resolvers';

export const resolvers: Resolvers = {
  Query: {
    async posts() {
      const posts = await getPosts();
      const returnPosts: Post[] = posts.map(post => serializePost(post));

      return returnPosts;
    },
  },
};

const getPosts = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({ include: { Category: true } });
  return posts;
};

const serializePost = (post: DBPost & { Category: DBCategory }): Post => {
  return {
    id: post.id.toString(),
    title: post.title,
    content: post.content,
    subtitle: post.subtitle,
    published_at: post.published_at.toISOString(),
    category: post.Category
      ? {
          id: post.Category.id.toString(),
          name: post.Category.name,
        }
      : null,
  };
};
