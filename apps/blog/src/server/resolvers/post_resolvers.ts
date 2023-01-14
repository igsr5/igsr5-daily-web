import { PostResolvers } from '../../__generated__/gql/resolvers';
import { categoryLoader } from '../dataloaders/category_loader';

export const postResolvers: PostResolvers = {
  id: post => post.id,
  title: post => post.title,
  published_at: post => post.published_at,
  subtitle: post => post.subtitle,
  category_id: post => post.category_id,
  category: async post => {
    return await categoryLoader.load(post.category_id);
  },
};
