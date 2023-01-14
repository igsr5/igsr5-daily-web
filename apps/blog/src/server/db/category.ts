import { Category, PrismaClient } from '@prisma/client';

export const getCategoryByPostId = async (postId: number): Promise<Category> => {
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
    include: {
      Category: true,
    },
  });
  return post.Category;
};
