import { Category as DBCategory, Post as DBPost } from '@prisma/client';

export const serializePost = (post: DBPost | null) => {
  if (!post) {
    return null;
  }

  return {
    id: post.id.toString(),
    title: post.title,
    content: post.content,
    subtitle: post.subtitle,
    published_at: post.published_at.toISOString(),
  };
};

export const serializeCategory = (category: DBCategory | null) => {
  if (!category) {
    return null;
  }

  return {
    id: category.id.toString(),
    name: category.name,
  };
};
