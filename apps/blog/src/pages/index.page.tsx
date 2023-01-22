import { GetStaticProps, NextPage } from 'next';
import { useTheme } from '@nextui-org/react';

import { graphql } from '../__generated__/gql';
import { AllowOrderField, GetPostsDocument, Post, Sort } from '../__generated__/gql/graphql';
import AuthorSection from '../components/AuthorSection';
import { MainHeader } from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getBackendApolloClient } from '../utils/backendApiClient';

export const getPostsQueryDocument = graphql(`
  query getPosts($limit: Int, $offset: Int, $orderBy: OrderByInputForPost) {
    posts(limit: $limit, offset: $offset, orderBy: $orderBy) {
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
`);

export const getAllPostIdsQueryDocument = graphql(`
  query GetAllPostIds {
    posts {
      id
    }
  }
`);

export const getPostQueryDocument = graphql(`
  query GetPost($post_id: Int!) {
    post(id: $post_id) {
      id
      title
      content
      subtitle
      published_at
      category {
        id
        name
      }
    }
  }
`);

interface Props {
  posts: Post[];
}

const Page: NextPage<Props> = ({ posts }) => {
  const { theme } = useTheme();

  return (
    <>
      <SEO />
      <MainHeader />
      <AuthorSection />
      <main>
        {posts.map(post => (
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
};

export default Page;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apolloClient = await getBackendApolloClient();

  const result = await apolloClient.query({
    query: GetPostsDocument,
    variables: {
      orderBy: {
        order: Sort.Desc,
        field: AllowOrderField.PublishedAt,
      },
    },
  });

  const {
    data: { posts },
  } = result;

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
