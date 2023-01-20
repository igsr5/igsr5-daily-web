import { GetStaticPaths, GetStaticProps } from 'next';
import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { PageProgressBar } from 'core';

import { GetAllPostIdsDocument, GetPostDocument, Post } from '../__generated__/gql/graphql';
import AuthorSection from '../components/AuthorSection';
import Comments from '../components/Comments';
import DateAndCategoryLink from '../components/DateAndCategoryLink';
import { PostHeader } from '../components/Header';
import SEO from '../components/SEO';
import TOC from '../components/TOC';
import markdownToHtml from '../libs/markdownToHtml';
import { getBackendApolloClient } from '../utils/backendApiClient';

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <SEO title={post.title} description={post.subtitle} />
      <PostHeader />
      <TOC />
      <Main>
        <H1>{post.title}</H1>
        <P theme={theme}>
          <DateAndCategoryLink date={post.published_at} category={post.category} />
        </P>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </Main>
      <AuthorSection hasKbarButton />
      <Comments />
      <PageProgressBar />
    </>
  );
}

export default Post;

const Main = styled.main`
  position: relative;
  margin-bottom: 3rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
  margin-top: 0;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.accents6.value};
`;

interface Paths {
  params: {
    slug: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = await getBackendApolloClient();
  const { data } = await apolloClient.query({ query: GetAllPostIdsDocument });

  const paths: Paths[] = [{ params: { slug: 'hoge' } }];
  data.posts.map(post => paths.push({ params: { slug: post.id.toString() } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const apolloClient = await getBackendApolloClient();
  const { data } = await apolloClient.query({ query: GetPostDocument, variables: { post_id: Number(params.slug) } });
  const content = await markdownToHtml(data.post.content);
  return {
    props: {
      post: {
        id: data.post.id,
        title: data.post.title,
        subtitle: data.post.subtitle,
        published_at: data.post.published_at.toString(),
        content: content,
      },
    },
  };
};
