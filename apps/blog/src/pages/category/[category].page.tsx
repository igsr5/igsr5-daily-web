import { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { graphql } from '../../__generated__/gql';
import { Category, GetCategoryByIdDocument } from '../../__generated__/gql/graphql';
import AuthorSection from '../../components/AuthorSection';
import { MainHeader } from '../../components/Header';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';
import { getBackendApolloClient } from '../../utils/backendApiClient';

export const getAllCategoryIdsQueryDocument = graphql(`
  query GetAllCategoryIds {
    categories {
      id
    }
  }
`);

export const getCategoryByIdQueryDocument = graphql(`
  query GetCategoryById($category_id: Int!) {
    category(id: $category_id) {
      id
      name
      posts {
        id
        title
        subtitle
        published_at
        category {
          id
          name
        }
      }
    }
  }
`);

interface Props {
  category: Category;
}

function EachCategory({ category }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <SEO title={category.name} />
      <MainHeader />
      <AuthorSection />
      <H2>
        Posts in <strong>{category.name}</strong> category
      </H2>
      <main>
        {category.posts.map(post => (
          <PostCard
            key={post.id}
            postId={post.id}
            title={post.title}
            subtitle={post.subtitle}
            date={post.published_at}
            category={post.category}
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

// interface Paths {
//   params: {
//     category: string;
//   };
// }
//
// export const getStaticPaths: GetStaticPaths = async () => {
//   const apolloClient = await getBackendApolloClient();
//   const result = await apolloClient.query({ query: GetAllCategoryIdsDocument });
//   const { data } = result;
//
//   const paths: Paths[] = [];
//   if (data.categories) {
//     data.categories.map(category => paths.push({ params: { category: category.id.toString() } }));
//   }
//
//   return { paths, fallback: 'blocking' };
// };

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const apolloClient = await getBackendApolloClient();
  const { data } = await apolloClient.query({
    query: GetCategoryByIdDocument,
    variables: {
      category_id: Number(params.category),
    },
  });

  const category = data.category;

  return { props: { category } };
};
