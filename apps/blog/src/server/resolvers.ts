import { DateTimeResolver } from 'graphql-scalars';

import {
  CategoryResolvers,
  MutationResolvers,
  PostResolvers,
  QueryResolvers,
  Resolvers,
} from '../__generated__/gql/resolvers';
import { categoryLoader } from './dataloaders/category_loader';
import { createCategory, getCategories, getCategoryById, getCategoryByName } from './db/category';
import { createPost, getPost, getPosts, getPostsByCategoryId } from './db/post';
import { calculateCategoryName } from './utils';

const postResolvers: PostResolvers = {
  id: post => post.id,
  title: post => post.title,
  published_at: post => post.published_at,
  subtitle: post => post.subtitle,
  category_id: post => post.category_id,
  category: async post => {
    return await categoryLoader.load(post.category_id);
  },
};

const categoryResolvers: CategoryResolvers = {
  id: category => category.id,
  name: category => category.name,
  posts: async category => await getPostsByCategoryId(category.id),
};

const queryResolvers: QueryResolvers = {
  async posts(_parent, args) {
    return await getPosts(args);
  },
  async post(_parent, args) {
    return await getPost(args.id);
  },
  async categories() {
    return await getCategories();
  },
  async category(_parent, args) {
    return await getCategoryById(args.id);
  },
};

const mutationResolvers: MutationResolvers = {
  createPost: async (_parent, args) => {
    const { title, subtitle, content } = args.input;
    const publishedAt = new Date();
    let category = await getCategoryByName(calculateCategoryName(publishedAt));
    if (!category) category = await createCategory(calculateCategoryName(publishedAt));

    return await createPost({
      title,
      subtitle,
      content,
      publishedAt,
      categoryId: category.id,
    });
  },
};

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  Post: postResolvers,
  Category: categoryResolvers,
  DateTime: DateTimeResolver,
};
