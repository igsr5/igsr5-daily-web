import { Post, PrismaClient } from '@prisma/client';

type GetPostsOption = { limit: number; orderBy: { field: string; order: 'asc' | 'desc' }; offset: number };

export const getPosts = async (opts: Partial<GetPostsOption>): Promise<Post[]> => {
  const { limit, orderBy, offset } = opts;
  const prisma = new PrismaClient();

  const orderByOption: Record<string, 'asc' | 'desc'> = {};
  if (Boolean(orderBy)) {
    orderByOption[orderBy.field] = orderBy.order;
  }

  const posts = await prisma.post.findMany({
    take: limit,
    skip: offset,
    orderBy: orderByOption,
  });
  return posts;
};

export const getPost = async (id: number) => {
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: { id },
  });

  return post;
};

export const getPostsByCategoryId = async (categoryId: number) => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    where: { category_id: categoryId },
  });

  return posts;
};

type CreatePostInput = {
  title: string;
  subtitle?: string;
  content: string;
  publishedAt: Date;
  categoryId: number;
};

export const createPost = async (input: CreatePostInput) => {
  const prisma = new PrismaClient();
  const post = await prisma.post.create({
    data: {
      title: input.title,
      subtitle: input.subtitle,
      content: input.content,
      published_at: input.publishedAt,
      category_id: input.categoryId,
    },
  });

  return post;
};
