/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { v4 } from 'uuid';
import { Grid } from '@material-ui/core';

import { ICardProduct, IAllStringProps } from 'utils/interface';
import { CardProduct } from 'components/card';

interface IProps {
  products?: [IAllStringProps];
}

export const Products: React.FC<IProps> = ({ products = []}) => (
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