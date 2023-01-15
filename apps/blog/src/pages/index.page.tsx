import { GetStaticProps, NextPage } from 'next';
import { gql } from '@apollo/client';
import { useTheme } from '@nextui-org/react';

import { Post } from '../__generated__/gql/graphql';
import AuthorSection from '../components/AuthorSection';
import { MainHeader } from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import useScrollRestoration from '../hooks/useScrollRestoration';
import { getBackendApolloClient } from '../utils/backendApiClient';

interface Props {
  allPosts: Post[];
}

const Page: NextPage<Props> = ({ allPosts }) => {
  const { theme } = useTheme();
  useScrollRestoration();

  const {
    setTarget,
    elements: posts,
    isEnded,
  } = useInfiniteScroll<Post>({ fullElements: allPosts, offset: 12, rootMargin: '100px' });

  return (
    <>
      <SEO />
      <MainHeader />
      <AuthorSection />
      <main>
        {posts.map(post => (
          <PostCard key={post.id} post={post} theme={theme} />
        ))}

        {!isEnded && <div ref={setTarget}></div>}
      </main>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apolloClient = await getBackendApolloClient();

  const result = await apolloClient.query<{ posts: Post[] }>({
    query: gql`
      query getPosts {
        posts(limit: 10, orderBy: { field: id, order: desc }) {
          id
          title
          content
          subtitle
          published_at
          category_id
          category {
            id
            name
          }
        }
      }
    `,
  });

  const {
    data: { posts },
  } = result;

  return {
    props: {
      allPosts: posts,
    },
  };
};
