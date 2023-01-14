import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { PageProgressBar } from 'core';

import AuthorSection from '../components/AuthorSection';
import Comments from '../components/Comments';
import DateAndCategoryLink from '../components/DateAndCategoryLink';
import { PostHeader } from '../components/Header';
import SEO from '../components/SEO';
import TOC from '../components/TOC';
import markdownToHtml from '../libs/markdownToHtml';

interface Props {
  title: string;
  subtitle: string;
  category: string;
  date: string;
  content: string;
  ogImage: string | null;
}

function Post({ title, subtitle, category, date, content, ogImage }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <SEO title={title} description={subtitle} ogImage={ogImage} />
      <PostHeader />
      <TOC />
      <Main>
        <H1>{title}</H1>
        <P theme={theme}>
          <DateAndCategoryLink date={date} category={category} />
        </P>
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
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

export async function getStaticPaths() {
  const allPosts: PostType[] = [
    {
      title: '2023-01-01',
      date: '2023-01-01',
      slug: '2023-01-01',
      category: '2023-01-01',
      content: '',
      subtitle: '2023-01-01',
    },
  ];

  const paths: Paths[] = [];
  allPosts.map(post => paths.push({ params: { slug: post.slug } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps() {
  const currentPost: PostType = {
    title: '2023-01-01',
    date: '2023-01-01',
    slug: '2023-01-01',
    category: '2023-01-01',
    content: '',
    subtitle: '2023-01-01',
  };

  const content = await markdownToHtml(currentPost.content);

  return {
    props: {
      title: currentPost.title,
      subtitle: currentPost.subtitle ?? null,
      category: currentPost.category,
      date: currentPost.date,
      content,
    },
  };
}
