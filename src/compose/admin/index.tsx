/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS_QUERY } from 'gql/query';
import { Admin } from 'components/admin';
import { IProducts } from 'utils/interface';

export const AdminCompose = () => {
  const { data } = useQuery<IProducts>(PRODUCTS_QUERY, {
    variables: { title: '' },
  });

  if (data && data.products) {
    return <Admin products={data.products} />;
  }
  return null;
};
