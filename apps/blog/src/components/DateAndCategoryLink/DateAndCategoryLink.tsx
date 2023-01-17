import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

import { Category } from '../../__generated__/gql/graphql';

interface Props {
  date: string;
  category?: Category;
}

function DateAndCategoryLink({ date, category }: Props) {
  return (
    <>
      {date}
      {category && (
        <>
          {' '}
          at{' '}
          <NextLink href={`/category/${category.id}`} passHref>
            <Link color="primary">{category.name}</Link>
          </NextLink>{' '}
          category
        </>
      )}
    </>
  );
}

export default DateAndCategoryLink;
