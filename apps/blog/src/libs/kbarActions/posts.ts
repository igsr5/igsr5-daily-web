import { IconActionType } from 'core/constants';

const { posts } = {
  posts: [
    {
      title: '2023-01-01',
      date: '2023-01-01',
      slug: '2023-01-01',
      category: '2023-01',
      content: '',
      subtitle: '2023-01-01',
    },
  ],
};

const postActions: IconActionType[] = [{ id: 'posts', name: 'Posts', section: 'Scope', keywords: 'post, article' }];

posts.forEach(post => {
  postActions.push({
    id: post.slug,
    name: post.title,
    subtitle: post.date,
    parent: 'posts',
    icon: 'ChevronRight',
  });
});

export default postActions;
