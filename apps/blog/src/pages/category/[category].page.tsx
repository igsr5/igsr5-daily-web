import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { Post } from '../../__generated__/gql/graphql';
import AuthorSection from '../../components/AuthorSection';
import { MainHeader } from '../../components/Header';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';

interface Props {
  category: string;
  posts: Post[];
}

function EachCategory({ category, posts }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <SEO title={category} />
      <MainHeader />
      <AuthorSection />
      <H2>
        Posts in <strong>{category}</strong> category
      </H2>
      <main>
        {posts.map(post => (
          <PostCard
            key={post.id}
            postId={post.id}
            title={post.title}
            subtitle={post.subtitle}
            date={post.published_at}
            categoryName={post.category.name}
            theme={theme}
          />
        ))}
      </main>
    </>
  );
}

export default EachCategory;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
`;

interface Paths {
  params: {
    category: string;
  };
}

const categories = ['2023-01'];

export async function getStaticPaths() {
  const paths: Paths[] = [];
  categories.map(category => paths.push({ params: { category } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  if (!categories.includes(category)) {
    return { notFound: true };
  }
  const postsInCategory = getAllPostsByCategory(category);

  return { props: { category, allPosts: postsInCategory } };
}
const getAllPostsByCategory = (category: string) => {
  return [
    {
      title: '2023-01-01',
      date: '2023-01-01',
      slug: '2023-01-01',
      category: category,
      content: '',
    },
  ];
};
