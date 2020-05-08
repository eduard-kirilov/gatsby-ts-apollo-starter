/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { v4 } from 'uuid';
import { Grid } from '@material-ui/core';

import { IProduct, IProducts } from 'utils/interface';
import { CardProduct } from 'components/card';

import { Title } from './styles';

interface IProps {
  addToCard: (key: string) => void;
}

export const Home: React.FC<IProducts & IProps> = ({
  products = [],
  addToCard,
}) => (
  <>
    <Title weight="bold">Products</Title>
    <Grid container spacing={3}>
      {products.map((item: IProduct) => (
        <CardProduct
          key={v4()}
          _id={item._id}
          url={item.url}
          price={item.price}
          title={item.title}
          addToCard={addToCard}
          subtitle={item.subtitle}
        />
      ))}
    </Grid>
  </>
);