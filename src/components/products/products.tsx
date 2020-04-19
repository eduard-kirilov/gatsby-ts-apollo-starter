/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';

import { useQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { Grid, LinearProgress } from '@material-ui/core';
import { PRODUCTS_QUERY } from 'gql/query';

import { ICardProduct, IAllStringProps } from 'utils/interface';
import { CardProduct } from 'components/card/product';

interface IQuery {
  products?: [IAllStringProps];
}

export const Products: React.FC<IAllStringProps> = () => {
  const { loading, error, data } = useQuery<IQuery>(
    PRODUCTS_QUERY, {
    variables: { title: '' },
  });

  if (loading) return <LinearProgress />;
  const { products = [] } = data;
  return (
    <>
      <h1>Карты товаров</h1>
      <Grid container spacing={4}>
        {products.map((item: ICardProduct) => (
          <CardProduct
            key={v4()}
            url={item.url}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Grid>
    </>
  );
};