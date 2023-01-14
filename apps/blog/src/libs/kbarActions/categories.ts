import { IconActionType } from 'core/constants';

const categories = ['2023-01'];

const categoryActions: IconActionType[] = [
  { id: 'category', name: 'Category', section: 'Scope', keywords: 'tag, keyword, categories' },
];

categories.forEach(category => {
  categoryActions.push({
    id: category,
    name: category,
    parent: 'category',
    icon: 'ChevronRight',
  });
});

export default categoryActions;
