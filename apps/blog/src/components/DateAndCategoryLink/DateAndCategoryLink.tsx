import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

import { Category } from '../../__generated__/gql/graphql';

interface Props {
  date: string;
  category?: Category;
}

function DateAndCategoryLink({ date, category }: Props) {
  const dateObj = new Date(date);
  const formattedDate = `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
  return (
    <>
      {formattedDate}
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
