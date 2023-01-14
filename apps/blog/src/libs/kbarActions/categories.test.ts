import categoryActions from './categories';

const categories = ['2023-01'];
describe('blog - libs/kbarActions/categories', () => {
  it('should defined', () => {
    expect(categoryActions).toBeDefined();
  });

  it('should have same length with manifest', () => {
    expect(categoryActions.length - 1).toBe(categories.length);
  });
});
