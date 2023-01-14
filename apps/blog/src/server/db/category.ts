import { Category, PrismaClient } from '@prisma/client';

export const getCategories = async () => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();
  return categories;
};

export const getCategoryById = async (id: number) => {
  const prisma = new PrismaClient();
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

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
