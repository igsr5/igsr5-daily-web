import { Category as DBCategory, Post as DBPost } from '@prisma/client';

import { Post } from '../__generated__/gql/graphql';

export const serializePost = (post: DBPost & { Category: DBCategory }): Post => {
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
