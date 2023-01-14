import postsActions from './posts';

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

describe('blog - libs/kbarActions/posts', () => {
  it('should defined', () => {
    expect(postsActions).toBeDefined();
  });

  it('should have same length with manifest', () => {
    expect(postsActions.length - 1).toBe(posts.length);
  });
});
