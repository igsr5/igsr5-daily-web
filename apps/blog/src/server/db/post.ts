import { PrismaClient } from '@prisma/client';

type GetPostsOption = { limit?: number; orderBy?: { field: string; order: 'asc' | 'desc' }; offset?: number };

export const getPosts = async (opts: GetPostsOption) => {
  const { limit, orderBy, offset } = opts;
  const prisma = new PrismaClient();

  const orderByMap = {};
  orderByMap[orderBy.field] = orderBy.order;

  const posts = await prisma.post.findMany({
    take: limit,
    skip: offset,
    orderBy: [orderByMap],
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
