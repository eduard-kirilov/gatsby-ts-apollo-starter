/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { v4 } from 'uuid';
import { Grid } from '@material-ui/core';

import { ICardProductProps, IProductsProps } from 'utils/interface';
import { CardProduct } from 'components/card';

import { Title } from './styles';

export const Products: React.FC<IProductsProps> = ({
  products = [],
  addToCard,
}) => (
  <>
    <Title weight="bold">Карты товаров</Title>
    <Grid container spacing={4}>
      {products.map((item: ICardProductProps) => (
        <CardProduct
          key={v4()}
          _id={item._id}
          url={item.url}
          title={item.title}
          addToCard={addToCard}
          subtitle={item.subtitle}
        />
      ))}
    </Grid>
  </>
);