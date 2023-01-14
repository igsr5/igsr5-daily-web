import { Category, PrismaClient } from '@prisma/client';

type GetCategoriesOption = { in: { ids: number[] } };
export const getCategories = async (opts?: Partial<GetCategoriesOption>) => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    where: {
      id: {
        in: opts.in.ids,
      },
    },
  });
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
