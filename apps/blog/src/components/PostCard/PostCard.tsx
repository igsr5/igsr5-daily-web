import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Link, NextUITheme } from '@nextui-org/react';

import { Post } from '../../__generated__/gql/graphql';
import DateAndCategoryLink from '../DateAndCategoryLink';

interface Props {
  post: Post;
  theme: NextUITheme;
}

function PostCard({ post, theme }: Props) {
  return (
    <Article>
      <h3>
        <NextLink href={`/${post.id}`} passHref>
          <Link underline css={{ color: theme.colors.text.value }}>
            {post.title}
          </Link>
        </NextLink>
      </h3>
      <Small theme={theme}>
        <DateAndCategoryLink date={post.published_at} category={post.category.name} />
      </Small>
      {post.subtitle && <P>{post.subtitle}</P>}
    </Article>
  );
}

export default PostCard;

const Article = styled.article`
  width: 100%;
  margin-bottom: 2.5rem;
`;

const Small = styled.small<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;

const P = styled.p`
  width: 100%;
  margin: 0;
`;
