/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { Products } from 'components/products';
import { IAllStringProps } from 'utils/interface';

interface IQuery {
  products?: [IAllStringProps];
}

export const ProductsCompose = () => {
  const { data } = useQuery<IQuery>(
    PRODUCTS_QUERY, {
    variables: { title: '' },
  });
  if (data && data.products) return <Products products={data.products} />;
  return null;
}