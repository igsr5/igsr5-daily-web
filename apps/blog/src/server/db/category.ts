import { Category, PrismaClient } from '@prisma/client';

export const getCategories = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({});
  return categories;
};

export const getCategoryById = async (id: number): Promise<Category | null> => {
  const prisma = new PrismaClient();
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

export const getCategoryByName = async (name: string): Promise<Category | null> => {
  const prisma = new PrismaClient();
  const category = await prisma.category.findUnique({
    where: {
      name,
    },
  });
  return category;
};

export const createCategory = async (name: string): Promise<Category> => {
  const prisma = new PrismaClient();
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return category;
};
