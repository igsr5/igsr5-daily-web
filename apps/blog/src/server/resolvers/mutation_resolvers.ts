import { MutationResolvers } from '../../__generated__/gql/resolvers';
import { createCategory, getCategoryByName } from '../db/category';
import { createPost } from '../db/post';
import { calculateCategoryName } from '../utils';

export const mutationResolvers: MutationResolvers = {
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
