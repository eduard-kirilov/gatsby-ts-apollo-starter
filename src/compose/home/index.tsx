/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { Home } from 'components/home';
import { LinearProgressStyled } from 'components/status';
import { IProducts } from 'utils/interface';

interface IProps {
  addToCard: (key: string) => void;
}

export const ProductsCompose: React.FC<IProps> = ({ addToCard }) => {
  const { data, fetchMore, loading } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: {
      page_size: 4,
      direction: 'ASC',
    },
  });

  if (loading) return <LinearProgressStyled />;
  if (!data || !data.products) return null;

  const handleLoadMore = () => {
    fetchMore({
      query: PRODUCTS_QUERY,
      variables: {
        page_size: 4,
        last_id: data.products.last_id,
        direction: 'ASC',
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          products: {
            ...prev.products,
            data: [...prev.products.data, ...fetchMoreResult.products.data],
            first_id: fetchMoreResult.products.first_id,
            last_id: fetchMoreResult.products.last_id,
          },
        };
      },
    });
  };
  return (
    <Home
      products={data.products.data}
      addToCard={addToCard}
      handleLoadMore={handleLoadMore}
    />
  );
};
