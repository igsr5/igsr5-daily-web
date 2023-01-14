import DataLoader from 'dataloader';

import { getCategories } from '../db/category';

export const categoryLoader = new DataLoader(async (ids: number[]) => {
  const categories = await getCategories({ in: { ids } });

  return ids.map(id => categories.find(category => category.id === id));
});
