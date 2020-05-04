/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { Home } from 'components/home';
import { IProducts } from 'utils/interface';

interface IQuery {
  addToCard: (key: string) => void;
}

export const ProductsCompose = ({ addToCard }) => {
  const { data } = useQuery<IProducts & IQuery>(PRODUCTS_QUERY, {
    variables: { title: '' },
  });

  if (data && data.products) {
    return <Home products={data.products} addToCard={addToCard} />;
  }
  return null;
};
