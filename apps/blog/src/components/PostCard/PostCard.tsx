import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Link, NextUITheme } from '@nextui-org/react';

import { Category } from '../../__generated__/gql/graphql';
import DateAndCategoryLink from '../DateAndCategoryLink';

interface Props {
  postId: number;
  title: string;
  date: string;
  subtitle?: string;
  category?: Category;
  theme: NextUITheme;
}

function PostCard(props: Props) {
  return (
    <Article>
      <h3>
        <NextLink href={`/${props.postId}`} passHref>
          <Link underline css={{ color: props.theme.colors.text.value }}>
            {props.title}
          </Link>
        </NextLink>
      </h3>
      <Small theme={props.theme}>
        <DateAndCategoryLink date={props.date} category={props.category} />
      </Small>
      {props.subtitle && <P>{props.subtitle}</P>}
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
