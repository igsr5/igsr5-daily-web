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
    include: { Category: true },
    orderBy: [orderByMap],
  });
  return posts;
};

export const getPost = async (id: string) => {
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { Category: true },
  });

  return post;
};
