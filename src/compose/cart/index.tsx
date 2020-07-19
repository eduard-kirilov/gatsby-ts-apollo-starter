/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { Grid } from '@material-ui/core';

import { Title } from 'components/cart/styles';
import { TableCartCompose } from './table';

const CartComposeMemo: FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Title weight="bold">My cart</Title>
        <TableCartCompose />
      </Grid>
    </Grid>
  );
};

export const CartCompose = memo(CartComposeMemo);
